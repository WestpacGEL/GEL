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

import { defaultProgressRopeRoot } from './overrides/progressRope';
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
	data,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	// might have to change my naming convention
	// Maybe have it as <ComponentName>Root
	const defaultOverrides = {
		ProgressRopeRoot: defaultProgressRopeRoot,
	};

	const [instancePrefix, setInstancePrefix] = useState(instanceIdPrefix);

	// create the prefix for internal IDs
	useEffect(() => {
		if (!instancePrefix) {
			setInstancePrefix(`gel-progress-rope-${useInstanceId()}`);
		}
	}, [instancePrefix]);

	const state = {
		current,
		instanceIdPrefix: instancePrefix,
		data,
		overrides: componentOverrides,
		...rest,
	};

	const {
		ProgressRopeRoot: {
			component: ProgressRopeRoot,
			styles: progressRopeRootStyles,
			attributes: progressRopeRootAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

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

	// only pass to children that are part of overrides for this component
	// if mutating children do not pass the state prop only pass needed props as part of the mutation
	// only pass to override components that make up this component
	let allChildren = [];
	if (data) {
		data.forEach(({ type, text, onClick, items }, idx) => {
			if (type && type === 'group') {
				allChildren.push(
					<Group key={idx} index={idx} text={text} overrides={componentOverrides}>
						{items.map((item, index) => (
							<Item key={index} onClick={item.onClick} overrides={componentOverrides}>
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
			})
		);
	}

	return (
		<ProgressRopeContext.Provider value={{ ...progState, instancePrefix, handleClick }}>
			<ProgressRopeRoot
				state={state}
				{...rest}
				{...progressRopeRootAttributes(state)}
				css={progressRopeRootStyles(state)}
			>
				{allChildren}
			</ProgressRopeRoot>
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
};
