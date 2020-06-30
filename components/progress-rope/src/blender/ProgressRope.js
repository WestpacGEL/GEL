/** @jsx jsx */

import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';

import { blenderProgressRope } from '../overrides/progressRope';
import { blenderList } from '../overrides/list';

// ==============================
// Component
// ==============================
export const ProgressRope = ({ assistiveText, children, ...rest }) => {
	const {
		component: ProgressRope,
		styles: progressRopeStyles,
		attributes: progressRopeAttributes,
	} = blenderProgressRope;
	const { component: List, styles: listStyles, attributes: listAttributes } = blenderList;

	const state = {
		assistiveText,
	};

	return (
		<ProgressRope
			{...rest}
			state={state}
			{...progressRopeAttributes(null, state)}
			css={progressRopeStyles()}
		>
			<List state={state} {...listAttributes(state)} css={listStyles(state)}>
				{children}
			</List>
		</ProgressRope>
	);
};

// ==============================
// Types
// ==============================

ProgressRope.propTypes = {
	/**
	 * Text to use as the `aria-label` for the progress rope
	 */
	assistiveText: PropTypes.string.isRequired,

	/**
	 * Panel body content
	 */
	children: PropTypes.node,
};

ProgressRope.defaultProps = {
	assistiveText: 'In this form',
};
