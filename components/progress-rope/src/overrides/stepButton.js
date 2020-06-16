/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';

const StepButton = ({ state: { visited, active }, children, ...rest }) => {
	let stateText = ', not started';
	if (active) {
		stateText = ', in progress';
	} else if (visited) {
		stateText = ', complete';
	}

	return (
		<button type="button" disabled={!visited} {...rest}>
			{children}
			<VisuallyHidden>{stateText}</VisuallyHidden>
		</button>
	);
};

const stepButtonStyles = (_, { end, grouped, visited, active, furthest }) => {
	const { COLORS, PACKS, TYPE } = useBrand();

	return {
		label: getLabel('progressRope-stepBtn', { end, grouped, visited, active }),
		position: 'relative',
		fontSize: '0.875rem',
		lineHeight: 1.428571429, //`<body>` line-height
		textAlign: 'left',
		padding: `0.5rem 1.875rem 0.875rem ${grouped && !end ? '4.25rem' : '3.5rem'}`,
		border: 0,
		background: 'none',
		display: 'block',
		width: '100%',
		color: active ? COLORS.primary : visited ? COLORS.neutral : COLORS.tints.muted90,
		...(active ? TYPE.bodyFont[700] : null),
		appearance: 'none',
		cursor: 'pointer',
		touchAction: 'manipulation',
		userSelect: 'none',
		boxSizing: 'border-box',

		':disabled': {
			color: COLORS.tints.muted90,
			cursor: 'default',
		},
		/* ':disabled:active, :disabled:hover': {
			cursor: 'not-allowed',
		}, */

		':focus': {
			outlineOffset: `-${PACKS.focus.outlineWidth}`, // reposition inside
		},

		// circle
		':after': {
			content: '""',
			zIndex: 2,
			display: 'block',
			borderRadius: '50%',
			position: 'absolute',
			top: grouped && !end ? '0.875rem' : '0.625rem',
			width: grouped && !end ? '0.625rem' : '0.875rem',
			height: grouped && !end ? '0.625rem' : '0.875rem',
			left: grouped && !end ? '2rem' : '1.875rem',
			border: `solid ${visited ? COLORS.primary : COLORS.borderDark}`,
			borderWidth:
				visited && !furthest
					? grouped && !end
						? '0.3125rem'
						: '0.4375rem'
					: visited
					? '3px'
					: '2px', //a11y: filling with border for HCM support
			backgroundColor: '#fff',
			boxSizing: 'border-box',
		},
	};
};

const stepButtonAttributes = (_, { active }) => ({ 'aria-current': active ? 'step' : undefined });

export const defaultStepButton = {
	component: StepButton,
	styles: stepButtonStyles,
	attributes: stepButtonAttributes,
};
