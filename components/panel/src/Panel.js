/** @jsx jsx */

import { jsx, useBrand, devWarning, overrideReconciler } from '@westpac/core';
import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { Panel as PanelWrapper, panelStyles } from './overrides/panel';
import pkg from '../package.json';

// ==============================
// Context and consumer hook
// ==============================

const PanelContext = createContext();

export const usePanelContext = () => {
	const context = useContext(PanelContext);

	devWarning(!context, 'Panel children should be wrapped in a <Panel>.');
	return context;
};

// ==============================
// Component
// ==============================

export const Panel = ({ look, className, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Panel: {
			styles: panelStyles,
			component: PanelWrapper,
			attributes: (_, a) => a,
		},
	};

	const state = {
		look,
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
		<PanelContext.Provider value={{ look, overrides: componentOverrides }}>
			<overrides.Panel.component
				className={className}
				{...overrides.Panel.attributes(state)}
				css={overrides.Panel.styles(state)}
			/>
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
		Body: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Footer: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Panel.defaultProps = {
	look: 'hero',
};
