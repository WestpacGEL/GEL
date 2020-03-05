/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Step as StepWrapper, stepStyles } from './overrides/step';
import { StepButton, stepButtonStyles } from './overrides/stepButton';
import { useProgressRopeContext } from './ProgressRope';
import pkg from '../package.json';

export const Step = ({
	index,
	current,
	end,
	onClick,
	groupIndex,
	groupListId,
	instanceIdPrefix,
	headingsTag,
	assistiveText,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const { currStep, currGroup, grouped, ropeGraph } = useProgressRopeContext();

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Step: {
			styles: stepStyles,
			component: StepWrapper,
			attributes: () => null,
		},
		StepButton: {
			styles: stepButtonStyles,
			component: StepButton,
			attributes: () => null,
		},
	};

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
		index,
		current,
		end,
		grouped,
		visited,
		active,
		furthest,
		onClick,
		groupListId,
		instanceIdPrefix,
		headingsTag,
		assistiveText,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	return (
		<overrides.Step.component
			index={index}
			current={current}
			end={end}
			grouped={grouped}
			visited={visited}
			active={active}
			furthest={furthest}
			groupIndex={groupIndex}
			instanceIdPrefix={instanceIdPrefix}
			groupListId={groupListId}
			headingsTag={headingsTag}
			assistiveText={assistiveText}
			{...rest}
			{...overrides.Step.attributes(state)}
			css={overrides.Step.styles(state)}
		>
			<overrides.StepButton.component
				aria-current={active ? 'step' : undefined}
				index={index}
				current={current}
				end={end}
				onClick={onClick}
				grouped={grouped}
				visited={visited}
				active={active}
				furthest={furthest}
				groupIndex={groupIndex}
				instanceIdPrefix={instanceIdPrefix}
				groupListId={groupListId}
				headingsTag={headingsTag}
				assistiveText={assistiveText}
				{...overrides.StepButton.attributes(state)}
				css={overrides.StepButton.styles(state)}
			>
				{children}
			</overrides.StepButton.component>
		</overrides.Step.component>
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
	 * The index of this step
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
