import React, { Fragment } from 'react'; // Needed for within Keystone
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { AccessibilityIcon } from '@westpac/icon';
import { Cell } from '@westpac/grid';

import { FieldContainer, FieldLabel, FieldInput } from '@arch-ui/fields';
import { inputStyles } from '@arch-ui/input';
import { Heading } from '@westpac/heading';

export const ScreenReaderText = {
	editor: ({ value, onChange }) => {
		const currentValue = {
			text: value.text,
			addTableContent: true,
			heading: 'Screen readers',
			...(value || {}),
		};

		const update = (changes) =>
			onChange({
				...currentValue,
				...changes,
			});

		return (
			<Fragment>
				<FieldContainer>
					<FieldLabel htmlFor={'a11y-text'} field={{ label: 'Screen reader text', config: {} }} />
					<FieldInput>
						<textarea
							css={inputStyles}
							type="text"
							id="a11y-text"
							value={currentValue.text}
							onChange={(e) => update({ text: e.target.value })}
						/>
					</FieldInput>
				</FieldContainer>
			</Fragment>
		);
	},
	component: ({ text, addTableContent = true }) => {
		const { SPACING, COLORS } = useBrand();
		const mq = useMediaQuery();
		return (
			<Fragment>
				<Cell width={[12, null, null, 10]}>
					<Heading tag="h2" size={[7, null, 6]} id="screen-readers" tabIndex="-1">
						Screen readers
					</Heading>
				</Cell>
				<Cell width={[12, null, null, 10]}>
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
							{text.split('\n').map((p, index) => (
								<p
									key={index}
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
			</Fragment>
		);
	},
};
