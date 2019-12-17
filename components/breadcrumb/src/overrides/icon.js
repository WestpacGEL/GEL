/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';
import React from 'react';

export const Icon = ({ current, assistiveText, ...props }) => <ArrowRightIcon {...props} />;

export const iconStyles = () => ({
	marginLeft: '0.1875rem',
	marginRight: '0.1875rem',
	verticalAlign: 'middle',
});
