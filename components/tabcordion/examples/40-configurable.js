import { GEL, jsx } from '@westpac/core';
import { useState } from 'react';
import { Tab, Tabcordion } from '@westpac/tabcordion';
import { Row } from './_utils';

const modes = ['responsive', 'accordion', 'tabs'];
const looks = ['soft', 'lego'];

const Control = ({ children, ...props }) => (
	<label>
		<input {...props} />
		{children}
	</label>
);
const Radio = (p) => <Control type="radio" {...p} />;
const Checkbox = (p) => <Control type="checkbox" {...p} />;

function Example({ brand }) {
	const [look, setLook] = useState(looks[0]);
	const [mode, setMode] = useState(modes[0]);
	const [justify, setJustify] = useState(false);

	const changeJustify = () => setJustify(!justify);
	const changeLook = (v) => () => setLook(v);
	const changeMode = (v) => () => setMode(v);

	return (
		<GEL brand={brand}>
			<Row>
				Look:
				{looks.map((v) => (
					<Radio key={v} value={v} name="look" checked={v === look} onChange={changeLook(v)}>
						{v}
					</Radio>
				))}
			</Row>
			<Row>
				Mode:
				{modes.map((v) => (
					<Radio key={v} value={v} name="mode" checked={v === mode} onChange={changeMode(v)}>
						{v}
					</Radio>
				))}
			</Row>
			<Row>
				<Checkbox value={true} name="mode" checked={justify} onChange={changeJustify}>
					Justify
				</Checkbox>
			</Row>

			<Tabcordion look={look} justify={justify} mode={mode}>
				<Tab text="Rabbit hole">
					‘It was much pleasanter at home,’ thought poor Alice, ‘when one wasn’t always growing
					larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
					gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this sort
					of life! I do wonder what can have happened to me! When I used to read fairy-tales, I
					fancied that kind of thing never happened, and now here I am in the middle of one! There
					ought to be a book written about me, that there ought! And when I grow up, I’ll write one.
				</Tab>
				<Tab text="Flamingo">
					The chief difficulty Alice found at first was in managing her flamingo: she succeeded in
					getting its body tucked away, comfortably enough, under her arm, with its legs hanging
					down, but generally, just as she had got its neck nicely straightened out, and was going
					to give the hedgehog a blow with its head, it would twist itself round and look up in her
					face, with such a puzzled expression that she could not help bursting out laughing: and
					when she had got its head down, and was going to begin again, it was very provoking to
					find that the hedgehog had unrolled itself, and was in the act of crawling away: besides
					all this, there was generally a ridge or furrow in the way wherever she wanted to send the
					hedgehog to, and, as the doubled-up soldiers were always getting up and walking off to
					other parts of the ground, Alice soon came to the conclusion that it was a very difficult
					game indeed.
				</Tab>
				<Tab text="Caterpillar">
					The Caterpillar and Alice looked at each other for some time in silence: at last the
					Caterpillar took the hookah out of its mouth, and addressed her in a languid, sleepy
					voice.
					<br />
					‘Who are you?’ said the Caterpillar.
					<br />
					This was not an encouraging opening for a conversation. Alice replied, rather shyly, ‘I —
					I hardly know, sir, just at present — at least I know who I was when I got up this
					morning, but I think I must have been changed several times since then.’
					<br />
					‘What do you mean by that?’ said the Caterpillar sternly. ‘Explain yourself!’
					<br />
					‘I can’t explain myself, I’m afraid, sir’ said Alice, ’because I’m not myself, you see.’
					<br />
					‘I don’t see,’ said the Caterpillar.
					<br />
					‘I’m afraid I can’t put it more clearly,’ Alice replied very politely, ‘for I can’t
					understand it myself to begin with; and being so many different sizes in a day is very
					confusing.’
				</Tab>
			</Tabcordion>
		</GEL>
	);
}

export default Example;
