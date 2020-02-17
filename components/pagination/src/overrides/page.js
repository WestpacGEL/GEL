/** @jsx jsx */

import { jsx } from '@westpac/core';
import React from 'react';

export const Page = ({
	index,
	nextIndex,
	text,
	first,
	last,
	disabled,
	assistiveText,
	current,
	active,
	...rest
}) => <li {...rest} />;

export const pageStyles = () => ({});
