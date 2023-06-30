import { FormHTMLAttributes, ReactNode, ElementType } from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { createContext, useContext } from 'react';

import { defaultForm } from './overrides/form';
import pkg from '../package.json';

// ==============================
// Context and consumer hook
// ==============================

const FormContext = createContext<any>(null);

export const useFormContext = () => useContext(FormContext);

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	/**
	 * Size of children components.
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	size?: unknown[] | string;
	/**
	 * Vertical spacing of children components.
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	spacing?: unknown[] | string;
	/**
	 * Inline children mode (SM+).
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	inline?: boolean;
	/**
	 * Component tag
	 */
	tag?: ((...args: unknown[]) => unknown) | string;
	/**
	 * Children
	 */
	children: ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Form?: {
			styles?: (...args: unknown[]) => unknown;
			component?: ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Form = ({
	size = 'medium',
	spacing = 'medium',
	inline = false,
	tag = 'form',
	overrides: componentOverrides,
	...rest
}: FormProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Form: defaultForm,
	};

	const state = {
		size,
		spacing,
		inline,
		tag,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Form: { component: Form, styles: formStyles, attributes: formAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<FormContext.Provider value={{ state }}>
			<Form {...rest} state={state} {...formAttributes(state)} css={formStyles(state)} />
		</FormContext.Provider>
	);
};

// ==============================
// Types
// ==============================

Form.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Inline children mode (SM+).
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	inline: PropTypes.bool,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Form: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.oneOfType([
				PropTypes.oneOf([
					'a',
					'abbr',
					'address',
					'animate',
					'animateMotion',
					'animateTransform',
					'area',
					'article',
					'aside',
					'audio',
					'b',
					'base',
					'bdi',
					'bdo',
					'big',
					'blockquote',
					'body',
					'br',
					'button',
					'canvas',
					'caption',
					'center',
					'circle',
					'cite',
					'clipPath',
					'code',
					'col',
					'colgroup',
					'data',
					'datalist',
					'dd',
					'defs',
					'del',
					'desc',
					'details',
					'dfn',
					'dialog',
					'div',
					'dl',
					'dt',
					'ellipse',
					'em',
					'embed',
					'feBlend',
					'feColorMatrix',
					'feComponentTransfer',
					'feComposite',
					'feConvolveMatrix',
					'feDiffuseLighting',
					'feDisplacementMap',
					'feDistantLight',
					'feDropShadow',
					'feFlood',
					'feFuncA',
					'feFuncB',
					'feFuncG',
					'feFuncR',
					'feGaussianBlur',
					'feImage',
					'feMerge',
					'feMergeNode',
					'feMorphology',
					'feOffset',
					'fePointLight',
					'feSpecularLighting',
					'feSpotLight',
					'feTile',
					'feTurbulence',
					'fieldset',
					'figcaption',
					'figure',
					'filter',
					'footer',
					'foreignObject',
					'form',
					'g',
					'h1',
					'h2',
					'h3',
					'h4',
					'h5',
					'h6',
					'head',
					'header',
					'hgroup',
					'hr',
					'html',
					'i',
					'iframe',
					'image',
					'img',
					'input',
					'ins',
					'kbd',
					'keygen',
					'label',
					'legend',
					'li',
					'line',
					'linearGradient',
					'link',
					'main',
					'map',
					'mark',
					'marker',
					'mask',
					'menu',
					'menuitem',
					'meta',
					'metadata',
					'meter',
					'mpath',
					'nav',
					'noindex',
					'noscript',
					'object',
					'ol',
					'optgroup',
					'option',
					'output',
					'p',
					'param',
					'path',
					'pattern',
					'picture',
					'polygon',
					'polyline',
					'pre',
					'progress',
					'q',
					'radialGradient',
					'rect',
					'rp',
					'rt',
					'ruby',
					's',
					'samp',
					'script',
					'section',
					'select',
					'slot',
					'small',
					'source',
					'span',
					'stop',
					'strong',
					'style',
					'sub',
					'summary',
					'sup',
					'svg',
					'switch',
					'symbol',
					'table',
					'tbody',
					'td',
					'template',
					'text',
					'textarea',
					'textPath',
					'tfoot',
					'th',
					'thead',
					'time',
					'title',
					'tr',
					'track',
					'tspan',
					'u',
					'ul',
					'use',
					'var',
					'video',
					'view',
					'wbr',
					'webview',
				]),
				PropTypes.func,
				PropTypes.shape({
					childContextTypes: PropTypes.object,
					contextType: PropTypes.object,
					contextTypes: PropTypes.object,
					defaultProps: PropTypes.object,
					displayName: PropTypes.string,
					getDerivedStateFromError: PropTypes.func,
					getDerivedStateFromProps: PropTypes.func,
					propTypes: PropTypes.object,
				}),
			]),
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Size of children components.
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	size: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
	/**
	 * Vertical spacing of children components.
	 *
	 * This prop is available to children components via `FormContext`.
	 */
	spacing: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
