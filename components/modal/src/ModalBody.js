/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand, merge } from '@westpac/core';
import { useModalContext } from './Modal';
import pkg from '../package.json';

export const ModalBody = ({ overrides: overridesComponent, ...props }) => {
	const { bodyId } = useModalContext();
	const { [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		bodyCSS: {},
	};

	merge(overrides, overridesWithTokens, overridesComponent);

	return <div id={bodyId} css={{ padding: '1.125rem 1.5rem', ...overrides.bodyCSS }} {...props} />;
};

// ==============================
// Types
// ==============================
ModalBody.propTypes = {
	/**
	 * ModalBody overrides
	 */
	overrides: PropTypes.shape({
		bodyCSS: PropTypes.object,
	}),
};
