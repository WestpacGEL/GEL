/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';
import React from 'react';

export const Icon = ({ current, href, text, assistiveText, currentAssistiveText, ...rest }) => (
	<ArrowRightIcon {...rest} />
);

export const iconStyles = () => ({
	marginLeft: '0.1875rem',
	marginRight: '0.1875rem',
	verticalAlign: 'middle',
});
