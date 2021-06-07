/** @jsx jsx */

import { jsx, useBrand, wrapHandlers, useInstanceId, overrideReconciler } from '@westpac/core';
import { useState, Children, createContext, useContext } from 'react';
import { ButtonGroup, Item } from '@westpac/button-group';
import PropTypes from 'prop-types';

import { defaultFork } from './overrides/fork';
import { ForkContent } from './ForkContent';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const ForkContext = createContext();

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
	defaultValue,
	instanceIdPrefix,
	onChange = () => {},
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Fork: defaultFork,
	};

	const [activeForkIndex, setActiveForkIndex] = useState(defaultValue);
	const [instanceId] = useState(
		instanceIdPrefix ? instanceIdPrefix : `gel-fork-${useInstanceId()}`
	);

	const state = {
		activeForkIndex,
		instanceId,
		onChange,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Fork: { component: Fork, styles: forkStyles, attributes: forkAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const handleChange = (event, val) => {
		wrapHandlers(
			() => onChange(event, val),
			() => setActiveForkIndex(val)
		)(event);
	};

	return (
		<ForkContext.Provider value={{ state }}>
			<Fork state={state} {...forkAttributes(state)} css={forkStyles(state)}>
				<ButtonGroup
					name={instanceId}
					value={activeForkIndex}
					onChange={handleChange}
					overrides={componentOverrides}
					{...rest}
				>
					{Children.map(children, (child) => {
						return <Item key={child.props.text}>{child.props.text}</Item>;
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
	 * Default fork index
	 */
	defaultValue: PropTypes.number,

	/**
	 * Define an id prefix for internal elements
	 */
	instanceIdPrefix: PropTypes.string,

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
