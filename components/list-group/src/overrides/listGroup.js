/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { List } from '@westpac/list';

const ListGroup = props => <List type="unstyled" {...props} />;

const listGroupStyles = () => {
	const { COLORS } = useBrand();

	return {
		display: 'inline-block',
		border: `1px solid ${COLORS.border}`,
		borderBottom: 0,
		borderRadius: '0.1875rem',

		'@media print': {
			borderColor: '#000',
		},
	};
};

const listGroupAttributes = () => {
	const { COLORS } = useBrand();

	return {
		overrides: {
			Item: {
				styles: styles => ({
					...styles,
					margin: 0,
					borderBottom: `1px solid ${COLORS.border}`,
					padding: '0.75rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',

					'@media print': {
						borderColor: '#000',
					},
				}),
			},
		},
	};
};

export const defaultListGroup = {
	component: ListGroup,
	styles: listGroupStyles,
	attributes: listGroupAttributes,
};
