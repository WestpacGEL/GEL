import { ReactNode } from 'react';

export type InputBeforeAfterProps = {
	/**
	 * Moves component within the input component borders
	 *
	 * Used with icon only components
	 */
	inset?: boolean;
	/**
	 * Renders an icon and automatically insets within input borders
	 */
	icon?: (...args: unknown[]) => any;
	/**
	 * Component/text to add before/after input
	 */
	children?: ReactNode;
};
