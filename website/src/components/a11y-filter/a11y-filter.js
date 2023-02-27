import React, { useState, Fragment, useId, useMemo } from 'react';
import { jsx, useBrand } from '@westpac/core';
import { Select } from '@westpac/text-input';

const FILTER_HTML = `
<svg id="vision-filters" style="opacity:0; width:0; height:0;" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" version="1.1">
<defs>
<filter id="filter-protanopia" color-interpolation-filters="sRGB">
<feColorMatrix values="0.152286 1.052583 -0.204868 0 0     0.114503 0.786281 0.099216 0 0     -0.003882 -0.048116 1.051998 0 0     0 0 0 1 0"></feColorMatrix>
<feComponentTransfer>
<feFuncB type="gamma" exponent=".9"></feFuncB>
<feFuncR type="gamma" exponent=".9"></feFuncR>
<feFuncG type="gamma" exponent=".9"></feFuncG>
</feComponentTransfer>
</filter>
<filter id="filter-protanomaly" color-interpolation-filters="sRGB">
<feColorMatrix values="0.458064 0.679578 -0.137642 0 0     0.092785 0.846313 0.060902 0 0     -0.007494 -0.016807 1.024301 0 0     0 0 0 1 0"></feColorMatrix>
<feComponentTransfer>
<feFuncB type="gamma" exponent=".9"></feFuncB>
<feFuncR type="gamma" exponent=".9"></feFuncR>
<feFuncG type="gamma" exponent=".9"></feFuncG>
</feComponentTransfer>
</filter>
<filter id="filter-deuteranopia" color-interpolation-filters="sRGB">
<feColorMatrix values="0.367322 0.860646 -0.227968 0 0     0.280085 0.672501 0.047413 0 0     -0.011820 0.042940 0.968881 0 0     0 0 0 1 0"></feColorMatrix>
<feComponentTransfer>
<feFuncB type="gamma" exponent=".9"></feFuncB>
<feFuncR type="gamma" exponent=".9"></feFuncR>
<feFuncG type="gamma" exponent=".9"></feFuncG>
</feComponentTransfer>
</filter>
<filter id="filter-deuteranomaly" color-interpolation-filters="sRGB">
<feColorMatrix values="0.547494 0.607765 -0.155259 0 0     0.181692 0.781742 0.036566 0 0     -0.010410 0.027275 0.983136 0 0     0 0 0 1 0"></feColorMatrix>
<feComponentTransfer>
<feFuncB type="gamma" exponent=".9"></feFuncB>
<feFuncR type="gamma" exponent=".9"></feFuncR>
<feFuncG type="gamma" exponent=".9"></feFuncG>
</feComponentTransfer>
</filter>
<filter id="filter-tritanopia" color-interpolation-filters="sRGB">
<feColorMatrix values="1.255528 -0.076749 -0.178779 0 0     -0.078411 0.930809 0.147602 0 0     0.004733 0.691367 0.303900 0 0     0 0 0 1 0"></feColorMatrix>
<feComponentTransfer>
<feFuncB type="gamma" exponent=".9"></feFuncB>
<feFuncR type="gamma" exponent=".9"></feFuncR>
<feFuncG type="gamma" exponent=".9"></feFuncG>
</feComponentTransfer>
</filter>
<filter id="filter-tritanomaly" color-interpolation-filters="sRGB">
<feColorMatrix values="1.017277 0.027029 -0.044306 0 0     -0.006113 0.958479 0.047634 0 0     0.006379 0.248708 0.744913 0 0     0 0 0 1 0"></feColorMatrix>
<feComponentTransfer>
<feFuncB type="gamma" exponent=".9"></feFuncB>
<feFuncR type="gamma" exponent=".9"></feFuncR>
<feFuncG type="gamma" exponent=".9"></feFuncG>
</feComponentTransfer>
</filter>
<filter id="filter-achromatopsia" color-interpolation-filters="sRGB">
<feColorMatrix values="0.212656 0.715158 0.072186 0 0     0.212656 0.715158 0.072186 0 0     0.212656 0.715158 0.072186 0 0     0 0 0 1 0"></feColorMatrix>
<feColorMatrix type="saturate" values="0" color-interpolation-filters="sRGB"></feColorMatrix>
<feComponentTransfer>
<feFuncR type="gamma" exponent=".9"></feFuncR>
<feFuncG type="gamma" exponent=".9"></feFuncG>
<feFuncB type="gamma" exponent=".9"></feFuncB>
</feComponentTransfer>
</filter>
<filter id="filter-achromatomaly" color-interpolation-filters="sRGB">
<feColorMatrix type="saturate" values="0.5"></feColorMatrix>
<feComponentTransfer>
<feFuncR type="gamma" exponent=".9"></feFuncR>
<feFuncG type="gamma" exponent=".9"></feFuncG>
<feFuncB type="gamma" exponent=".9"></feFuncB>
</feComponentTransfer>
</filter>
<filter id="filter-low-contrast" color-interpolation-filters="sRGB">
<feComponentTransfer>
<feFuncR type="linear" slope=".5" intercept=".25"></feFuncR>
<feFuncG type="linear" slope=".5" intercept=".25"></feFuncG>
<feFuncB type="linear" slope=".5" intercept=".25"></feFuncB>
</feComponentTransfer>
</filter>
</defs>
</svg>`;

const filters = [
	{ text: 'No filter', value: '' },
	{ text: 'Achromatomaly', value: 'achromatomaly' },
	{ text: 'Achromatopsia', value: 'achromatopsia' },
	{ text: 'Deuteranomaly', value: 'deuteranomaly' },
	{ text: 'Deuteranopia', value: 'deuteranopia' },
	{ text: 'Protanomaly', value: 'protanomaly' },
	{ text: 'Protanopia', value: 'protanopia' },
	{ text: 'Tritanomaly', value: 'tritanomaly' },
	{ text: 'Tritanopia', value: 'tritanopia' },
	{ text: 'Low contrast', value: 'low-contrast' },
];

export const VisionFilter = ({ children }) => {
	const [filter, setFilter] = useState();
	const _id = useId();
	const id = useMemo(() => `vision-filter-${_id}`, [_id]);

	const { SPACING, COLORS } = useBrand();

	if (!document.getElementById('vision-filters')) {
		const filterContainer = document.createElement('div');
		filterContainer.innerHTML = FILTER_HTML.trim();
		filterContainer.style.height = 0;
		document.body.append(filterContainer);
	}

	return (
		<Fragment>
			<div
				css={{
					display: 'flex',
					alignItems: 'center',
					padding: SPACING(4),
					marginBottom: SPACING(4),
					backgroundColor: COLORS.light,
				}}
			>
				<label htmlFor={id} css={{ marginRight: '1rem' }}>
					Select filter
				</label>
				<Select
					id={id}
					width={10}
					value={filter}
					onChange={(event) => setFilter(event.target.value)}
					data={filters}
				/>
			</div>
			<div css={{ filter: filter ? `url(#filter-${filter})` : 'none' }}>{children}</div>
		</Fragment>
	);
};
