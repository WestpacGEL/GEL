/** @jsx jsx */

import { jsx } from '@westpac/core';
import React from 'react';

export const VisuallyHiddenWrapper = ({ tag: Tag, ...rest }) => <Tag {...rest} />;

export const visuallyHiddenStyles = () => ({
	position: 'absolute',
	width: 1,
	height: 1,
	padding: 0,
	overflow: 'hidden',
	clip: 'rect(0, 0, 0, 0)',
	whiteSpace: 'nowrap',
	border: 0,
});
