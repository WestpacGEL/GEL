/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';
import { Body } from '@westpac/body/src';

const Well = ({ state: { tag }, state, ...rest }) => <Body tag={tag} {...rest} />;

const wellStyles = () => {
	const mq = useMediaQuery();
	const { COLORS, SPACING } = useBrand();

	return mq({
		label: getLabel('well'),
		padding: [SPACING(2), null, SPACING(4)],
		marginBottom: SPACING(3),
		backgroundColor: COLORS.light,
		border: `1px solid ${COLORS.border}`,
		borderRadius: '0.1875rem',

		// Nested Well styling
		'& > &': {
			backgroundColor: '#fff',
			margin: `${SPACING(2)} 0`,
		},
	})[0];
};

const wellAttributes = () => null;

export const defaultWell = {
	component: Well,
	styles: wellStyles,
	attributes: wellAttributes,
};
