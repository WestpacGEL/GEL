/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { TableFoot, tfootStyles } from './overrides/tfoot';
import { useTableContext } from './Table';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Tfoot = ({ bordered, children, overrides: componentOverrides, ...rest }) => {
	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Tfoot: {
			styles: tfootStyles,
			component: TableFoot,
			attributes: () => null,
		},
	};

	const state = {
		bordered,
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
		<overrides.Tfoot.component
			bordered={bordered}
			{...rest}
			{...overrides.Tfoot.attributes(state)}
			css={overrides.Tfoot.styles(state)}
		>
			{children}
		</overrides.Tfoot.component>
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
		Tfoot: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
