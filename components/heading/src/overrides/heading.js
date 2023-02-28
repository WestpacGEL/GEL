import {
	useBrand,
	useMediaQuery,
	asArray,
	getLabel,
	classNames,
	styleReconciler,
} from '@westpac/core';
import { forwardRef } from 'react';

// ==============================
// Component
// ==============================

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
Heading.displayName = 'Heading';

const BlenderHeading = ({ className, ...rest }) => (
	<Heading className={className.trim()} {...rest} />
);

// ==============================
// Styles
// ==============================

const headingStyles = (_, { size, uppercase }) => {
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
		label: getLabel('heading'),
		fontFamily: sizeArr.map((s) => s && PACKS.typeScale.bodyFont[s].fontFamily),
		fontSize: sizeArr.map((s) => s && PACKS.typeScale.bodyFont[s].fontSize),
		lineHeight: uppercase ? 1 : sizeArr.map((s) => s && PACKS.typeScale.bodyFont[s].lineHeight),
		fontWeight: TYPE.bodyFont.headingWeight,
		textTransform: uppercase && 'uppercase',
		margin: 0,
	})[0];
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { size, uppercase }) => {
	if (!uppercase) {
		const styles = headingStyles(_, { size });
		return { ...styles, label: `${styles.label}-${size}` };
	} else {
		const baseStyles = headingStyles(_, { size });
		const modifierStyles = headingStyles(_, { size, uppercase });
		const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

		return { label: `${baseStyles.label}-uppercase`, ...reconciledStyles };
	}
};

// ==============================
// Attributes
// ==============================

const headingAttributes = () => null;

const blenderAttributes = (_, { size, uppercase }) => ({
	className: classNames({
		[`__convert__heading-${size}`]: uppercase,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultHeading = {
	component: Heading,
	styles: headingStyles,
	attributes: headingAttributes,
};

export const blenderHeading = {
	component: BlenderHeading,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
