/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';
import { Body } from '@westpac/body';

const PanelBody = ({ state, ...rest }) => <Body {...rest} />;

const bodyStyles = () => {
	const { SPACING } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('panel-body'),
		padding: [SPACING(2), null, SPACING(4)],
	})[0];
};

const bodyAttributes = () => null;

export const defaultBody = {
	component: Body,
	styles: bodyStyles,
	attributes: bodyAttributes,
};
