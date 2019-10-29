/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import PropTypes from 'prop-types';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

/**
 * Body: Body component in charge of body text
 */
export const Body = ({ children, ...props }) => {
	const { COLORS, [pkg.name]: brandOverwrites } = useBrand();

	const overwrites = {
		css: {},
	};
	merge(overwrites, brandOverwrites);

	return (
		<div
			css={{
				'h1, h2, h3, h4, h5, h6': {
					color: COLORS.heading,
				},

				p: {
					margin: '0.75rem 0',
				},

				dt: {
					fontWeight: 700,
				},
				dd: {
					margin: 0,
				},

				'abbr[title]': {
					cursor: 'help',
					borderBottom: `1px dotted ${COLORS.text}`,
					textDecoration: 'none',
				},

				address: {
					fontStyle: 'normal',
				},

				blockquote: {
					fontSize: '1rem',
					fontWeight: 300,
				},

				mark: {
					backgroundColor: COLORS.tints.primary20,
				},

				a: {
					color: COLORS.primary,
					textDecoration: 'underline',

					':hover': {
						textDecoration: 'underline',
					},
				},
				...overwrites.css,
			}}
			{...props}
		>
			{children}
		</div>
	);
};

// ==============================
// Types
// ==============================

Body.propTypes = {
	children: PropTypes.node.isRequired,
};

Body.defaultProps = {};
