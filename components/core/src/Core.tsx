import React from 'react';
import PropTypes from 'prop-types';
import { jsx, Global, SerializedStyles } from '@emotion/react';
import { Fragment } from 'react';
import { useBrand } from './Brand';
import { normalize as normalizeCSS } from './normalize';

export interface ICoreProps {
	normalize?: SerializedStyles | boolean;
	children: React.ReactNode;
}

export const Core = ({ normalize, children }: ICoreProps) => {
	const { COLORS, TYPE, PACKS, isMouseMode }: any = useBrand();

	return (
		<Fragment>
			<Global styles={normalize && normalizeCSS} />
			<div
				css={{
					label: 'core',
					lineHeight: 1.428571429,
					color: COLORS.text,
					fontFeatureSettings: '"liga" 1', // Enable OpenType ligatures in IE
					...TYPE.bodyFont[400],

					'*:focus': {
						...PACKS.focus,
						...(isMouseMode && {
							outline: 'none !important',
						}),
					},
					// Also apply to the following selectors to increase specificity (against normalize reset)
					'button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring':
						{
							...PACKS.focus,
							...(isMouseMode && {
								outline: 'none !important',
							}),
						},
					'[tabindex="-1"]:focus': {
						outline: '0 !important',
					},
					'& ::selection': {
						backgroundColor: COLORS.tints.primary20,
					},
				}}
			>
				{children}
			</div>
		</Fragment>
	);
};

Core.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
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
