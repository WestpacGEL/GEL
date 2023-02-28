import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import React, {
	Fragment,
	useState,
	useRef,
	cloneElement,
	Children,
	useId,
	useMemo,
	useCallback,
} from 'react';
import { useIsomorphicLayoutEffect } from '@westpac/hooks';

import { defaultFormCheckReveal } from './overrides/formCheckReveal';
import { defaultTrigger } from './overrides/trigger';
import { defaultPanel } from './overrides/panel';

import { Option } from './Option';
import pkg from '../package.json';

export interface FormCheckRevealProps {
	/**
	 * Define an id for internal elements
	 */
	instanceId?: string;
	/**
	 * Show only the given number of Form check options, hide/show toggle the remainder
	 */
	show: number;
	/**
	 * Form check item(s)
	 */
	children?: React.ReactNode;

	/**
	 * type
	 */
	type?: string;
	/**
	 * inline
	 */
	inline?: boolean;
	/**
	 * size
	 */
	size?: string;

	/**
	 * data
	 */
	data?: any[];
	/**
	 * The override API
	 */
	overrides?: {
		FormCheckReveal?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Trigger?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Panel?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const FormCheckReveal = ({
	instanceId,
	data,
	type = 'checkbox',
	inline = false,
	size = 'medium',
	show = -1,
	children,
	overrides: componentOverrides,
	...rest
}: FormCheckRevealProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const _id = useId();
	const id = useMemo(() => instanceId || `gel-form-check-reveal-${_id}`, [_id, instanceId]);

	const [isOpen, setIsOpen] = useState(false);
	const firstNewOptionRef = useRef<HTMLDivElement>(null);

	const defaultOverrides = {
		FormCheckReveal: defaultFormCheckReveal,
		Trigger: defaultTrigger,
		Panel: defaultPanel,
	};

	useIsomorphicLayoutEffect(() => {
		if (isOpen) {
			firstNewOptionRef.current?.focus();
		}
	}, [isOpen]);

	const handleOpen = useCallback(() => {
		setIsOpen((currentState) => !currentState);
	}, []);

	const state = {
		id,
		show,
		isOpen,
		type,
		inline,
		size,
		...rest,
	};

	const {
		FormCheckReveal: {
			component: FormCheckReveal,
			styles: formCheckRevealStyles,
			attributes: formCheckRevealAttributes,
		},
		Trigger: { component: Trigger, styles: triggerStyles, attributes: triggerAttributes },
		Panel: { component: Panel, styles: panelStyles, attributes: panelAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	let allChildren = [];
	if (data) {
		data.map(({ text, ...rest }, index) => {
			allChildren.push(
				<Option ref={index === show ? firstNewOptionRef : null} key={index} index={index} {...rest}>
					{text}
				</Option>
			);
		});
	} else {
		allChildren = Children.map(children, (child, index) => {
			return cloneElement(child, {
				ref: index === show ? firstNewOptionRef : null,
				index,
			});
		});
	}

	const revealCount = allChildren.length - show;
	state.revealCount = revealCount;

	return (
		<FormCheckReveal
			type={type}
			inline={inline}
			size={size}
			{...rest}
			state={state}
			{...formCheckRevealAttributes(state)}
			css={formCheckRevealStyles(state)}
		>
			{show === -1 || revealCount === 0 ? (
				allChildren
			) : (
				<Fragment>
					{allChildren.slice(0, show)}
					<Panel state={state} {...panelAttributes(state)} css={panelStyles(state)}>
						{allChildren.slice(show)}
					</Panel>
					<Trigger
						onClick={handleOpen}
						state={state}
						{...triggerAttributes(state)}
						css={triggerStyles(state)}
					/>
				</Fragment>
			)}
		</FormCheckReveal>
	);
};

FormCheckReveal.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Form check item(s)
	 */
	children: PropTypes.node,
	/**
	 * data
	 */
	data: PropTypes.array,
	/**
	 * inline
	 */
	inline: PropTypes.bool,
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		FormCheckReveal: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Panel: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Trigger: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Show only the given number of Form check options, hide/show toggle the remainder
	 */
	show: PropTypes.number.isRequired,
	/**
	 * size
	 */
	size: PropTypes.string,
	/**
	 * type
	 */
	type: PropTypes.string,
};

FormCheckReveal.defaultProps = { inline: false, show: -1, size: 'medium', type: 'checkbox' };
