/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Body, bodyStyles } from './overrides/body';
import { useModalContext } from './Modal';
import pkg from '../package.json';

export const ModalBody = ({ overrides: componentOverrides, ...props }) => {
	const { bodyId } = useModalContext();
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Body: {
				styles: bodyStyles,
				component: Body,
				attributes: state => state,
			},
		},
	};

	const state = {
		overrides: componentOverrides,
		...props,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

	return (
		<overrides.subComponent.Body.component
			id={bodyId}
			css={overrides.subComponent.Body.styles}
			{...overrides.subComponent.Body.attributes(state)}
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
		subComponent: PropTypes.shape({
			Body: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};
