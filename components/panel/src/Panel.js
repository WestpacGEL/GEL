/** @jsx jsx */

import { jsx, useBrand, devWarning, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Panel as PanelWrapper, panelStyles } from './overrides/panel';
import { Header, headerStyles } from './overrides/header';
import { Heading, headingStyles } from './overrides/heading';
import pkg from '../package.json';

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
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Panel: {
			styles: panelStyles,
			component: PanelWrapper,
			attributes: () => null,
		},
		Header: {
			styles: headerStyles,
			component: Header,
			attributes: (_, a) => a,
		},
		Heading: {
			styles: headingStyles,
			component: Heading,
			attributes: (_, a) => a,
		},
	};

	const state = {
		look,
		heading,
		headingTag,
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
		<overrides.Panel.component
			{...overrides.Panel.attributes(state)}
			css={overrides.Panel.styles(state)}
		>
			<overrides.Header.component
				{...overrides.Header.attributes(state)}
				css={overrides.Header.styles(state)}
			>
				<overrides.Heading.component
					{...overrides.Heading.attributes(state)}
					css={overrides.Heading.styles(state)}
				>
					{heading}
				</overrides.Heading.component>
			</overrides.Header.component>
			{children}
		</overrides.Panel.component>
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

Panel.defaultProps = {
	look: 'hero',
	headingTag: 'h1',
};
