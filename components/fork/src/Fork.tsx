/** @jsx jsx */

import { jsx, useBrand, wrapHandlers, overrideReconciler } from '@westpac/core';
import { useState, Children, createContext, useContext, useId, useMemo, useCallback } from 'react';
import { ButtonGroup, Item } from '@westpac/button-group';
import PropTypes from 'prop-types';

import { defaultFork } from './overrides/fork';
import { ForkContent } from './ForkContent';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const ForkContext = createContext(null);

export const useForkContext = () => {
	const context = useContext(ForkContext);

	if (!context) {
		throw new Error('<Content/> components should be wrapped in a <Fork>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const Fork = ({
	instanceId,
	name,
	defaultValue,
	onChange = () => {},
	children,
	overrides: componentOverrides,
	...rest
}: typeof Fork.propTypes & typeof Fork.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Fork: defaultFork,
	};

	const _id = useId();
	const id = useMemo(() => instanceId || `gel-fork-${_id}`, [_id, instanceId]);
	const [activeForkIndex, setActiveForkIndex] = useState(defaultValue);

	const state = {
		id,
		name,
		activeForkIndex,
		onChange,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Fork: { component: Fork, styles: forkStyles, attributes: forkAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const handleChange = useCallback(
		(event: Event, val: any) => {
			wrapHandlers(
				() => onChange(event, val),
				() => setActiveForkIndex(val)
			)(event);
		},
		[onChange]
	);

	return (
		<ForkContext.Provider value={{ state }}>
			<Fork state={state} {...forkAttributes(state)} css={forkStyles(state)}>
				<ButtonGroup
					name={name || id}
					value={activeForkIndex}
					onChange={handleChange}
					overrides={componentOverrides}
					{...rest}
				>
					{Children.map(children, (child, index) => {
						const selected = activeForkIndex === index;
						return (
							<Item
								key={child.props.text}
								inputProps={{
									'aria-expanded': selected,
								}}
							>
								{child.props.text}
							</Item>
						);
					})}
				</ButtonGroup>
				{Children.map(children, (child, index) => {
					const selected = activeForkIndex === index;
					return <ForkContent {...child.props} key={child.props.text} selected={selected} />;
				})}
			</Fork>
		</ForkContext.Provider>
	);
};

// ==============================
// Types
// ==============================

Fork.propTypes = {
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,

	/**
	 * Name to be used for radio inputs
	 */
	name: PropTypes.string.isRequired,

	/**
	 * Default fork index
	 */
	defaultValue: PropTypes.number,

	/**
	 * Change the value. Requires `value`
	 */
	onChange: PropTypes.func,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Fork: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Fork.defaultProps = {};
