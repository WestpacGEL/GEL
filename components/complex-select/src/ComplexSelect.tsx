import React, { forwardRef, HTMLAttributes } from 'react';
import { Item, useSelectState } from 'react-stately';
import { HiddenSelect, mergeProps, useButton, useFocusRing, useSelect } from 'react-aria';
import PropTypes from 'prop-types';
import { useBrand } from '@westpac/core';
import { useStyles } from './useStyle';

import pkg from '../package.json';
import { AriaSelectProps } from '@react-types/select';
import { Popover } from './Popover';
import { ListBox } from './ListBox';

type SelectSizes = 'small' | 'medium' | 'large' | 'xlarge';

export interface ComplexSelectProps<T extends object = any> extends AriaSelectProps<T> {
	/**
	 * Component size
	 */
	size?: SelectSizes;
	/**
	 * Component width (in chars).
	 *
	 * This prop sets a fixed width, measured in characters.
	 */
	width?: 2 | 3 | 4 | 5 | 10 | 20 | 30;
	/**
	 * Inline mode
	 */
	inline?: boolean;
	/**
	 * Invalid input mode
	 */
	invalid?: boolean;
	/**
	 * Data drive this component
	 */
	data?: {
		text: string;
	}[];
}

// ==============================
// Component
// ==============================

export const ComplexSelect = forwardRef<HTMLSelectElement, ComplexSelectProps>(
	(
		{
			size = 'medium',
			inline = false,
			invalid = false,
			width,
			data,
			children,
			name,
			label,
			...props
		},
		ref
	) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			COLORS,
			[pkg.name]: brandOverrides,
		} = useBrand();

		const state = useSelectState({ label, children, ...props });
		// Get props for child elements from useSelect
		const selectRef = React.useRef(null);
		const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
			{ label, children, ...props },
			state,
			selectRef
		);

		// Get props for the button based on the trigger props from useSelect
		const { buttonProps } = useButton(triggerProps, selectRef);

		const { focusProps, isFocusVisible } = useFocusRing();

		const styles = useStyles({
			size,
			inline,
			invalid,
			width,
			data,
			children,
			name,
			label,
			...props,
		});

		return (
			<div css={{ display: 'block' }}>
				<HiddenSelect state={state} triggerRef={selectRef} label={label} name={name} />
				<button {...mergeProps(buttonProps, focusProps)} ref={selectRef} css={styles}>
					<span css={{ flex: 1, textAlign: 'left' }} {...valueProps}>
						{state.selectedItem ? state.selectedItem.rendered : 'Select an option'}
					</span>
					<span css={{ flex: 0 }} aria-hidden="true" style={{ paddingLeft: 5 }}>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8">
							<path fill={COLORS.muted} fillRule="evenodd" d="M0 0l7 8 7-8z" />
						</svg>
					</span>
				</button>
				{state.isOpen && (
					<Popover state={state} triggerRef={selectRef} placement="bottom start">
						<ListBox {...menuProps} state={state} />
					</Popover>
				)}
			</div>
		);
	}
);

ComplexSelect.displayName = 'Select';

ComplexSelect.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Component children.
	 *
	 * Note: Only `select` type inputs render children.
	 */
	children: PropTypes.node,
	/**
	 * Data drive this component
	 */
	data: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
		})
	),
	/**
	 * Inline mode
	 */
	inline: PropTypes.bool,
	/**
	 * Invalid input mode
	 */
	invalid: PropTypes.bool,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Select: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Component size
	 */
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']),
	/**
	 * Component width (in chars).
	 *
	 * This prop sets a fixed width, measured in characters.
	 */
	width: PropTypes.oneOf([2, 3, 4, 5, 10, 20, 30]),
};
