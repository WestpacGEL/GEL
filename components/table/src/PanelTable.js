import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from '@westpac/panel';
import { Table } from '../';

export const PanelTable = props => (
	<Panel>
		<Table
			wrappingStyles={
				props.responsive && {
					marginBottom: '0 !important',
					border: '0 !important',
				}
			}
			{...props}
		/>
	</Panel>
);

// ==============================
// Types
// ==============================

Table.propTypes = {
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

Table.defaultProps = {
	striped: false,
	bordered: false,
	responsive: false,
};
