/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

/* 
props
should us enums for stuff here
color: "primary, hero, neutral"
appearance: "bullet, link, tick, unstyled, icon"
icon
size: "default, large"
*/

export const List = ({ children, ...props }) => {
	// do i need to check that this is only being added to a list item?
	const childrenWithProps = Children.map(children, child => {
		return cloneElement(child, props);
	});

	const common = css`
		margin: 0;
		padding: 0;
		list-style-type: none;
	`;

	const styles = {};

	return <ul css={common}>{childrenWithProps}</ul>;
};

// ==============================
// Types
// ==============================
List.propTypes = {};

List.defaultProps = {
	appearance: 'bullet',
};

// ==============================
// Questions
// ==============================
/* 
can a list with icons contain different icon bullets??

*/
