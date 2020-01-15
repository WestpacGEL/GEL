/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Body, bodyStyles } from './overrides/body';
import { useModalContext } from './Modal';
import pkg from '../package.json';

export const ModalBody = ({ overrides: componentOverrides, ...rest }) => {
	const { bodyId } = useModalContext();
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Body: {
			styles: bodyStyles,
			component: Body,
			attributes: (_, a) => a,
		},
	};

	const state = {
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
		<overrides.Body.component
			id={bodyId}
			{...overrides.Body.attributes(state)}
			css={overrides.Body.styles(state)}
		/>
	);
};

// ==============================
// Types
// ==============================
ModalBody.propTypes = {
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Body: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
