/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { component, fields, NotEditable } from '@keystone-6/fields-document/component-blocks';
import { imageField } from './image-field';
import { GEL, useBrand, useMediaQuery } from '@westpac/core';
import brand from '@westpac/wbc';
import { Fragment, ImgHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { Cell } from '@westpac/grid';
import { Body } from '../../../website/src/components/body';

function InnerDoAndAvoid({
	doImage,
	doAlt,
	doText,
	dontImage,
	dontAlt,
	dontText,
}: {
	doImage: string;
	doAlt: string;
	doText: ReactNode;
	dontImage: string;
	dontAlt: string;
	dontText: ReactNode;
}) {
	const { COLORS, TYPE } = useBrand();
	const mq = useMediaQuery();

	return (
		<Fragment>
			<Cell
				width={[12, null, 6]}
				css={mq({ marginTop: ['24px', null, null, null, '42px'], height: 'auto' })}
			>
				<Figure>
					<NotEditable>
						<Image src={doImage} alt={doAlt} />{' '}
					</NotEditable>

					<Figcaption>
						<span css={{ color: COLORS.success, ...TYPE.bodyFont[700] }}>
							<NotEditable>Do</NotEditable>
						</span>{' '}
						- {doText}
					</Figcaption>
				</Figure>
			</Cell>
			<Cell
				width={[12, null, 6]}
				css={mq({
					marginTop: ['24px', null, null, null, '42px'],
					marginBottom: ['24px', null, null, null, '42px'],
					height: 'auto',
				})}
			>
				<Figure>
					<NotEditable>
						<Image src={dontImage} alt={dontAlt} />
					</NotEditable>
					<Figcaption>
						<span css={{ color: COLORS.danger, ...TYPE.bodyFont[700] }}>
							<NotEditable>Avoid</NotEditable>
						</span>
						- {dontText}
					</Figcaption>
				</Figure>
			</Cell>
		</Fragment>
	);
}

export const doAndAvoid = component({
	preview: (props) => {
		return (
			<GEL brand={brand}>
				<InnerDoAndAvoid
					doAlt={props.fields.doAlt.value}
					doImage={typeof props.fields.doImage.value === 'string' ? props.fields.doImage.value : ''}
					doText={props.fields.doText.element}
					dontAlt={props.fields.dontAlt.value}
					dontImage={typeof props.fields.dontImage.value === 'string' ? props.fields.dontImage.value : ''}
					dontText={props.fields.dontText.element}
				/>
			</GEL>
		);
	},
	label: 'Do and Avoid',
	schema: {
		doText: fields.child({ kind: 'inline', placeholder: 'Do Text' }),
		dontText: fields.child({ kind: 'inline', placeholder: 'Dont Text' }),
		doAlt: fields.text({ label: 'Do Alt', defaultValue: '' }),
		dontAlt: fields.text({ label: 'Dont Alt', defaultValue: '' }),
		doImage: imageField({ label: 'Do image' }),
		dontImage: imageField({ label: 'Dont image' }),
	},
});

const Figure = (props: HTMLAttributes<HTMLElement>) => (
	<figure
		css={{
			margin: 0,
			flexBasis: '50%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'start',
			justifyContent: 'flex-start',
		}}
		{...props}
	/>
);

const Figcaption = (props: any) => {
	const { SPACING, PACKS, COLORS } = useBrand();
	return (
		<Body
			tag="figcaption"
			css={{
				marginTop: SPACING(2),
			}}
			overrides={{
				Body: {
					styles: (styles: any) => ({
						...styles,
						...PACKS.typeScale.bodyFont[10],
						color: COLORS.muted,
					}),
				},
			}}
			{...props}
		/>
	);
};

const Image = (props: ImgHTMLAttributes<HTMLImageElement>) => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();
	return (
		<img
			css={mq({
				width: '100%',
				height: 'auto',
				marginBottom: SPACING(3),
			})}
			{...props}
		/>
	);
};
