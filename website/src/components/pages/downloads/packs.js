import { jsx, useBrand } from '@westpac/core';

export const Packs = () => {
	const TOKENS = useBrand();
	return Object.entries(TOKENS.PACKS.typeScale.bodyFont).map((pack, i) => {
		return <Heading pack={pack} key={i} />;
	});
};

const Heading = ({ pack: [name, styles] }) => (
	<div>
		<span
			css={{
				color: '#7c7c7c',
				textTransform: 'uppercase',
				fontSize: 12,
				letterSpacing: 2,
			}}
		>
			Heading {name}
		</span>
		<p css={[styles, { marginTop: 0 }]}>The quick brown fox jumps over the lazy dog</p>
	</div>
);
