/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { SrOnly } from '@westpac/accessibility-helpers';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

/**
 * Pagination: Pagination is used to navigate within a set of related views. This element allows navigation within both finite (a set number) and infinite (unknown number) of views.
 */
export const PaginationItem = ({ children, first, middle, last, active, disabled, ...props }) => {
	const { COLORS } = useTheme();

	const styleLink = {
		padding: '0.4375rem 0.75rem',
		border: `1px solid ${COLORS.border}`,
		marginLeft: '-1px',
		transition: 'background .2s ease',
		fontSize: '0.875rem',
		textDecoration: 'none',

		color: active ? '#fff' : COLORS.neutral,
		zIndex: active ? 2 : null,
		backgroundColor: active ? COLORS.hero : null,

		':hover': {
			backgroundColor: !active ? COLORS.background : COLORS.hero,
		},
	};

	const styleFirst = {
		marginLeft: 0,
		borderTopLeftRadius: '3px',
		borderBottomLeftRadius: '3px',
	};

	const styleLast = {
		borderTopRightRadius: '3px',
		borderBottomRightRadius: '3px',
	};

	const styleDisabled = {
		color: COLORS.muted,
		backgroundColor: COLORS.light,
		cursor: 'not-allowed',
		opacity: '.5',
	};

	return (
		<>
			{first && !disabled && (
				<li css={{ a: { ...styleLink, ...styleFirst } }} {...props}>
					<SrOnly>Step </SrOnly>
					{children}
					<SrOnly> one page</SrOnly>
				</li>
			)}

			{first && disabled && (
				<li css={{ a: { ...styleLink, ...styleFirst, ...styleDisabled } }} {...props}>
					<SrOnly>Step </SrOnly>
					{children}
					<SrOnly> one page</SrOnly>
				</li>
			)}

			{middle && (
				<li css={{ a: { ...styleLink } }} {...props}>
					<SrOnly>You are currently reading page</SrOnly>
					<SrOnly>Go to page </SrOnly>
					{children}
				</li>
			)}

			{last && !disabled && (
				<li css={{ a: { ...styleLink, ...styleLast } }} {...props}>
					<SrOnly>Step to the </SrOnly>
					{children}
					<SrOnly> page</SrOnly>
				</li>
			)}

			{last && disabled && (
				<li css={{ a: { ...styleLink, ...styleLast, ...styleDisabled } }} {...props}>
					<SrOnly>Step to the </SrOnly>
					{children}
					<SrOnly> page</SrOnly>
				</li>
			)}
		</>
	);
};

// ==============================
// Types
// ==============================

PaginationItem.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

PaginationItem.defaultProps = {};
