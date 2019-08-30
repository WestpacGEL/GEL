/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

import { FormPodActionsPrimary, FormPodActionsSecondary } from './styled';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormPodActions = ({ primary, secondary, reverse, ...props }) => {
	const { breakpoints, formPod } = useTheme();
	const mq = paint(breakpoints);

	const common = {
		display: [null, 'flex'],
		flexDirection: !reverse && [null, 'row-reverse'],
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
			{reverse ? slots.reverse() : slots}
		</div>
	);
};

// ==============================
// Types
// ==============================

FormPodActions.propTypes = {
	/**
	 * Primary 'slot'
	 */
	primary: PropTypes.node,

	/**
	 * Secondary 'slot'
	 */
	secondary: PropTypes.node,

	/**
	 * Reverse layout mode.
	 *
	 * Will swap primary and secondary order in the DOM (refer to XS)
	 */
	reverse: PropTypes.bool,
};

FormPodActions.defaultProps = {
	reverse: false,
};
