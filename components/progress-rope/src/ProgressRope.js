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

import { defaultProgressRope } from './overrides/progressRope';
import { defaultList } from './overrides/list';

import { Group } from './Group';
import { Step } from './Step';
import pkg from '../package.json';

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

const createRopeGraph = (current, data, children) => {
	const ropeGraph = [];
	let grouped = false;
	let completed = current;

	if (data) {
		// generate graph from data
		data.forEach((progress, i) => {
			if (progress.type && progress.type === 'group') {
				grouped = true;
				const stepCount = progress.steps.length;

				if (completed >= stepCount) {
					ropeGraph.push(Array(stepCount).fill('visited'));
					completed -= stepCount;
				} else {
					const steps = Array(stepCount).fill('unvisited');
					steps.forEach((step, i) => {
						if (completed > i) {
							steps[i] = 'visited';
							completed--;
						}
					});
					ropeGraph.push(steps);
				}
			} else {
				if (current <= i) {
					ropeGraph.push(['unvisited']);
				} else {
					ropeGraph.push(['visited']);
				}
			}
		});
	} else {
		Children.forEach(children, (child, i) => {
			if (child.type === Group) {
				grouped = true;
				const stepCount = Children.count(child.props.children);

				if (completed >= stepCount) {
					ropeGraph.push(Array(stepCount).fill('visited'));
					completed -= stepCount;
				} else {
					const steps = Array(stepCount).fill('unvisited');
					steps.forEach((step, i) => {
						if (completed > i) {
							steps[i] = 'visited';
							completed--;
						}
					});
					ropeGraph.push(steps);
				}
			} else {
				if (current <= i) {
					ropeGraph.push(['unvisited']);
				} else {
					ropeGraph.push(['visited']);
				}
			}
		});
	}

	return { ropeGraph, grouped };
};

// ==============================
// Component
// ==============================

export const ProgressRope = ({
	instanceId,
	current,
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

	const [id] = useState(instanceId || `gel-progress-rope-${useInstanceId()}`);

	const defaultOverrides = {
		ProgressRope: defaultProgressRope,
		List: defaultList,
	};

	const state = {
		id,
		current,
		headingsTag,
		assistiveText,
		data,
		overrides: componentOverrides,
		...rest,
	};

	const {
		ProgressRope: {
			component: ProgressRope,
			styles: progressRopeStyles,
			attributes: progressRopeAttributes,
		},
		List: { component: List, styles: listStyles, attributes: listAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const initialState = {
		currStep: current,
		currGroup: 0,
		openGroup: 0,
		...createRopeGraph(current, data, children),
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
		let stepCount = 0;
		const updatedGraph = progState.ropeGraph.map((group) => [...group]); // deep copy

		if (progState.grouped) {
			progState.ropeGraph.forEach((group, i) => {
				if (current >= stepCount) {
					stepCount += group.length;
					if (current < stepCount) {
						// current index is in here
						const pos = group.length - (stepCount - current);
						updatedGraph[i][pos] = 'visited';
						dispatch({ type: 'UPDATE_GRAPH', payload: updatedGraph });
						dispatch({ type: 'UPDATE_STEP', payload: pos });
						dispatch({ type: 'UPDATE_GROUP', payload: i });
						dispatch({ type: 'UPDATE_OPEN_GROUP', payload: i });
					}
				}
			});

			if (current >= stepCount) {
				dispatch({ type: 'UPDATE_STEP', payload: current });
			}
		} else {
			if (current < updatedGraph.length && current >= 0) updatedGraph[current][0] = 'visited';
			dispatch({ type: 'UPDATE_STEP', payload: current });
			dispatch({ type: 'UPDATE_GRAPH', payload: updatedGraph });
		}
	}, [current]);

	const handleClick = (index) => {
		dispatch({ type: 'UPDATE_OPEN_GROUP', payload: index !== progState.openGroup ? index : null });
	};

	let allChildren = [];
	if (data) {
		data.forEach(({ type, text, onClick, steps }, idx) => {
			if (type && type === 'group') {
				allChildren.push(
					<Group key={idx} index={idx} text={text} overrides={componentOverrides}>
						{steps.map((step, stepIndex) => (
							<Step
								key={stepIndex}
								index={stepIndex}
								onClick={step.onClick}
								overrides={componentOverrides}
							>
								{step.text}
							</Step>
						))}
					</Group>
				);
			} else {
				allChildren.push(
					<Step
						key={idx}
						index={idx}
						end={type && type === 'end'}
						onClick={onClick}
						overrides={componentOverrides}
					>
						{text}
					</Step>
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
		<ProgressRopeContext.Provider value={{ ...progState, state, handleClick }}>
			<ProgressRope
				{...rest}
				state={state}
				{...progressRopeAttributes(state)}
				css={progressRopeStyles(state)}
			>
				<List state={state} {...listAttributes(state)} css={listStyles(state)}>
					{allChildren}
				</List>
			</ProgressRope>
		</ProgressRopeContext.Provider>
	);
};

// ==============================
// Types
// ==============================

ProgressRope.propTypes = {
	/**
	 * Define an id for the group step elements e.g. for an instanceId of "progress-rope" --> "progress-rope-group-1" etc.
	 */
	instanceId: PropTypes.string,

	/**
	 * Current active step (zero-indexed)
	 */
	current: PropTypes.number.isRequired,

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
		GroupList: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		List: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Step: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		StepButton: PropTypes.shape({
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
