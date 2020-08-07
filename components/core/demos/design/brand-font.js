/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Playground } from '../../../../website/src/components/playground/macro';

const Wrapper = (props) => {
	const { PACKS } = useBrand();
	return <div css={{ ...PACKS.typeScale.brandFont[4] }} {...props} />;
};

const StyledText = (props) => <p css={{ marginTop: 0 }} {...props} />;

export default ({ context, showCode, showDemo }) => {
	const { BRAND } = useBrand();

	const brandFontMap = {
		WBC: 'Chronicle Semibold',
		STG: 'Dragon Bold',
		BOM: 'Brown',
		BSA: 'Aller',
		WBG: 'Montserrat',
	};

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<p>{brandFontMap[BRAND]}</p>
			<Wrapper>
				<StyledText>
					ABCDEFGHIJKLMNOPQRSTUVWXYZ
					<br />
					abcdefghijklmnopqrstuvwxyz
					<br />0 1 2 3 4 5 6 7 8 9
				</StyledText>
			</Wrapper>
		</Playground>
	);
};
