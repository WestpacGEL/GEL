import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { InputAddOn, AddOnType } from '../AddOns';
import { useInputFieldContext, Composition } from '../InputField';
import { InputBeforeAfterProps } from './InputBeforeAfter.types';

export const InputBefore = ({ inset, icon, ...props }: InputBeforeAfterProps) => {
	const { setComposition } = useInputFieldContext();

	useEffect(() => {
		setComposition((state: Composition) => ({
			...state,
			before: inset || icon ? AddOnType.Inset : AddOnType.Default,
		}));
	}, [inset, icon, setComposition]);

	return <InputAddOn position="before" inset={inset} icon={icon} {...props} />;
};

InputBefore.displayName = 'InputBefore';

export const InputAfter = ({ inset, icon, ...props }: InputBeforeAfterProps) => {
	const { setComposition } = useInputFieldContext();

	useEffect(() => {
		setComposition((state: Composition) => ({
			...state,
			after: inset || icon ? AddOnType.Inset : AddOnType.Default,
		}));
	}, [inset, icon, setComposition]);

	return <InputAddOn position="after" inset={inset} icon={icon} {...props} />;
};

InputAfter.displayName = 'InputAfter';

InputBefore.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Renders an icon and automatically insets within input borders
	 */
	icon: PropTypes.func,
	/**
	 * Moves component within the input component borders
	 *
	 * Used with icon only components
	 */
	inset: PropTypes.bool,
};

InputAfter.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Renders an icon and automatically insets within input borders
	 */
	icon: PropTypes.func,
	/**
	 * Moves component within the input component borders
	 *
	 * Used with icon only components
	 */
	inset: PropTypes.bool,
};
