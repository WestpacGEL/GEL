import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultPanel } from './overrides/panel';
import pkg from '../package.json';
import React, { ReactNode } from 'react';

export interface FormPodPanelProps {
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * Enable top border.
	 *
	 * Enable when the 'Error summary' alert is shown.
	 */
	borderTop?: boolean;
	/**
	 * The override API
	 */
	overrides?: {
		Panel?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const FormPodPanel = ({
	borderTop,
	children,
	overrides: componentOverrides,
	...rest
}: FormPodPanelProps) => {
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

FormPodPanel.defaultProps = {
	borderTop: true,
};

FormPodPanel.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Enable top border.
	 *
	 * Enable when the 'Error summary' alert is shown.
	 */
	borderTop: PropTypes.bool,
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Panel: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
