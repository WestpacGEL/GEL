import { jsx } from '@westpac/core';
import { Well } from '@westpac/well';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Well>
				It was a bright morning in the early part of summer; the river had resumed its wonted banks
				and its accustomed pace, and a hot sun seemed to be pulling everything green and bushy and
				spiky up out of the earth towards him, as if by strings. The Mole and the Water Rat had been
				up since dawn, very busy on matters connected with boats and the opening of the boating
				season; painting and varnishing, mending paddles, repairing cushions, hunting for missing
				boat-hooks, and so on; and were finishing breakfast in their little parlour and eagerly
				discussing their plans for the day, when a heavy knock sounded at the door.
			</Well>
			<Well
				overrides={{
					Well: {
						styles: (styles) => ({
							...styles,
							backgroundColor: '#fff',
						}),
					},
				}}
			>
				It was a bright morning in the early part of summer; the river had resumed its wonted banks
				and its accustomed pace, and a hot sun seemed to be pulling everything green and bushy and
				spiky up out of the earth towards him, as if by strings. The Mole and the Water Rat had been
				up since dawn, very busy on matters connected with boats and the opening of the boating
				season; painting and varnishing, mending paddles, repairing cushions, hunting for missing
				boat-hooks, and so on; and were finishing breakfast in their little parlour and eagerly
				discussing their plans for the day, when a heavy knock sounded at the door.
			</Well>
		</Playground>
	);
};

export default Demo;
