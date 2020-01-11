/** @jsx jsx */

import { jsx, useBrand, overrideReconciler2 as overrideReconciler } from '@westpac/core';
import { Children, cloneElement, createContext, useReducer, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { ProgressRope as ProgressRopeWrapper, progressRopeStyles } from './overrides/progressRope';
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
	data,
	children,
	className,
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
			attributes: (_, a) => a,
		},
	};

	const state = {
		current,
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
		data.forEach(({ type, text, onClick, items }, i) => {
			if (type && type === 'group') {
				allChildren.push(
					<Group key={i} index={i} text={text} overrides={componentOverrides}>
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
						key={i}
						index={i}
						onClick={onClick}
						review={type && type === 'review'}
						overrides={componentOverrides}
					>
						{text}
					</Item>
				);
			}
		});
	} else {
		allChildren = Children.map(children, (child, i) => cloneElement(child, { index: i }));
	}

	return (
		<ProgressRopeContext.Provider value={{ ...progState, handleClick }}>
			<overrides.ProgressRope.component
				className={className}
				{...overrides.ProgressRope.attributes(state)}
				css={overrides.ProgressRope.styles(state)}
			>
				{allChildren}
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
