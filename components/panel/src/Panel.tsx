import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import React, { createContext, ReactNode, useContext } from 'react';

import { defaultPanel } from './overrides/panel';
import { defaultHeader } from './overrides/header';
import { defaultHeading } from './overrides/heading';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const PanelContext = createContext<any>(null);

export const usePanelContext = () => {
	const context = useContext(PanelContext);

	if (!context) {
		throw new Error('<Body/> and <Footer/> components should be wrapped in a <Panel>.');
	}

	return context;
};

export interface PanelProps {
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * Panel look
	 */
	look: 'hero' | 'faint';
	/**
	 * Panel heading text
	 */
	heading: string;
	/**
	 * Panel heading tag
	 */
	headingTag: ((...args: unknown[]) => unknown) | string;
	/**
	 * The override API
	 */
	overrides?: {
		Panel?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Header?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Heading?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Panel = ({
	heading,
	look = 'hero',
	headingTag = 'h1',
	children,
	overrides: componentOverrides,
	...rest
}: PanelProps) => {
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

Panel.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Panel heading text
	 */
	heading: PropTypes.string.isRequired,
	/**
	 * Panel heading tag
	 */
	headingTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
	/**
	 * Panel look
	 */
	look: PropTypes.oneOf(['faint', 'hero']).isRequired,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Header: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Heading: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Panel: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};

Panel.defaultProps = { headingTag: 'h1', look: 'hero' };
