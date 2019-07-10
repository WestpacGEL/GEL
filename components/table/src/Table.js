/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { mediaqueries } from './utils';

// ==============================
// Utils
// ==============================
const TableWrapper = ({ bordered, responsive, children, ...props }) => {
	const theme = useTheme();

	const maxWidth = width => `@media (max-width: ${width}px)`;
	const xs = maxWidth(theme.breakpoints.xs);

	const styleCommon = {
		[xs]: {
			width: '100%',
			marginBottom: '18px',
			overflowY: 'hidden',
			overflowX: 'auto',
			// -ms-overflow-style: '-ms-autohiding-scrollbar',
			border: `1px solid ${theme.table.appearance.responsive.borderColor}`,
			// -webkit-overflow-scrolling: 'touch',

			'> table': {
				marginBottom: 0,
				border: bordered ? 'none' : null,

				caption: {
					padding: '12px',
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

	return responsive ? <div className="table-wrapper" css={{ ...styleCommon }}>{children}</div> : children;
};

// ==============================
// Component
// ==============================

export const Table = ({ striped, bordered, responsive, ...props }) => {
	const theme = useTheme();

	// Common styles
	const styleCommon = {
		width: '100%',
		maxWidth: '100%',
		marginBottom: '21px',
		backgroundColor: '#fff',
		borderCollapse: 'collapse',

		caption: {
			fontWeight: '300',
			fontSize: '18px',
			textAlign: 'left',
			marginBottom: '12px',
		},

		// All child rows in the tbody
		'tbody > tr': {
			transition: !striped && 'background 0.2s ease',

			// Hovered row
			'&:hover': {
				backgroundColor: !striped && theme.table.tr.hover.backgroundColor,
			},
			// Odd row
			'&:nth-of-type(even)': {
				backgroundColor: striped && theme.table.appearance.striped.backgroundColor,
			},
			// Highlighted row or cell
			'&.table-highlight, > th.table-highlight, > td.table-highlight': {
				borderLeft: `6px solid ${theme.table.appearance.highlight.borderColor}`,
			},
			// Highlighted row's cell or highlighted cell
			'&.table-highlight > th, &.table-highlight > td, > th.table-highlight, > td.table-highlight': {
				borderBottom: `1px solid ${theme.table.appearance.highlight.borderColor}`,
			},

			// Adjacent highlighted cells
			'> th.table-highlight, > td.table-highlight': {
				'+ th.table-highlight, + td.table-highlight': {
					borderLeft: 'none',
				},
			},
		},

		// All cells
		'th, td': {
			padding: '12px',
			verticalAlign: 'top',
			border: `1px solid ${theme.colors.border}`,
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
			borderBottom: `solid ${theme.table.th.borderColor}`,
			borderBottomWidth: bordered ? '2px' : '3px',
			fontWeight: 500,
			color: theme.table.th.color,
		},

		tfoot: {
			color: theme.colors.muted,
		},
		// Adjacent `tbody` elements
		'tbody + tbody': {
			borderTop: `2px solid ${theme.table.th.borderColor}`,
		},
	};

	return (
		<TableWrapper bordered={bordered} responsive={responsive} {...props}>
			<table className="table" css={{ ...styleCommon }} {...props} />
		</TableWrapper>
	);
};

// ==============================
// Types
// ==============================

export const propTypes = {
	/**
	 * Striped mode.
	 *
	 * Defaults to "false"
	 */
	striped: PropTypes.bool,

	/**
	 * Bordered mode.
	 *
	 * Defaults to "false"
	 */
	bordered: PropTypes.bool,

	/**
	 * Responsive mode.
	 *
	 * Defaults to "false"
	 */
	responsive: PropTypes.bool,
};

export const defaultProps = {
	striped: false,
	bordered: false,
	responsive: false,
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
