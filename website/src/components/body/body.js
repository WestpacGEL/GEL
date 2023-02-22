import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Body as GELBody } from '@westpac/body';
import merge from 'lodash.merge';

export const getTypeScaleMargin = (size, isCollapse = false) => {
	const { SPACING } = useBrand();

	/**
	 * Note: `isCollapse` adds additional marginTop to counter the missing (12px) marginBottom
	 * from the element above, an issue brought about by the non-collapsing nature of wrapping
	 * everything in `<Cell />` divs 🙄
	 */
	const marginMap = {
		6: {
			top: 0,
			bottom: [SPACING(4), null, SPACING(7)],
			bottomTight: [SPACING(2), null, SPACING(3)],
		},
		8: {
			top: isCollapse ? SPACING(4) : SPACING(2), //isCollapse +2 units (12px)
			bottom: SPACING(2),
		},
		10: {
			top: isCollapse ? SPACING(4) : SPACING(2), //isCollapse +2 units (12px)
			bottom: SPACING(1),
		},
	};

	return marginMap[size];
};

export const Body = (props) => {
	const mq = useMediaQuery();
	const { PACKS, TYPE, SPACING, COLORS } = useBrand();

	return (
		<GELBody
			overrides={{
				Body: {
					styles: (styles) =>
						merge({}, styles, {
							...mq({
								fontSize: '1rem',
								lineHeight: 2,

								'h1, h2, h3, h4, h5, h6': {
									color: 'inherit',
								},
								h2: {
									...PACKS.typeScale.bodyFont[6],
									fontWeight: TYPE.bodyFont.headingWeight,
									marginTop: getTypeScaleMargin(6, true).top,
									marginBottom: getTypeScaleMargin(6, true).bottom,
								},
								h3: {
									...PACKS.typeScale.bodyFont[8],
									fontWeight: TYPE.bodyFont.headingWeight,
									marginTop: getTypeScaleMargin(8, true).top,
									marginBottom: getTypeScaleMargin(8, true).bottom,
								},
								h4: {
									...PACKS.typeScale.bodyFont[10],
									fontWeight: TYPE.bodyFont.headingWeight,
									marginTop: getTypeScaleMargin(10, true).top,
									marginBottom: getTypeScaleMargin(10, true).bottom,
									textTransform: 'uppercase',
								},
								p: {
									margin: `0 0 ${SPACING(2)}`,
								},
								code: {
									paddingLeft: SPACING(1, 'minor'),
									paddingRight: SPACING(1, 'minor'),
									backgroundColor: '#fff',
									color: COLORS.hero,
								},
							})[0],
						}),
				},
			}}
			{...props}
		/>
	);
};
