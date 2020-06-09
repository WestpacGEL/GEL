/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Body } from '@westpac/body';

const PanelBody = ({ state, ...rest }) => <Body {...rest} />;

const bodyStyles = () => {
	const { SPACING } = useBrand();
	const mq = useMediaQuery();

	return mq({
		padding: [SPACING(2), null, SPACING(4)],
	})[0];
};

const bodyAttributes = () => null;

export const defaultBody = {
	component: Body,
	styles: bodyStyles,
	attributes: bodyAttributes,
};
