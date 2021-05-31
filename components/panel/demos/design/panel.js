/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Panel, Body, Footer } from '@westpac/panel';
import { Playground } from '../../../../website/src/components/playground/macro';

const demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Panel heading="The Wild Wood">
				<Body>
					They found themselves standing on the very edge of the Wild Wood. Rocks and brambles and
					tree-roots behind them, confusedly heaped and tangled; in front, a great space of quiet
					fields, hemmed by lines of hedges black on the snow, and, far ahead, a glint of the
					familiar old river, while the wintry sun hung red and low on the horizon. The Otter, as
					knowing all the paths, took charge of the party, and they trailed out on a bee-line for a
					distant stile. Pausing there a moment and looking back, they saw the whole mass of the
					Wild Wood, dense, menacing, compact, grimly set in vast white surroundings; simultaneously
					they turned and made swiftly for home, for firelight and the familiar things it played on,
					for the voice, sounding cheerily outside their window, of the river that they knew and
					trusted in all its moods, that never made them afraid with any amazement.
				</Body>
				<Footer>Panel footer</Footer>
			</Panel>
		</Playground>
	);
};

export default Demo;
