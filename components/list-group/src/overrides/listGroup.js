import { jsx, useBrand } from '@westpac/core';
import { List } from '@westpac/list';

const ListGroup = (props) => <List type="unstyled" {...props} />;

const listGroupStyles = () => {
	const { COLORS } = useBrand();

	return {
		label: 'listGroup',
		display: 'inline-block',
		border: `1px solid ${COLORS.border}`,
		borderBottom: 0,
		borderRadius: '0.1875rem',

		// Override `<List />` styling
		'> li': {
			margin: 0,
			padding: '0.75rem',
			position: 'static',
		},

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
				styles: (styles) => ({
					...styles,
					borderBottom: `1px solid ${COLORS.border}`,
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
