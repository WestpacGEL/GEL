/** @jsx jsx */

import { Children, cloneElement, createContext, useReducer, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, merge } from '@westpac/core';

import { ProgressRopeItem } from './ProgressRopeItem';
import { ProgressRopeGroup } from './ProgressRopeGroup';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================
const ProgressRopeContext = createContext();

export const useProgressRopeContext = () => {
	const context = useContext(ProgressRopeContext);

	if (!context) {
		throw new Error('ProgressRope sub-components should be wrapped in a <ProgressRope>.');
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
			if (child.type === ProgressRopeGroup) {
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
	overrides: overridesComponent,
	...props
}) => {
	const { [pkg.name]: overridesWithTokens } = useBrand();
	const overrides = {
		ropeCSS: {},
	};

	merge(overrides, overridesWithTokens, overridesComponent);

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

	const [state, dispatch] = useReducer(progressReducer, initialState);

	useEffect(() => {
		let itemCount = 0;
		const updatedGraph = state.ropeGraph.map(group => [...group]); // deep copy

		if (state.grouped) {
			state.ropeGraph.forEach((group, i) => {
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
		dispatch({ type: 'UPDATE_OPEN_GROUP', payload: index !== state.openGroup ? index : null });
	};

	let allChildren = [];
	if (data) {
		// generate the children here
		data.forEach(({ type, text, onClick, items }, i) => {
			if (type && type === 'group') {
				allChildren.push(
					<ProgressRopeGroup key={i} index={i} text={text}>
						{items.map((item, index) => (
							<ProgressRopeItem key={index} onClick={item.onClick}>
								{item.text}
							</ProgressRopeItem>
						))}
					</ProgressRopeGroup>
				);
			} else {
				allChildren.push(
					<ProgressRopeItem key={i} index={i} onClick={onClick} review={type && type === 'review'}>
						{text}
					</ProgressRopeItem>
				);
			}
		});
	} else {
		allChildren = Children.map(children, (child, i) => cloneElement(child, { index: i }));
	}

	return (
		<ProgressRopeContext.Provider value={{ ...state, handleClick }}>
			<ol
				css={{
					position: 'relative',
					listStyle: 'none',
					paddingLeft: 0,
					margin: 0,
					...overrides.ropeCSS,
				}}
				{...props}
			>
				{allChildren}
			</ol>
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
	 * ProgressRope overrides
	 */
	overrides: PropTypes.shape({
		ropeCSS: PropTypes.object,
	}),
};

ProgressRope.defaultProps = {
	current: 0,
};
