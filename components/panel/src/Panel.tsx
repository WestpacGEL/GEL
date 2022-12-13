/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { defaultPanel } from './overrides/panel';
import { defaultHeader } from './overrides/header';
import { defaultHeading } from './overrides/heading';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const PanelContext = createContext(null);

export const usePanelContext = () => {
	const context = useContext(PanelContext);

	if (!context) {
		throw new Error('<Body/> and <Footer/> components should be wrapped in a <Panel>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const Panel = ({
	look,
	heading,
	headingTag,
	children,
	overrides: componentOverrides,
	...rest
}: typeof Panel.propTypes & typeof Panel.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Panel: defaultPanel,
		Header: defaultHeader,
		Heading: defaultHeading,
	};

	const state = {
		look,
		heading,
		headingTag,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Panel: { component: Panel, styles: panelStyles, attributes: panelAttributes },
		Header: { component: Header, styles: headerStyles, attributes: headerAttributes },
		Heading: { component: Heading, styles: headingStyles, attributes: headingAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<PanelContext.Provider value={{ state }}>
			<Panel {...rest} state={state} {...panelAttributes(state)} css={panelStyles(state)}>
				<Header state={state} {...headerAttributes(state)} css={headerStyles(state)}>
					<Heading state={state} {...headingAttributes(state)} css={headingStyles(state)}>
						{heading}
					</Heading>
				</Header>
				{children}
			</Panel>
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
	 * Panel heading text
	 */
	heading: PropTypes.string.isRequired,

	/**
	 * Panel heading tag
	 */
	headingTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Panel: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Header: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Heading: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	look: 'hero',
	headingTag: 'h1',
};

Panel.defaultProps = defaultProps;
