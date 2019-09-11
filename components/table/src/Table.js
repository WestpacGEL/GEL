/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================

const TableWrapper = ({ isBordered, isResponsive, children, ...props }) => {
	const { table, breakpoints } = useTheme();

	const maxWidth = width => `@media (max-width: ${width}px)`;
	const xsOnly = maxWidth(breakpoints.sm - 1);

	const common = {
		[xsOnly]: {
			width: '100%',
			marginBottom: '1.8rem',
			overflowY: 'hidden',
			overflowX: 'auto',
			// -ms-overflow-style: '-ms-autohiding-scrollbar',
			border: `${table.responsive.borderWidth} solid ${table.responsive.borderColor}`,
			// -webkit-overflow-scrolling: 'touch',

			'> table': {
				marginBottom: 0,
				border: isBordered && 0,

				caption: {
					padding: table.responsive.caption.padding,
				},
				'tbody, tfoot': {
					'tr:last-child': {
						'th, td': {
							borderBottom: isBordered && 0,
						},
					},
				},
				'th, td': {
					whiteSpace: 'nowrap',

					':first-of-type': {
						borderLeft: isBordered && 0,
					},
					':last-child': {
						borderRight: isBordered && 0,
					},
				},
			},
		},
	};

	return isResponsive ? (
		<div className="table-responsive" css={common}>
			{children}
		</div>
	) : (
		children
	);
};

// ==============================
// Component
// ==============================

export const Table = ({ isStriped, isBordered, isResponsive, ...props }) => {
	const { table, colors } = useTheme();

	const common = {
		width: '100%',
		maxWidth: '100%',
		marginBottom: table.marginBottom,
		backgroundColor: table.backgroundColor,
		borderCollapse: 'collapse',

		caption: {
			fontWeight: table.caption.fontWeight,
			fontSize: table.caption.fontSize,
			textAlign: 'left',
			marginBottom: table.caption.marginBottom,
		},

		// All child rows in the tbody
		'tbody > tr': {
			transition: !isStriped && 'background 0.2s ease',

			// Hovered row
			':hover': {
				backgroundColor: !isStriped && table.tr.hover.backgroundColor,
			},
			// Odd row
			':nth-of-type(even)': {
				backgroundColor: isStriped && table.striped.backgroundColor,
			},
			// Highlighted row or cell
			'&.table-highlight, > th.table-highlight, > td.table-highlight': {
				borderLeft: table.highlight.borderLeft,
			},
			// Highlighted row's cell or highlighted cell
			'&.table-highlight > th, &.table-highlight > td, > th.table-highlight, > td.table-highlight': {
				borderBottom: table.highlight.borderBottom,
			},

			// Adjacent highlighted cells
			'> th.table-highlight, > td.table-highlight': {
				'+ th.table-highlight, + td.table-highlight': {
					borderLeft: 0,
				},
			},
		},

		// All cells
		'th, td': {
			padding: table.td.padding,
			verticalAlign: 'top',
			border: `${table.td.borderWidth} solid ${table.td.borderColor}`,
			borderLeft: !isBordered && 0,
			borderRight: !isBordered && 0,
		},
		// All child cells in the thead
		'thead > tr': {
			'th, td': {
				borderTop: !isBordered && 0,
			},
		},
		// All child cells in the tfoot
		'tfoot > tr': {
			'> th, > td': {
				borderBottom: !isBordered && 0,
			},
		},

		// All `th` cells
		th: {
			textAlign: 'left',
		},
		// `th` cells in the `thead`
		'thead > tr > th': {
			verticalAlign: 'bottom',
			borderBottom: `solid ${table.th.borderColor}`,
			borderBottomWidth: isBordered
				? table.bordered.th.borderBottomWidth
				: table.th.borderBottomWidth,
			fontWeight: table.th.fontWeight,
			color: table.th.color,
		},

		tfoot: {
			color: colors.muted,
		},
		// Adjacent `tbody` elements
		'tbody + tbody': {
			borderTop: `2px solid ${table.th.borderColor}`,
		},
	};

	return (
		<TableWrapper isBordered={isBordered} isResponsive={isResponsive} {...props}>
			<table css={common} {...props} />
		</TableWrapper>
	);
};

// ==============================
// Types
// ==============================

const propTypes = {
	/**
	 * Striped mode
	 */
	isStriped: PropTypes.bool,

	/**
	 * Bordered mode
	 */
	isBordered: PropTypes.bool,

	/**
	 * Responsive mode
	 */
	isResponsive: PropTypes.bool,
};

const defaultProps = {
	isStriped: false,
	isBordered: false,
	isResponsive: false,
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

TableWrapper.propTypes = propTypes;
TableWrapper.defaultProps = defaultProps;
