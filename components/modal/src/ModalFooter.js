/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand, merge } from '@westpac/core';
import pkg from '../package.json';

export const ModalFooter = ({ overrides: overridesComponent, ...props }) => {
	const { COLORS } = useBrand();
	const { [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		footerCSS: {},
	};

	merge(overrides, overridesWithTokens, overridesComponent);

	return (
		<div
			css={{
				backgroundColor: COLORS.background,
				borderTop: `1px solid ${COLORS.border}`,
				textAlign: 'right',
				padding: '0.75rem 1.125rem',

				'button + button': {
					marginLeft: '0.375rem',
				},
				...overrides.footerCSS,
			}}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================
ModalFooter.propTypes = {
	/**
	 * ModalFooter overrides
	 */
	overrides: PropTypes.shape({
		footerCSS: PropTypes.object,
	}),
};
