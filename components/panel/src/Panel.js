/** @jsx jsx */

import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, merge } from '@westpac/core';
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

export const Panel = ({ look, ...props }) => {
	const { COLORS, [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		panelCSS: {},
	};

	merge(overrides, overridesWithTokens);

	const lookMap = {
		hero: {
			borderColor: COLORS.hero,
		},
		faint: {
			borderColor: COLORS.border,
		},
	};

	return (
		<PanelContext.Provider value={{ look }}>
			<div
				css={{
					marginBottom: '1.3125rem',
					backgroundColor: '#fff',
					border: `1px solid ${lookMap[look].borderColor}`,
					borderRadius: '0.1875rem',
					table: {
						overflow: 'hidden', //clip overflow for rounded corners
						marginBottom: 0,
						borderBottomRightRadius: `calc(0.1875rem - 1px)`,
						borderBottomLeftRadius: `calc(0.1875rem - 1px)`,
					},
					'table caption': {
						padding: ['0.75rem 0.75rem 0 0.75rem', '1.5rem 1.5rem 0 1.5rem'],
					},
					...overrides.panelCSS,
				}}
				{...props}
			/>
		</PanelContext.Provider>
	);
};

// ==============================
// Types
// ==============================

const options = {
	look: ['hero', 'faint'],
};

Panel.propTypes = {
	/**
	 * Panel look
	 */
	look: PropTypes.oneOf(options.look),

	/**
	 * Panel content
	 */
	children: PropTypes.node,
};

Panel.defaultProps = {
	look: 'hero',
};
