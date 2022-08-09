/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@keystone-ui/core';
import { component, fields } from '@keystone-6/fields-document/component-blocks';
import { GEL, useMediaQuery, useBrand } from '@westpac/core';
import brand from '@westpac/wbc';
import { Cell } from '@westpac/grid';
import { ReactNode } from 'react';

function LeadText({ content }: { content: ReactNode }) {
	const mq = useMediaQuery();
	const { TYPE, COLORS } = useBrand();

	return (
		<Cell width={[12, 10]} left={[1, 2]}>
			<p
				css={mq({
					marginTop: 0,
					marginBottom: ['2.635rem', '3.375rem'],
					fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
					fontSize: ['1.125rem', '1.5rem'],
					lineHeight: 1.6,
					color: COLORS.text,
				})}
			>
				{content}
			</p>
		</Cell>
	);
}

export const leadText = component({
	component: (props) => {
		return (
			<GEL brand={brand}>
				<LeadText content={props.content} />
			</GEL>
		);
	},
	props: {
		content: fields.child({ kind: 'inline', placeholder: '', formatting: 'inherit' }),
	},
	label: 'LeadText',
});
