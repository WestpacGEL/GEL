/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { TableHeader, thStyles } from './overrides/th';
import { useTableContext } from './Table';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Th = ({ bordered, overrides: componentOverrides, ...props }) => {
	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Th: {
				styles: thStyles,
				component: TableHeader,
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
		<overrides.subComponent.Th.component
			css={overrides.subComponent.Th.styles}
			{...overrides.subComponent.Th.attributes(state)}
		/>
	);
};

// ==============================
// Types
// ==============================
Th.propTypes = {
	/**
	 * Whether or not there should border styling
	 */
	bordered: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		subComponent: PropTypes.shape({
			Th: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};
