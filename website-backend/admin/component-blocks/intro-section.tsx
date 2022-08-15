/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { Fragment, ReactNode } from 'react';
import { component, fields, NotEditable } from '@keystone-6/fields-document/component-blocks';
import { useBrand, GEL, useMediaQuery } from '@westpac/core';
import { Cell, Grid, Container } from '@westpac/grid';
import brand from '@westpac/wbc';
import { Body } from '../../../website/src/components/body';
// @ts-ignore
import { Section } from '../../../website/src/components/section';

export const Component = ({
	description,
	showTableOfContents,
	showPackageInfo,
}: {
	description: ReactNode;
	showTableOfContents: boolean;
	showPackageInfo: boolean;
}) => {
	const { SPACING } = useBrand();
	const mq = useMediaQuery();
	return (
		<Fragment>
			<Section paddingTop="large">
				<Container>
					<Grid gap={SPACING(4)}>
						<Cell width={[12, null, 7]}>
							<Body>
								<p
									css={mq({
										margin: 0,
										fontSize: ['1.125rem', null, '1.5rem'],
										lineHeight: 1.5,
										fontWeight: 300,
									})}
								>
									{description}
								</p>
								)
								{showPackageInfo && (
									<NotEditable>
										<span>Package info preview not available</span>
									</NotEditable>
								)}
							</Body>
						</Cell>
						{showTableOfContents && (
							<NotEditable>
								<Cell width={[12, null, 4]} left={[null, null, 9]}>
									Table of Contents preview not available
								</Cell>
							</NotEditable>
						)}
					</Grid>
				</Container>
			</Section>
		</Fragment>
	);
};

export const introSection = component({
	preview: ({ fields: { description, showPackageInfo, showTableOfContents } }) => (
		<GEL brand={brand}>
			<Component
				description={description.element}
				showPackageInfo={showPackageInfo.value}
				showTableOfContents={showTableOfContents.value}
			/>
		</GEL>
	),
	label: 'Intro Section',
	schema: {
		description: fields.child({
			kind: 'inline',
			placeholder: 'Description...',
			formatting: 'inherit',
		}),
		showTableOfContents: fields.checkbox({ label: 'Show Table of Contents' }),
		showPackageInfo: fields.checkbox({ label: 'Show Package info' }),
	},
});
