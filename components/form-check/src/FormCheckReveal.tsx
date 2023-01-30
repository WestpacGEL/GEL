/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import {
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
import PropTypes from 'prop-types';

import { defaultFormCheckReveal } from './overrides/formCheckReveal';
import { defaultTrigger } from './overrides/trigger';
import { defaultPanel } from './overrides/panel';

import { Option } from './Option';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const FormCheckReveal = ({
	instanceId,
	show,
	data,
	children,
	overrides: componentOverrides,
	...rest
}: typeof FormCheckReveal.propTypes & typeof FormCheckReveal.defaultProps) => {
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
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,

	/**
	 * Show only the given number of Form check options, hide/show toggle the remainder
	 */
	show: PropTypes.number.isRequired,

	/**
	 * Form check item(s)
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		FormCheckReveal: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Trigger: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Panel: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	type: 'checkbox',
	inline: false,
	size: 'medium',
	show: -1,
};

FormCheckReveal.defaultProps = defaultProps;
