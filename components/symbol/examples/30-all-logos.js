/** @jsx jsx */

import { GEL, jsx, useBrand } from '@westpac/core';
import * as components from '@westpac/symbol';
import { LogoSmall } from '@westpac/symbol';
import { Cell, Grid, Name } from './_utils';

const allLogos = Object.keys(components).filter((s) => s.endsWith('Logo'));

const logos = allLogos.filter((s) => !s.includes('Multibrand'));
const multibrandLargeLogos = allLogos.filter((s) => s.includes('MultibrandLarge'));
const multibrandSmallLogos = allLogos.filter((s) => s.includes('MultibrandSmall'));

const alignments = [null, 'left', 'center', 'right'];

function Example({ brand }) {
	const { COLORS } = useBrand();

	return (
		<GEL brand={brand}>
			<h2>Logos</h2>
			<Grid>
				{logos.map((s) => {
					const Symbol = components[s];
					return (
						<Cell key={s}>
							<Symbol align="center" />
							<Name>
								<code>{`<${s}\u00A0/>`}</code>
								<div css={{ color: COLORS.muted }}>“{Symbol.defaultProps.assistiveText}”</div>
							</Name>
						</Cell>
					);
				})}
			</Grid>

			<hr />

			<h2>Multi-brand logos</h2>
			<h3>Large</h3>
			<Grid>
				{multibrandLargeLogos.map((component) =>
					alignments.map((align) => {
						const Symbol = components[component];
						return (
							<Cell key={align} css={{ justifyContent: 'flex-start' }}>
								<Symbol align={align} css={{ border: `1px dashed ${COLORS.border}` }} />
								<Name>
									<code>{`<${component} align="${align}"\u00A0/>`}</code>
									<div css={{ color: COLORS.muted }}>“{Symbol.defaultProps.assistiveText}”</div>
								</Name>
							</Cell>
						);
					})
				)}
			</Grid>

			<h3>Small</h3>
			<Grid>
				{multibrandSmallLogos.map((component) =>
					alignments.map((align) => {
						const Symbol = components[component];
						return (
							<Cell key={align} css={{ justifyContent: 'flex-start' }}>
								<Symbol align={align} css={{ border: `1px dashed ${COLORS.border}` }} />
								<Name>
									<code>{`<${component} align="${align}"\u00A0/>`}</code>
									<div css={{ color: COLORS.muted }}>“{Symbol.defaultProps.assistiveText}”</div>
								</Name>
							</Cell>
						);
					})
				)}
			</Grid>
		</GEL>
	);
}

export default Example;
