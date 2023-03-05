import { jsx } from '@westpac/core';
import { Tab, Tabcordion } from '@westpac/tabcordion';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Tabcordion mode="accordion">
				<Tab text="Mole">
					The Mole had been working very hard all the morning, spring-cleaning his little home.
					First with brooms, then with dusters; then on ladders and steps and chairs, with a brush
					and a pail of whitewash; till he had dust in his throat and eyes, and splashes of
					whitewash all over his black fur, and an aching back and weary arms. Spring was moving in
					the air above and in the earth below and around him, penetrating even his dark and lowly
					little house with its spirit of divine discontent and longing. It was small wonder, then,
					that he suddenly flung down his brush on the floor, said ‘Bother!’ and ‘O blow!’ and also
					‘Hang spring-cleaning!’ and bolted out of the house without even waiting to put on his
					coat.
				</Tab>
				<Tab text="Rat">
					The Rat said nothing, but stooped and unfastened a rope and hauled on it; then lightly
					stepped into a little boat which the Mole had not observed. It was painted blue outside
					and white within, and was just the size for two animals; and the Mole’s whole heart went
					out to it at once, even though he did not yet fully understand its uses. The Rat sculled
					smartly across and made fast. Then he held up his forepaw as the Mole stepped gingerly
					down. ‘Lean on that!’ he said. ‘Now then, step lively!’ and the Mole to his surprise and
					rapture found himself actually seated in the stern of a real boat.
				</Tab>
				<Tab text="Toad">
					‘Toad’s out, for one,’ replied the Otter. ‘In his brand-new wager-boat; new togs, new
					everything!’ The two animals looked at each other and laughed. ‘Once, it was nothing but
					sailing,’ said the Rat, ‘Then he tired of that and took to punting. Nothing would please
					him but to punt all day and every day, and a nice mess he made of it. Last year it was
					house-boating, and we all had to go and stay with him in his house-boat, and pretend we
					liked it. He was going to spend the rest of his life in a house-boat. It’s all the same,
					whatever he takes up; he gets tired of it, and starts on something fresh.’
				</Tab>
				<Tab text="Badger">
					The Badger, who wore a long dressing-gown, and whose slippers were indeed very down at
					heel, carried a flat candlestick in his paw and had probably been on his way to bed when
					their summons sounded. He looked kindly down on them and patted both their heads. ‘This is
					not the sort of night for small animals to be out,’ he said paternally. ‘I’m afraid you’ve
					been up to some of your pranks again, Ratty. But come along; come into the kitchen.
					There’s a first-rate fire there, and supper and everything.’
				</Tab>
			</Tabcordion>
		</Playground>
	);
};

export default Demo;
