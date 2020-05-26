/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, asArray } from '@westpac/core';
import { forwardRef } from 'react';

const BrandHeading = forwardRef(({ state: { tag: Tag, size }, ...rest }, ref) => {
	// ignore all non h1-h6 tags
	if (Tag && typeof Tag !== 'function' && !Tag.startsWith('h') && !(Tag.length === 2)) {
		Tag = null;
	}

	const sizeArr = asArray(size);

	// fall back to size = semantic if no tag is given
	if (!Tag) {
		if (sizeArr[0] > 6) {
			Tag = 'h6';
		} else if (sizeArr[0] < 1) {
			Tag = 'h1';
		} else {
			Tag = `h${sizeArr[0]}`;
		}
	}

	return <Tag ref={ref} {...rest} />;
});

const brandHeadingStyles = (_, { size }) => {
	const { PACKS, TYPE } = useBrand();
	const mq = useMediaQuery();

	const tokens = PACKS.typeScale.brandFont;
	const sizeMax = Object.keys(tokens).reduce((a, b) => (tokens[a] > tokens[b] ? a : b));
	let sizeArr = asArray(size);

	// check for invalid sizes
	sizeArr = sizeArr.map(function (s) {
		if (s > sizeMax) {
			return sizeMax;
		} else if (s < 1) {
			return 1;
		}
		return s;
	});

	return mq({
		fontFamily: sizeArr.map((s) => s && PACKS.typeScale.brandFont[s].fontFamily),
		fontSize: sizeArr.map((s) => s && PACKS.typeScale.brandFont[s].fontSize),
		lineHeight: sizeArr.map((s) => s && PACKS.typeScale.brandFont[s].lineHeight),
		fontWeight: TYPE.brandFont.headingWeight,
		margin: 0,
	})[0];
};

const brandHeadingAttributes = () => null;

export const defaultBrandHeading = {
	component: BrandHeading,
	styles: brandHeadingStyles,
	attributes: brandHeadingAttributes,
};
