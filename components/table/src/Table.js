/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================

const TableWrapper = ({ bordered, responsive, children, ...props }) => {
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
				border: bordered ? 'none' : null,

				caption: {
					padding: table.responsive.caption.padding,
				},
				'tbody, tfoot': {
					'tr:last-child': {
						'th, td': {
							borderBottom: bordered ? 'none' : null,
						},
					},
				},
				'th, td': {
					whiteSpace: 'nowrap',

					'&:first-of-type': {
						borderLeft: bordered ? 'none' : null,
					},
					'&:last-child': {
						borderRight: bordered ? 'none' : null,
					},
				},
			},
		},
	};

	return responsive ? (
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

export const Table = ({ striped, bordered, responsive, ...props }) => {
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
			transition: !striped && 'background 0.2s ease',

			// Hovered row
			':hover': {
				backgroundColor: !striped && table.tr.hover.backgroundColor,
			},
			// Odd row
			':nth-of-type(even)': {
				backgroundColor: striped && table.striped.backgroundColor,
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
			borderLeft: !bordered && 'none',
			borderRight: !bordered && 'none',
		},
		// All child cells in the thead
		'thead > tr': {
			'th, td': {
				borderTop: !bordered && 'none',
			},
		},
		// All child cells in the tfoot
		'tfoot > tr': {
			'th, td': {
				borderBottom: !bordered && 'none',
			},
		},

		// All `th` cells
		th: {
			textAlign: 'left',
			verticalAlign: 'bottom',
			borderBottom: `solid ${table.th.borderColor}`,
			borderBottomWidth: bordered
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
		<TableWrapper bordered={bordered} responsive={responsive} {...props}>
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
	striped: PropTypes.bool,

	/**
	 * Bordered mode
	 */
	bordered: PropTypes.bool,

	/**
	 * Responsive mode
	 */
	responsive: PropTypes.bool,
};

const defaultProps = {
	striped: false,
	bordered: false,
	responsive: false,
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

TableWrapper.propTypes = propTypes;
TableWrapper.defaultProps = defaultProps;
