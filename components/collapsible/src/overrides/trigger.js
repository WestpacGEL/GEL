import { jsx, useBrand } from '@westpac/core';
import { Button } from '@westpac/button';
import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';
import { forwardRef } from 'react';

// ==============================
// Component
// ==============================

const Trigger = forwardRef(({ state: { isOpen, size }, ...rest }, ref) => {
	const { COLORS } = useBrand();

	return (
		<Button
			ref={ref}
			look="link"
			size={size}
			iconAfter={isOpen ? ExpandLessIcon : ExpandMoreIcon}
			{...rest}
			overrides={{
				Button: {
					styles: (styles) => ({
						...styles,
						color: COLORS.text,
						paddingLeft: 0,
						paddingRight: 0,
						textDecoration: 'none',
					}),
				},
				Icon: {
					styles: (styles) => ({
						...styles,
						color: COLORS.link,
					}),
				},
			}}
		/>
	);
});
Trigger.displayName = 'Trigger';

const BlenderTrigger = forwardRef((props, ref) => {
	return <button ref={ref} {...props} />;
});
BlenderTrigger.displayName = 'BlenderTrigger';

// ==============================
// Styles
// ==============================

const triggerStyles = () => ({});

// ==============================
// Attributes
// ==============================

const triggerAttributes = (_, { id, isOpen }) => ({
	'aria-controls': id,
	'aria-expanded': isOpen,
});

const blenderAttributes = (_, props) => ({
	...triggerAttributes(_, props),
	'data-js': 'collapsible-trigger__version__',
});

// ==============================
// Exports
// ==============================

export const defaultTrigger = {
	component: Trigger,
	styles: triggerStyles,
	attributes: triggerAttributes,
};

export const blenderTrigger = {
	component: BlenderTrigger,
	styles: triggerStyles,
	attributes: blenderAttributes,
};
