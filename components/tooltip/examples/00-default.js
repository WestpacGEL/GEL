/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Tooltip } from '@westpac/tooltip';
import { Button } from '@westpac/button';
import { InfoIcon } from '@westpac/icon';
import { Body } from '@westpac/body';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

// Tooltip tag as a component example
const TooltipTag = ({ children, ...props }) => {
	let num = 0;
	return (
		<abbr
			onClick={() => {
				console.log(`<Tooltip /> clicked ${++num} ${num !== 1 ? `times` : `time`}`);
			}}
			{...props}
		>
			<span>{children}</span>
		</abbr>
	);
};

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<Body>
				<h2>On text</h2>
				<h3>Tooltip with default tag</h3>
				<Tooltip text="This is a tooltip on a block-level element">
					<p>
						Tooltip on a block-level element... Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Enim adipisci laboriosam unde dolore, maxime quae amet praesentium minus sit!
						Cumque repudiandae laboriosam sit ipsum eaque cupiditate temporibus, necessitatibus
						consectetur debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
						itaque sunt hic enim earum explicabo.
					</p>
				</Tooltip>
				<h3>
					Tooltip with <code>&lt;abbr&gt;</code> tag
				</h3>
				<p>
					This is a{' '}
					<Tooltip tag="abbr" text="This is a tooltip on an abbr element">
						random
					</Tooltip>{' '}
					sentence.
				</p>
				<h3>Tooltip with a component tag</h3>
				<p>
					This is also a{' '}
					<Tooltip tag={TooltipTag} text="This is a tooltip with a component tag">
						random
					</Tooltip>{' '}
					sentence.
				</p>
				<h2>On icons</h2>
				<Tooltip text="Some text to explain this icon">
					<InfoIcon />
				</Tooltip>
				<h2>On Buttons</h2>
				<Tooltip text="This is another very long tooltip to see what happens with long tooltips">
					<Button appearance="hero">Tooltip as a button</Button>
				</Tooltip>
				<div css={{ height: '100vh' }} />
			</Body>
		</GEL>
	);
}

export default Example;
