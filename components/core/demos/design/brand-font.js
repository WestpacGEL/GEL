/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Fragment } from 'react';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Body } from '@westpac/body';

const StyledText = ({ weight, ...rest }) => {
	const { PACKS, TYPE } = useBrand();
	return (
		<p
			css={{
				...PACKS.typeScale.brandFont[4],
				fontWeight: TYPE.bodyFont[weight].fontWeight,
				overflowWrap: 'anywhere',
			}}
			{...rest}
		/>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	const { BRAND } = useBrand();

	const brandFontMap = {
		WBC: [{ name: 'Westpac Bold', weight: 400 }],
		STG: [{ name: 'Dragon Bold', weight: 400 }],
		BOM: [
			{ name: 'Brown Light', weight: 300 },
			{ name: 'Brown Regular', weight: 400 },
			{ name: 'Brown Bold', weight: 700 },
		],
		BSA: [
			{ name: 'Aller Light', weight: 300 },
			{ name: 'Aller Bold', weight: 700 },
		],
		WBG: [
			{ name: 'Montserrat Light', weight: 300 },
			{ name: 'Montserrat Regular', weight: 400 },
			{ name: 'Montserrat Bold', weight: 700 },
		],
		RAMS: [
			{ name: 'Source Sans Pro Regular', weight: 400 },
			{ name: 'Source Sans Pro Semi-bold', weight: 600 },
			{ name: 'Source Sans Pro Bold', weight: 700 },
		],
	};

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Body>
				{brandFontMap[BRAND.code].map((font, i) => (
					<Fragment key={i}>
						<p>{font.name}</p>
						<StyledText weight={font.weight}>
							abcdefghijklmnopqrstuvwxyz
							<br />
							ABCDEFGHIJKLMNOPQRSTUVWXYZ
							<br />
							1234567890
							<br />
							!@#$¢%&amp;*©®™£
							<br />ﬁ ﬂ ﬀ
						</StyledText>
					</Fragment>
				))}
			</Body>
		</Playground>
	);
};

export default Demo;
