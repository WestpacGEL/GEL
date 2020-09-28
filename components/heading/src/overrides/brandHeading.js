/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, asArray, getLabel } from '@westpac/core';
import { forwardRef } from 'react';

// ==============================
// Component
// ==============================

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

// ==============================
// Styles
// ==============================

const brandHeadingStyles = (_, { size, uppercase }) => {
	const { PACKS, TYPE } = useBrand();
	const mq = useMediaQuery();

	const tokens = PACKS.typeScale.brandFont;
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
		label: getLabel('brandHeading'),
		fontFamily: sizeArr.map((s) => s && PACKS.typeScale.brandFont[s].fontFamily),
		fontSize: sizeArr.map((s) => s && PACKS.typeScale.brandFont[s].fontSize),
		lineHeight: uppercase ? 1 : sizeArr.map((s) => s && PACKS.typeScale.brandFont[s].lineHeight),
		fontWeight: TYPE.brandFont.headingWeight,
		textTransform: uppercase && 'uppercase',
		margin: 0,
	})[0];
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { size }) => {
	const styles = brandHeadingStyles(_, { size });
	return { ...styles, label: `${styles.label}-size-${size}` };
};

// ==============================
// Attributes
// ==============================

const brandHeadingAttributes = () => null;

const blenderAttributes = (_, { size }) => ({
	className: classNames({ [`__convert__brandHeading-${size}`]: size }),
});

// ==============================
// Exports
// ==============================

export const defaultBrandHeading = {
	component: BrandHeading,
	styles: brandHeadingStyles,
	attributes: brandHeadingAttributes,
};

export const blenderBrandHeading = {
	component: BrandHeading,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
