/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';
import { FormPodActionsPrimary, FormPodActionsSecondary } from './styled';

// ==============================
// Component
// ==============================

export const FormPodActions = ({ primary, secondary, isReverse, ...props }) => {
	const { breakpoints, formPod } = useTheme();
	const mq = paint(breakpoints);

	const common = {
		display: [null, 'flex'],
		flexDirection: !isReverse && [null, 'row-reverse'],
		...formPod.actions,

		'button + button': {
			marginLeft: ['1.2rem', '0.8rem'], //gap
		},
	};

	const slots = [
		<FormPodActionsPrimary key="primary">{primary}</FormPodActionsPrimary>,
		<FormPodActionsSecondary key="secondary">{secondary}</FormPodActionsSecondary>,
	];

	return (
		<div css={mq(common)} {...props}>
			{isReverse ? slots.reverse() : slots}
		</div>
	);
};

// ==============================
// Types
// ==============================

FormPodActions.propTypes = {
	/**
	 * Primary 'slot'.
	 *
	 * The primary slot is on the right hand side for MD+ breakpoints.
	 */
	primary: PropTypes.node,

	/**
	 * Secondary 'slot'.
	 *
	 * The secondary slot is on the left hand side for MD+ breakpoints.
	 */
	secondary: PropTypes.node,

	/**
	 * Reverse layout mode.
	 *
	 * Will swap primary and secondary slot order in the DOM (refer to XS breakpoint).
	 */
	isReverse: PropTypes.bool,
};

FormPodActions.defaultProps = {
	isReverse: false,
};
