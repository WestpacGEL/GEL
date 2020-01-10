/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { TableFoot, tfootStyles } from './overrides/tfoot';
import { useTableContext } from './Table';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Tfoot = ({ bordered, overrides: componentOverrides, ...props }) => {
	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Tfoot: {
				styles: tfootStyles,
				component: TableFoot,
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
		<overrides.subComponent.Tfoot.component
			css={overrides.subComponent.Tfoot.styles}
			{...overrides.subComponent.Tfoot.attributes(state)}
		/>
	);
};

Tfoot.propTypes = {
	/**
	 * Whether or not there should border styling
	 */
	bordered: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		subComponent: PropTypes.shape({
			Tfoot: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};
