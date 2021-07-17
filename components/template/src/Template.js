/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { defaultTemplate } from './overrides/template';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const TemplateContext = createContext();

export const useTemplateContext = () => {
	const context = useContext(TemplateContext);

	if (!context) {
		throw new Error('Template sub-components should be wrapped in a <Template>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const Template = ({ children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Template: defaultTemplate,
	};

	const state = {
		overrides: componentOverrides,
		...rest,
	};

	const {
		Template: { component: Template, styles: templateStyles, attributes: templateAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<TemplateContext.Provider value={{}}>
			<Template {...rest} state={state} {...templateAttributes(state)} css={templateStyles(state)}>
				{children}
			</Template>
		</TemplateContext.Provider>
	);
};

// ==============================
// Types
// ==============================

Template.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

Template.defaultProps = {};
