import { ReactNode } from 'react';
import { IconProps } from '@westpac/icon';

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
	icon?: (props: Omit<IconProps, 'icon'>) => JSX.Element;
	/**
	 * Component/text to add before/after input
	 */
	children?: ReactNode;
};
