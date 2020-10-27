/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import {
	AtmIcon,
	EftposIcon,
	PadlockIcon,
	BusinessPersonIcon,
	SecurityIcon,
	VerifiedIcon,
} from '@westpac/icon';

import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	const { COLORS } = useBrand();
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<AtmIcon
				color={COLORS.primary}
				overrides={{ Icon: { styles: (styles) => ({ ...styles, marginRight: '1.5rem' }) } }}
			/>
			<EftposIcon
				color={COLORS.hero}
				overrides={{ Icon: { styles: (styles) => ({ ...styles, marginRight: '1.5rem' }) } }}
			/>
			<PadlockIcon
				color={COLORS.border}
				overrides={{ Icon: { styles: (styles) => ({ ...styles, marginRight: '1.5rem' }) } }}
			/>
			<BusinessPersonIcon
				color={COLORS.muted}
				overrides={{ Icon: { styles: (styles) => ({ ...styles, marginRight: '1.5rem' }) } }}
			/>
			<SecurityIcon
				color={COLORS.info}
				overrides={{ Icon: { styles: (styles) => ({ ...styles, marginRight: '1.5rem' }) } }}
			/>
			<VerifiedIcon
				color={COLORS.text}
				overrides={{ Icon: { styles: (styles) => ({ ...styles, marginRight: '1.5rem' }) } }}
			/>
		</Playground>
	);
};

export default Demo;
