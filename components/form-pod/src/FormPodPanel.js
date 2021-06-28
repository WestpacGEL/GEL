/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultPanel } from './overrides/panel';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const FormPodPanel = ({ borderTop, children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Panel: defaultPanel,
	};

	const state = {
		borderTop,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Panel: { component: Panel, styles: panelStyles, attributes: panelAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Panel {...rest} state={state} {...panelAttributes(state)} css={panelStyles(state)}>
			{children}
		</Panel>
	);
};

// ==============================
// Types
// ==============================

FormPodPanel.propTypes = {
	/**
	 * Enable top border.
	 *
	 * Enable when the 'Error summary' alert is shown.
	 */
	borderTop: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Panel: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

FormPodPanel.defaultProps = {
	borderTop: true,
};
