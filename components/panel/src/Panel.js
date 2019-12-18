/** @jsx jsx */

import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { Wrapper, wrapperStyles } from './overrides/wrapper';
import pkg from '../package.json';

// ==============================
// Context and consumer hook
// ==============================

const PanelContext = createContext();

export const usePanelContext = () => {
	const context = useContext(PanelContext);

	if (!context) {
		throw new Error('Panel children should be wrapped in a <Panel>.');
	}
	return context;
};

// ==============================
// Component
// ==============================

export const Panel = ({ look, children, overrides: componentOverrides, ...props }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,
	};

	const state = {
		look,
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
		<PanelContext.Provider value={{ look }}>
			<overrides.component css={overrides.styles} {...overrides.attributes(state)}>
				{children}
			</overrides.component>
		</PanelContext.Provider>
	);
};

// ==============================
// Types
// ==============================

Panel.propTypes = {
	/**
	 * Panel look
	 */
	look: PropTypes.oneOf(['hero', 'faint']).isRequired,

	/**
	 * Panel content
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		styles: PropTypes.func,
		component: PropTypes.elementType,
		attributes: PropTypes.object,
		subComponent: PropTypes.shape({
			PanelHeader: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			PanelBody: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			PanelFooter: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Panel.defaultProps = {
	look: 'hero',
};
