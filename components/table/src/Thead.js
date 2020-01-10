/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useTableContext } from './Table';

import { Tablehead, theadStyles } from './overrides/thead';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Thead = ({ bordered, overrides: componentOverrides, ...props }) => {
	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Thead: {
				styles: theadStyles,
				component: Tablehead,
				attributes: state => state,
			},
		},
	};

	const state = {
		bordered,
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
		<overrides.subComponent.Thead.component
			css={overrides.subComponent.Thead.styles}
			{...overrides.subComponent.Thead.attributes(state)}
		/>
	);
};

// ==============================
// Types
// ==============================
Thead.propTypes = {
	/**
	 * Whether or not there should border styling
	 */
	bordered: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		subComponent: PropTypes.shape({
			Thead: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};
