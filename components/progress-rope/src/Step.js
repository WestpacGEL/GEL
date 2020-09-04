/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultStepButton } from './overrides/stepButton';
import { defaultStep } from './overrides/step';

import { useProgressRopeContext } from './ProgressRope';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Step = ({ index, groupIndex, end, onClick, children, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useProgressRopeContext();
	const { currStep, currGroup, grouped, ropeGraph } = context;

	const defaultOverrides = {
		Step: defaultStep,
		StepButton: defaultStepButton,
	};

	const componentOverrides = overrides || context.state.overrides;

	const visited =
		(grouped && !end && ropeGraph[groupIndex][index] === 'visited') ||
		((!grouped || end) && ropeGraph[index][0] === 'visited');

	const active =
		(!grouped && index === currStep) ||
		(index === currStep && groupIndex === currGroup) ||
		(end && index === currGroup);

	let furthest = false;

	if (visited) {
		if (grouped && !end) {
			if (ropeGraph[groupIndex][index + 1] && ropeGraph[groupIndex][index + 1] === 'unvisited') {
				furthest = true;
			} else if (
				!ropeGraph[groupIndex][index + 1] &&
				ropeGraph[groupIndex + 1] &&
				ropeGraph[groupIndex + 1][0] === 'unvisited'
			) {
				furthest = true;
			}
		} else if (ropeGraph[index + 1] && ropeGraph[index + 1][0] === 'unvisited') {
			furthest = true;
		} else if (end) {
			if (currStep === index) {
				furthest = true;
			} else if (grouped && currGroup === index && currStep === 0) {
				furthest = true;
			}
		}
	}

	const state = {
		grouped,
		visited,
		active,
		furthest,
		index,
		groupIndex,
		end,
		onClick,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Step: { component: Step, styles: stepStyles, attributes: stepAttributes },
		StepButton: {
			component: StepButton,
			styles: stepButtonStyles,
			attributes: stepButtonAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Step {...rest} state={state} {...stepAttributes(state)} css={stepStyles(state)}>
			<StepButton
				onClick={onClick}
				state={state}
				{...stepButtonAttributes(state)}
				css={stepButtonStyles(state)}
			>
				{children}
			</StepButton>
		</Step>
	);
};

// ==============================
// Types
// ==============================

Step.propTypes = {
	/**
	 * The index of this step
	 */
	index: PropTypes.number,

	/**
	 * The index of this step's group
	 */
	groupIndex: PropTypes.number,

	/**
	 * Whether or not a end step
	 */
	end: PropTypes.bool,

	/**
	 * Handler to be called on click
	 */
	onClick: PropTypes.func.isRequired,

	/**
	 * Children
	 */
	children: PropTypes.node.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
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

Step.defaultProps = {
	end: false,
};
