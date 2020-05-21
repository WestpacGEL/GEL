/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';

const Well = ({ state: { tag: Tag }, state, ...rest }) => <Tag {...rest} />;

const wellStyles = () => {
	const mq = useMediaQuery();
	const { COLORS } = useBrand();

	return mq({
		padding: ['0.75rem', null, '1.5rem'],
		marginBottom: '1.125rem',
		backgroundColor: COLORS.light,
		border: `1px solid ${COLORS.border}`,
		borderRadius: '0.1875rem',

		// Nested Well styling
		'& > &': {
			backgroundColor: '#fff',
			margin: '0.75rem 0',
		},
	})[0];
};

const wellAttributes = () => null;

export const defaultWell = {
	component: Well,
	styles: wellStyles,
	attributes: wellAttributes,
};
