import PropTypes from 'prop-types';
import { jsx, SerializedStyles } from '@emotion/react';

import { BrandContext } from './Brand';
import { useFocus } from './useFocus';
import { Core } from './Core';
import { ReactNode } from 'react';

export interface GELProps {
	normalize?: SerializedStyles | boolean;
	brand?: object | ((...args: unknown[]) => unknown);
	children: ReactNode;
}

export const GEL = ({ brand, normalize = false, children, ...props }: GELProps) => {
	const { isMouseMode } = useFocus();

	return (
		<BrandContext.Provider value={{ ...brand, isMouseMode }} {...props}>
			<Core normalize={normalize}>{children}</Core>
		</BrandContext.Provider>
	);
};

GEL.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	brand: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
	children: PropTypes.node,
	normalize: PropTypes.oneOfType([
		PropTypes.shape({
			map: PropTypes.string,
			name: PropTypes.string.isRequired,
			next: PropTypes.object,
			styles: PropTypes.string.isRequired,
		}),
		PropTypes.bool,
	]),
};
