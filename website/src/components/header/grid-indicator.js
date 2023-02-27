import React from 'react';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import { VisuallyHidden } from '@westpac/a11y';
import { usePageContext } from '../providers/pageContext';

export const GridIndicator = (props) => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();
	const { showGrid, setShowGrid } = usePageContext();

	return (
		<div
			css={{
				position: 'fixed',
				display: 'flex',
				alignItems: 'center',
				top: SPACING(2),
				right: SPACING(2),
				color: '#fff',
				fontWeight: 'bold',
			}}
			{...props}
		>
			<VisuallyHidden>Breakpoint:</VisuallyHidden>
			<span css={mq({ display: ['none', null, 'inline-block', 'none'] })}>SM</span>
			<span css={mq({ display: ['none', null, null, 'inline-block', 'none'] })}>MD</span>
			<span css={mq({ display: ['none', null, null, null, 'inline-block'] })}>LG</span>
			<Button
				look="unstyled"
				size="large"
				onClick={() => setShowGrid(!showGrid)}
				aria-hidden="true"
				css={mq({
					display: ['none', null, 'inline-block'],
					padding: SPACING(1),
					backgroundColor: 'transparent',
				})}
			>
				<div css={{ display: 'flex', justifyContent: 'center', height: 24, width: 24 }}>
					{[...new Array(4)].map((_, index) => (
						<div
							key={index}
							css={{
								height: '100%',
								width: 4,
								backgroundColor: 'rgba(255, 255, 255, 0.3)',

								'& + &': {
									marginLeft: 2,
								},
							}}
						/>
					))}
				</div>
			</Button>
		</div>
	);
};
