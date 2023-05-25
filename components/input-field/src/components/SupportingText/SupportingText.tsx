import PropTypes from 'prop-types';
import { useBrand } from '@westpac/core';
import { SupportingTextProps } from './SupportingText.types';

export const SupportingText = ({ id, children, ...props }: SupportingTextProps) => {
	const { COLORS, TYPE } = useBrand();
	return (
		<p
			id={id}
			css={{
				color: COLORS.muted,
				fontSize: '0.75rem',
				margin: '0.375rem 0 0',
				...TYPE.bodyFont[400],
			}}
			{...props}
		>
			{children}
		</p>
	);
};

SupportingText.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Id for supporting text (used for aria-describedy)
	 */
	id: PropTypes.string,
};
