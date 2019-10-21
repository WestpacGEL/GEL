/** @jsx jsx */

import React, { Children, cloneElement, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import { useFormContext } from '@westpac/form';

// ==============================
// Context and consumer hook
// ==============================

const InputGroupContext = createContext();

export const useInputGroupContext = () => useContext(InputGroupContext);

// ==============================
// Component
// ==============================

/**
 * Input Group: Styled input fields with attached addons. Addons can be text ($, %, .00 etc) or form controls (buttons or select inputs).
 */
export const InputGroup = ({ size, children, ...props }) => {
	// Consume FormContext
	const formContext = useFormContext();
	const inputGroupSize = size || (formContext && formContext.size) || 'medium';

	const numChildren = Children.count(children);
	const childrenWithProps = Children.map(children, (child, index) => {
		if (index === 0) {
			return cloneElement(child, { first: true });
		}
		if (index === numChildren - 1) {
			return cloneElement(child, { last: true });
		}

		return child;
	});

	return (
		<InputGroupContext.Provider value={{ size: inputGroupSize }}>
			<div css={{ display: 'flex' }} {...props}>
				{childrenWithProps}
			</div>
		</InputGroupContext.Provider>
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['small', 'medium', 'large', 'xlarge'],
};

InputGroup.propTypes = {
	/**
	 * InputGroup size
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * InputGroup children
	 */
	children: PropTypes.node.isRequired,
};

InputGroup.defaultProps = {};
