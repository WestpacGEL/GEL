/** @jsx jsx */
import React, { useState, useEffect, Fragment } from 'react'; // Needed for within Keystone
import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { inputStyles } from '@arch-ui/input';
import { Heading } from '@westpac/heading';
import { AccessibilityIcon } from '@westpac/icon';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Grid, Cell, Container } from '@westpac/grid';
import { blocksGridStyle, blocksContainerStyle } from '../src/components/_utils';

export const ScreenReaderText = {
	editor: ({ value, onChange }) => {
		const [text, setText] = useState(value.text);

		useEffect(() => {
			onChange({
				text,
			});
		}, [text]);

		return (
			<Fragment>
				<FieldContainer>
					<FieldLabel htmlFor={'a11y-text'} field={{ label: 'Screen reader text', config: {} }} />
					<FieldInput>
						<textarea
							css={inputStyles}
							type="text"
							id="a11y-text"
							value={text}
							onChange={async e => {
								setText(e.target.value);
							}}
						/>
					</FieldInput>
				</FieldContainer>
			</Fragment>
		);
	},
	component: ({ text }) => {
		const { SPACING, COLORS } = useBrand();
		const mq = useMediaQuery();
		return (
			<Container css={blocksContainerStyle}>
				<Grid
					css={mq({
						...blocksGridStyle,
						marginTop: [SPACING(6), SPACING(6), SPACING(10)],
					})}
					columns={12}
				>
					<Cell width={[12, 12, 12, 10, 10]} left={[1, 1, 1, 2, 2]}>
						<Heading tag="h2" size={5}>
							Screen readers
						</Heading>
					</Cell>
				</Grid>
				<Grid columns={12} css={blocksGridStyle}>
					<Cell width={[12, 12, 12, 10, 10]} left={[1, 1, 1, 2, 2]}>
						<div
							css={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<p
								css={{
									flexBasis: '50%',
									margin: `${SPACING(4)} 0`,
								}}
							>
								How the example is described by assistive technology. As read with macOS High Sierra
								VoiceOver.
							</p>
							<blockquote
								css={{
									flexGrow: 0,
									margin: 0,
									backgroundColor: 'white',
									fontSize: '1.5rem',
									lineHeight: 1.5,
									color: COLORS.info,
									position: 'relative',
									display: 'inline-block',
									'@media (max-width: 800px)': {
										padding: '0px',
									},
								}}
							>
								<div
									css={{
										display: 'flex',
										justifyContent: 'flex-end',
										width: '100%',
										paddingTop: SPACING(2),
									}}
								>
									<AccessibilityIcon color="#b6d6ed" css={{ paddingRight: SPACING(2) }} />
								</div>
								{text.split('\n').map(p => (
									<p
										css={{
											margin: `0 ${SPACING(6)} ${SPACING(6)} ${SPACING(6)}`,
										}}
									>
										" {p} "
									</p>
								))}
							</blockquote>
						</div>
					</Cell>
				</Grid>
			</Container>
		);
	},
};
