/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import React from 'react';

export const Heading = ({ tag: Tag, size, ...rest }) => {
	// ignore all non h1-h6 tags
	if (Tag && typeof Tag !== 'function' && !Tag.startsWith('h') && !(Tag.length === 2)) {
		Tag = null;
	}

	// fall back to size = semantic if no tag is given
	if (!Tag) {
		if (size > 6) {
			Tag = 'h6';
		} else if (size < 1) {
			Tag = 'h1';
		} else {
			Tag = `h${size}`;
		}
	}

	return <Tag {...rest} />;
};

export const headingStyles = (_, { size }) => {
	const { PACKS } = useBrand();

	return {
		margin: 0,
		...PACKS.headline[size],
	};
};
