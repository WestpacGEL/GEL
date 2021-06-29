/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Header } from '@westpac/header';
import { Footer } from '@westpac/footer';
import PropTypes from 'prop-types';

import { defaultTemplate } from './overrides/template';
import { defaultMain } from './overrides/main';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

// need to take header, footer children and props
// Look into using grid for this?

export const Template = ({ children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Template: defaultTemplate,
		Main: defaultMain,
	};

	const state = {
		overrides: componentOverrides,
		...rest,
	};

	const {
		Template: { component: Template, styles: templateStyles, attributes: templateAttributes },
		Main: { component: Main, styles: mainStyles, attributes: mainAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Template {...rest} state={state} {...templateAttributes(state)} css={templateStyles(state)}>
			<Header overrides={componentOverrides} />
			<Main {...rest} state={state} {...mainAttributes(state)} css={mainStyles(state)}>
				{children}
			</Main>
			<Footer overrides={componentOverrides}></Footer>
		</Template>
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
