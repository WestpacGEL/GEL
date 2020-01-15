/** @jsx jsx */

import { jsx } from '@westpac/core';
import React from 'react';

export const Text = ({ block, ...rest }) => <span {...rest} />;

export const textStyles = () => ({
	overflow: 'hidden',
	textOverflow: 'ellipsis',
});
