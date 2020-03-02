/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import {
	Children,
	cloneElement,
	createContext,
	useReducer,
	useEffect,
	useContext,
	useState,
} from 'react';
import PropTypes from 'prop-types';

import { ProgressRope as ProgressRopeWrapper, progressRopeStyles } from './overrides/progressRope';
import { List, listStyles } from './overrides/list';
import pkg from '../package.json';
import { Group } from './Group';
import { Item } from './Item';

// ==============================
// Context and Consumer Hook
// ==============================
const ProgressRopeContext = createContext();

export const useProgressRopeContext = () => {
	const context = useContext(ProgressRopeContext);

	if (!context) {
		throw new Error('ProgressRope sub-components should be wrapped in <ProgressRope>.');
	}

	return context;
};

// ==============================
// Utils
// ==============================
const createRopeGraph = (data, children) => {
	const ropeGraph = [];
	let grouped = false;

	if (data) {
		// generate graph from data
		data.forEach(progress => {
			if (progress.type && progress.type === 'group') {
				grouped = true;
				ropeGraph.push(Array(progress.items.length).fill('unvisited'));
			} else {
				ropeGraph.push(['unvisited']);
			}
		});
	} else {
		Children.forEach(children, child => {
			if (child.type === Group) {
				grouped = true;
				ropeGraph.push(Array(Children.count(child.props.children)).fill('unvisited'));
			} else {
				ropeGraph.push(['unvisited']);
			}
		});
	}

	return { ropeGraph, grouped };
};

// ==============================
// Component
// ==============================
export const ProgressRope = ({
	current,
	instanceIdPrefix,
	headingsTag,
	assistiveText,
	data,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		ProgressRope: {
			styles: progressRopeStyles,
			component: ProgressRopeWrapper,
			attributes: () => null,
		},
		List: {
			styles: listStyles,
			component: List,
			attributes: () => null,
		},
	};

	const [instancePrefix, setInstancePrefix] = useState(instanceIdPrefix);

	// create the prefix for internal IDs
	useEffect(() => {
		if (!instancePrefix) {
			setInstancePrefix(`gel-progress-rope-${useInstanceId()}`);
		}
	}, [instancePrefix]);

	const getGroupItemsId = index => `${instancePrefix}-group-${index + 1}`;

	const state = {
		current,
		instanceIdPrefix: instancePrefix,
		headingsTag,
		assistiveText,
		data,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	const initialState = {
		currStep: current,
		currGroup: 0,
		openGroup: 0,
		...createRopeGraph(data, children),
	};

	const progressReducer = (state, action) => {
		switch (action.type) {
			case 'UPDATE_STEP':
				return { ...state, currStep: action.payload };
			case 'UPDATE_GROUP':
				return { ...state, currGroup: action.payload };
			case 'UPDATE_OPEN_GROUP':
				return { ...state, openGroup: action.payload };
			case 'UPDATE_GROUPED':
				return { ...state, grouped: action.payload };
			case 'UPDATE_GRAPH':
				return { ...state, ropeGraph: action.payload };
			default:
				return state;
		}
	};

	const [progState, dispatch] = useReducer(progressReducer, initialState);

	useEffect(() => {
		let itemCount = 0;
		const updatedGraph = progState.ropeGraph.map(group => [...group]); // deep copy

		if (progState.grouped) {
			progState.ropeGraph.forEach((group, i) => {
				if (current >= itemCount) {
					itemCount += group.length;
					if (current < itemCount) {
						// current index is in here
						const pos = group.length - (itemCount - current);
						updatedGraph[i][pos] = 'visited';
						dispatch({ type: 'UPDATE_GRAPH', payload: updatedGraph });
						dispatch({ type: 'UPDATE_STEP', payload: pos });
						dispatch({ type: 'UPDATE_GROUP', payload: i });
						dispatch({ type: 'UPDATE_OPEN_GROUP', payload: i });
					}
				}
			});

			if (current >= itemCount) {
				dispatch({ type: 'UPDATE_STEP', payload: current });
			}
		} else {
			if (current < updatedGraph.length && current >= 0) updatedGraph[current][0] = 'visited';
			dispatch({ type: 'UPDATE_STEP', payload: current });
			dispatch({ type: 'UPDATE_GRAPH', payload: updatedGraph });
		}
	}, [current]);

	const handleClick = index => {
		dispatch({ type: 'UPDATE_OPEN_GROUP', payload: index !== progState.openGroup ? index : null });
	};

	let allChildren = [];
	if (data) {
		data.forEach(({ type, text, onClick, items }, idx) => {
			if (type && type === 'group') {
				allChildren.push(
					<Group
						key={idx}
						index={idx}
						groupItemsId={getGroupItemsId(idx)}
						text={text}
						current={current}
						instanceIdPrefix={instancePrefix}
						headingsTag={headingsTag}
						assistiveText={assistiveText}
						overrides={componentOverrides}
					>
						{items.map((item, itemIndex) => (
							<Item
								key={itemIndex}
								index={itemIndex}
								onClick={item.onClick}
								end={type && type === 'end'}
								current={item.current}
								instanceIdPrefix={item.instancePrefix}
								groupIndex={idx}
								groupItemsId={getGroupItemsId(itemIndex)}
								headingsTag={item.headingsTag}
								assistiveText={item.assistiveText}
								overrides={componentOverrides}
							>
								{item.text}
							</Item>
						))}
					</Group>
				);
			} else {
				allChildren.push(
					<Item
						key={idx}
						index={idx}
						onClick={onClick}
						end={type && type === 'end'}
						current={current}
						instanceIdPrefix={instancePrefix}
						headingsTag={headingsTag}
						assistiveText={assistiveText}
						overrides={componentOverrides}
					>
						{text}
					</Item>
				);
			}
		});
	} else {
		allChildren = Children.map(children, (child, idx) =>
			cloneElement(child, {
				index: idx,
				current,
				instanceIdPrefix,
				groupItemsId: getGroupItemsId(idx),
				headingsTag,
				assistiveText,
			})
		);
	}

	return (
		<ProgressRopeContext.Provider value={{ ...progState, handleClick }}>
			<overrides.ProgressRope.component
				aria-label={assistiveText}
				current={current}
				instanceIdPrefix={instancePrefix}
				headingsTag={headingsTag}
				assistiveText={assistiveText}
				data={data}
				{...rest}
				{...overrides.ProgressRope.attributes(state)}
				css={overrides.ProgressRope.styles(state)}
			>
				<overrides.List.component
					current={current}
					instanceIdPrefix={instancePrefix}
					headingsTag={headingsTag}
					assistiveText={assistiveText}
					data={data}
					{...overrides.List.attributes(state)}
					css={overrides.List.styles(state)}
				>
					{allChildren}
				</overrides.List.component>
			</overrides.ProgressRope.component>
		</ProgressRopeContext.Provider>
	);
};

// ==============================
// Types
// ==============================
ProgressRope.propTypes = {
	/**
	 * Current active item (zero-indexed)
	 */
	current: PropTypes.number.isRequired,

	/**
	 * Define an id prefix for the group item elements e.g. for a prefix of "progress" --> "progress-group-1" etc.
	 */
	instanceIdPrefix: PropTypes.string,

	/**
	 * The tag of the heading elements wrapping group toggles for semantic reasons
	 */
	headingsTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,

	/**
	 * Text to use as the `aria-label` for the progress rope
	 */
	assistiveText: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ProgressRope: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Group: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		GroupText: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		GroupItems: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Item: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ItemText: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

ProgressRope.defaultProps = {
	current: 0,
	headingsTag: 'h3',
	assistiveText: 'In this form',
};
