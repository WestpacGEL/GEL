/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import React from 'react';

export const Container = props => <div {...props} />;

export const containerStyles = () => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();

	const padding = [SPACING(2), SPACING(3), SPACING(6), SPACING(8), SPACING(10)];

	return mq({
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: SPACING(352),
		paddingLeft: padding,
		paddingRight: padding,
	})[0];
};
