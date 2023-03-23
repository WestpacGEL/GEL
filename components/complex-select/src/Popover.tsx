import PropTypes from 'prop-types';
import type { OverlayTriggerState } from 'react-stately';
import type { AriaPopoverProps } from '@react-aria/overlays';
import * as React from 'react';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';

interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
	children: React.ReactNode;
	state: OverlayTriggerState;
	className?: string;
	popoverRef?: React.RefObject<HTMLDivElement>;
}

export function Popover(props: PopoverProps) {
	const ref = React.useRef<HTMLDivElement>(null);
	const { popoverRef = ref, state, children, className, isNonModal } = props;

	const { popoverProps, underlayProps } = usePopover(
		{
			...props,
			popoverRef,
		},
		state
	);

	return (
		<Overlay>
			{!isNonModal && <div {...underlayProps} className="fixed inset-0" />}
			<div
				{...popoverProps}
				ref={popoverRef}
				css={{
					zIndex: 10,
					boxShadow: '0 0 10px rgba(0,0,0,.2)',
					borderRadius: '5px',
					marginTop: '10px',
				}}
				className={`z-10 shadow-lg border border-gray-300 bg-white rounded-md mt-2 ${className}`}
			>
				{!isNonModal && <DismissButton onDismiss={state.close} />}
				{children}
				<DismissButton onDismiss={state.close} />
			</div>
		</Overlay>
	);
}

Popover.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	children: PropTypes.node,
	className: PropTypes.string,
	/**
	 * Whether the popover is non-modal, i.e. elements outside the popover may be
	 * interacted with by assistive technologies.
	 *
	 * Most popovers should not use this option as it may negatively impact the screen
	 * reader experience. Only use with components such as combobox, which are designed
	 * to handle this situation carefully.
	 */
	isNonModal: PropTypes.bool,
	popoverRef: PropTypes.shape({
		current: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object]).isRequired,
	}),
	state: PropTypes.shape({
		/**
		 * Closes the overlay.
		 */
		close: PropTypes.func.isRequired,
		/**
		 * Whether the overlay is currently open.
		 */
		isOpen: PropTypes.bool.isRequired,
		/**
		 * Opens the overlay.
		 */
		open: PropTypes.func.isRequired,
		/**
		 * Sets whether the overlay is open.
		 */
		setOpen: PropTypes.func.isRequired,
		/**
		 * Toggles the overlay's visibility.
		 */
		toggle: PropTypes.func.isRequired,
	}).isRequired,
};
