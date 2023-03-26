import React, { forwardRef } from 'react';
import { useComboBoxState } from 'react-stately';
import { useButton, useComboBox, useFilter } from 'react-aria';
import PropTypes from 'prop-types';
import { css, useBrand } from '@westpac/core';
import { useStyles } from './useStyle';

import pkg from '../package.json';
import { Popover } from './Popover';
import { ListBox } from './ListBox';
import type { ComboBoxProps as AriaComboBoxProps } from '@react-types/combobox';

type SelectSizes = 'small' | 'medium' | 'large' | 'xlarge';

export interface ComboBoxProps<T extends object = any> extends AriaComboBoxProps<T> {
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

export const ComboBox = forwardRef<HTMLSelectElement, ComboBoxProps>(
	({ size = 'medium', inline = false, invalid = false, width, data, name, ...props }, ref) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			COLORS,
			[pkg.name]: brandOverrides,
		} = useBrand();

		const { contains } = useFilter({ sensitivity: 'base' });
		const state = useComboBoxState({ ...props, defaultFilter: contains });

		const buttonRef = React.useRef(null);
		const inputRef = React.useRef(null);
		const listBoxRef = React.useRef(null);
		const popoverRef = React.useRef(null);

		const {
			buttonProps: triggerProps,
			inputProps,
			listBoxProps,
			labelProps,
		} = useComboBox(
			{
				...props,
				inputRef,
				buttonRef,
				listBoxRef,
				popoverRef,
			},
			state
		);

		let { buttonProps } = useButton(triggerProps, buttonRef);

		const styles = useStyles({
			size,
			inline,
			invalid,
			width,
			data,
			name,
			state,
			...props,
		});

		return (
			<div className="inline-flex flex-col relative w-52">
				<label {...labelProps} className="block text-sm font-medium text-gray-700 text-left">
					{props.label}
				</label>
				<div
					css={{
						...styles,
					}}
				>
					<input className="input-text" {...inputProps} ref={inputRef} />
					<button {...buttonProps} ref={buttonRef} className="toggle-button">
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8">
							<path fill={COLORS.muted} fillRule="evenodd" d="M0 0l7 8 7-8z" />
						</svg>
					</button>
				</div>
				{state.isOpen && (
					<Popover
						popoverRef={popoverRef}
						triggerRef={inputRef}
						state={state}
						isNonModal
						placement="bottom start"
						className="w-52"
					>
						<ListBox {...listBoxProps} listBoxRef={listBoxRef} state={state} />
					</Popover>
				)}
			</div>
		);
	}
);

ComboBox.displayName = 'ComboBox';

ComboBox.propTypes = {
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
