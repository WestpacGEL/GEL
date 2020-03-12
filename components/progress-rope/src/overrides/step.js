/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Step = ({ state, ...rest }) => <li {...rest} />;

const stepStyles = (_, { end, visited, grouped, furthest }) => {
	const { COLORS } = useBrand();

	return {
		position: 'relative',
		marginTop: end && (grouped ? '0.375rem' : '0.125rem'),
		backgroundColor: '#fff',

		':last-of-type': {
			paddingBottom: grouped && !end && '30px',
		},

		// line
		'::before': {
			content: '""',
			display: visited && !furthest && !end ? 'block' : 'none',
			position: 'absolute',
			zIndex: 1,
			borderLeft: visited && !furthest && `4px solid ${COLORS.primary}`,
			top: 0,
			bottom: 0,
			left: visited && !furthest ? '35px' : '36px',
			transform: grouped && !end ? 'translateY(0.875rem)' : 'translateY(0.625rem)',
		},
	};
};

const stepAttributes = () => null;

export const defaultStep = {
	component: Step,
	styles: stepStyles,
	attributes: stepAttributes,
};
