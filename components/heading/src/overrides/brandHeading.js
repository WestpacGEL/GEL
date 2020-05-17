/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { forwardRef } from 'react';

const BrandHeading = forwardRef(({ state: { tag: Tag, size }, ...rest }, ref) => {
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

	return <Tag ref={ref} {...rest} />;
});

const brandHeadingStyles = (_, { size }) => {
	const { PACKS, TYPE } = useBrand();

	return {
		margin: 0,
		fontWeight: TYPE.brandFont.headingWeight,
		...PACKS.typeScale.brandFont[size],
	};
};

const brandHeadingAttributes = () => null;

export const defaultBrandHeading = {
	component: BrandHeading,
	styles: brandHeadingStyles,
	attributes: brandHeadingAttributes,
};
