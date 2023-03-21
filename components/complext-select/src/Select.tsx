import React, { forwardRef, HTMLAttributes } from 'react';
import { Item, useSelectState } from 'react-stately';
import { HiddenSelect, useSelect } from 'react-aria';
import PropTypes from 'prop-types';
import { useBrand } from '@westpac/core';
import { useStyles } from './useStyle';

import pkg from '../package.json';

type SelectSizes = 'small' | 'medium' | 'large' | 'xlarge';

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
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
	/**
	 * Component children.
	 *
	 * Note: Only `select` type inputs render children.
	 */
	children?: React.ReactNode;
}

// ==============================
// Component
// ==============================

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
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
			...rest
		},
		ref
	) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const state = useSelectState(rest);
		// Get props for child elements from useSelect
		const selectRef = React.useRef(null);
		const { labelProps, triggerProps, valueProps, menuProps } = useSelect(rest, state, selectRef);

		const styles = useStyles({ size, inline, invalid, width, data, ...rest });

		return (
			<div style={{ display: 'inline-block' }}>
				<div {...labelProps}>{label}</div>
				<HiddenSelect state={state} triggerRef={selectRef} label={label} name={name} />
				<button {...triggerProps} ref={selectRef} style={{ height: 30, fontSize: 14 }}>
					<span {...valueProps}>
						{state.selectedItem ? state.selectedItem.rendered : 'Select an option'}
					</span>
					<span aria-hidden="true" style={{ paddingLeft: 5 }}>
						▼
					</span>
				</button>
				{/* {state.isOpen && (
					<Popover state={state} triggerRef={ref} placement="bottom start">
						<ListBox {...menuProps} state={state} />
					</Popover>
				)}
				{allChildren} */}
			</div>
		);
	}
);

Select.displayName = 'Select';

Select.propTypes = {
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
