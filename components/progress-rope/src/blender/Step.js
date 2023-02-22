import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';

import { blenderStep } from '../overrides/step';
import { blenderStepButton } from '../overrides/stepButton';

// ==============================
// Component
// ==============================
export const Step = ({ index, active, visited, end, children, ...rest }) => {
	const { component: Step, styles: stepStyles, attributes: stepAttributes } = blenderStep;
	const {
		component: StepButton,
		styles: stepButtonStyles,
		attributes: stepButtonAttributes,
	} = blenderStepButton;

	const state = {
		active,
		visited,
		end,
	};

	return (
		<Step {...rest} state={state} {...stepAttributes(null, state)} css={stepStyles(null, state)}>
			<StepButton
				state={state}
				{...stepButtonAttributes(null, state)}
				css={stepButtonStyles(null, state)}
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
	 * Is an active group
	 */
	active: PropTypes.bool.isRequired,

	/**
	 * If group is visited
	 */
	visited: PropTypes.bool.isRequired,

	/**
	 * If an end step
	 */
	end: PropTypes.bool.isRequired,

	/**
	 * Panel body content
	 */
	children: PropTypes.node,
};

export const defaultProps = {
	active: false,
	visited: false,
	end: false,
};

Step.defaultProps = defaultProps;
