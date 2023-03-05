import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultStepButton } from './overrides/stepButton';
import { defaultStep } from './overrides/step';

import { useProgressRopeContext } from './ProgressRope';
import pkg from '../package.json';

export interface StepProps {
	/**
	 * The index of this step
	 */
	index?: number;
	/**
	 * The index of this step's group
	 */
	groupIndex?: number;
	/**
	 * Whether or not a end step
	 */
	end?: boolean;
	/**
	 * Handler to be called on click
	 */
	onClick(...args: unknown[]): unknown;
	/**
	 * Children
	 */
	children: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Step?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		StepButton?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Step = ({
	index = 0,
	groupIndex = 0,
	end = false,
	onClick,
	children,
	overrides,
	...rest
}: StepProps) => {
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
		(grouped && !end && ropeGraph[groupIndex]?.[index] === 'visited') ||
		((!grouped || end) && ropeGraph[index][0] === 'visited');

	const active =
		(!grouped && index === currStep) ||
		(index === currStep && groupIndex === currGroup) ||
		(end && index === currGroup);

	let furthest = false;

	if (visited) {
		if (grouped && !end) {
			if (ropeGraph[groupIndex]?.[index + 1] && ropeGraph[groupIndex][index + 1] === 'unvisited') {
				furthest = true;
			} else if (
				!ropeGraph[groupIndex]?.[index + 1] &&
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

Step.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Whether or not a end step
	 */
	end: PropTypes.bool,
	/**
	 * The index of this step's group
	 */
	groupIndex: PropTypes.number,
	/**
	 * The index of this step
	 */
	index: PropTypes.number,
	/**
	 * Handler to be called on click
	 */
	onClick: PropTypes.func.isRequired,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Step: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		StepButton: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};

Step.defaultProps = { end: false, groupIndex: 0, index: 0 };
