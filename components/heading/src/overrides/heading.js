/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, asArray, getLabel } from '@westpac/core';
import { forwardRef } from 'react';

const Heading = forwardRef(({ state: { tag: Tag, size }, ...rest }, ref) => {
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

const headingStyles = (_, { size }) => {
	const { PACKS, TYPE } = useBrand();
	const mq = useMediaQuery();

	const tokens = PACKS.typeScale.bodyFont;
	const sizeMax = Math.max(...Object.keys(tokens));
	let sizeArr = asArray(size);

	// check for invalid sizes
	sizeArr = sizeArr.map((s) => {
		if (s) {
			if (s > sizeMax) {
				return sizeMax;
			} else if (s < 1) {
				return 1;
			}
		}
		return s;
	});

	return mq({
		label: getLabel('heading', { size }),
		fontFamily: sizeArr.map((s) => s && PACKS.typeScale.bodyFont[s].fontFamily),
		fontSize: sizeArr.map((s) => s && PACKS.typeScale.bodyFont[s].fontSize),
		lineHeight: sizeArr.map((s) => s && PACKS.typeScale.bodyFont[s].lineHeight),
		fontWeight: TYPE.bodyFont.headingWeight,
		margin: 0,
	})[0];
};

const headingAttributes = () => null;

export const defaultHeading = {
	component: Heading,
	styles: headingStyles,
	attributes: headingAttributes,
};
