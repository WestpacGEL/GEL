import { forwardRef } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Tab, Tabcordion } from '@westpac/tabcordion';
import { ExpandLessIcon, ExpandMoreIcon, ThumbUpIcon, ThumbDownIcon } from '@westpac/icon';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/tabcordion'] = {
		TabBtn: {
			styles: (styles, { selected }) => ({
				...styles,
				border: `1px solid black`,
				backgroundColor: selected ? 'black' : 'white',
				color: selected ? 'white' : 'black',
			}),
		},
		AccordionBtn: {
			styles: (styles, { look, hidden }) => {
				const styleMap = {
					soft: {
						':first-of-type': {
							borderTop: '1px solid black',
							borderTopLeftRadius: '0.1875rem',
							borderTopRightRadius: '0.1875rem',
						},
					},
					lego: {
						borderLeft: `0.375rem solid ${!hidden ? 'mediumblue' : 'black'}`,

						':first-of-type': {
							borderTop: `1px solid black`,
						},
					},
				};

				return {
					...styles,
					backgroundColor: 'white',
					borderLeft: '1px solid black',
					borderRight: '1px solid black',
					borderBottom: '1px solid black',
					...styleMap[look],
				};
			},
		},
		AccordionBtnIcon: {
			component: ({ state, ...rest }) => {
				const Icon = state.hidden ? ExpandMoreIcon : ExpandLessIcon;

				return <Icon color="black" size="small" assistiveText={null} {...rest} />;
			},
		},
		Panel: {
			styles: (styles, { look, mode }) => ({
				...styles,
				backgroundColor: 'black',
				borderTop: 0,
				borderBottom: 0,
				borderLeft: mode === 'accordion' && look === 'lego' && '0.375rem solid mediumblue',
				borderRight: 0,
				color: 'white',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<h3>Soft accordion</h3>
			<Tabcordion mode="accordion" look="soft" instanceId="example-default-accordion">
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

			<h3>Lego accordion</h3>
			<Tabcordion mode="accordion" look="lego" instanceId="example-lego-accordion">
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

			<h3>Default tabs</h3>
			<Tabcordion mode="tabs" instanceId="example-default-tabs">
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

			<h2>With overrides and component overrides</h2>
			<h3>Default accordion</h3>
			<Tabcordion mode="accordion" instanceId="example-default-component-overrides-accordion">
				<Tab
					text="Rabbit hole"
					overrides={{
						AccordionBtn: {
							styles: (styles) => ({
								...styles,
								borderLeft: '1px solid mediumblue',
								borderRight: '1px solid mediumblue',
								borderBottom: '1px solid mediumblue',
								color: 'mediumblue',

								':first-of-type': {
									borderTop: '1px solid mediumblue',
									borderTopLeftRadius: '0.1875rem',
									borderTopRightRadius: '0.1875rem',
								},
							}),
						},
						AccordionBtnIcon: {
							component: ({ state, ...rest }) => {
								const Icon = state.hidden ? ThumbDownIcon : ThumbUpIcon;
								return <Icon color="mediumblue" size="small" assistiveText={null} {...rest} />;
							},
						},
						Panel: {
							styles: (styles) => ({
								...styles,
								backgroundColor: 'mediumblue',
							}),
						},
					}}
				>
					‘It was much pleasanter at home,’ thought poor Alice, ‘when one wasn’t always growing
					larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
					gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this sort
					of life! I do wonder what can have happened to me! When I used to read fairy-tales, I
					fancied that kind of thing never happened, and now here I am in the middle of one! There
					ought to be a book written about me, that there ought! And when I grow up, I’ll write one.
				</Tab>
				<Tab
					text="Flamingo"
					overrides={{
						AccordionBtn: {
							styles: (styles) => ({
								...styles,
								borderLeft: '1px solid mediumblue',
								borderRight: '1px solid mediumblue',
								borderBottom: '1px solid mediumblue',
								color: 'mediumblue',

								':first-of-type': {
									borderTop: '1px solid mediumblue',
									borderTopLeftRadius: '0.1875rem',
									borderTopRightRadius: '0.1875rem',
								},
							}),
						},
						AccordionBtnIcon: {
							component: ({ state, ...rest }) => {
								const Icon = state.hidden ? ThumbDownIcon : ThumbUpIcon;
								return <Icon color="mediumblue" size="small" assistiveText={null} {...rest} />;
							},
						},
						Panel: {
							styles: (styles) => ({
								...styles,
								backgroundColor: 'mediumblue',
							}),
						},
					}}
				>
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
				<Tab
					text="Caterpillar"
					overrides={{
						AccordionBtn: {
							styles: (styles) => ({
								...styles,
								borderLeft: '1px solid mediumblue',
								borderRight: '1px solid mediumblue',
								borderBottom: '1px solid mediumblue',
								color: 'mediumblue',

								':first-of-type': {
									borderTop: '1px solid mediumblue',
									borderTopLeftRadius: '0.1875rem',
									borderTopRightRadius: '0.1875rem',
								},
							}),
						},
						AccordionBtnIcon: {
							component: ({ state, ...rest }) => {
								const Icon = state.hidden ? ThumbDownIcon : ThumbUpIcon;
								return <Icon color="mediumblue" size="small" assistiveText={null} {...rest} />;
							},
						},
						Panel: {
							styles: (styles) => ({
								...styles,
								backgroundColor: 'mediumblue',
							}),
						},
					}}
				>
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

			<h3>Tabs</h3>
			<Tabcordion
				mode="tabs"
				instanceId="example-default-component-overrides-tabs"
				overrides={{
					TabBtn: {
						styles: (styles, { selected }) => ({
							...styles,
							border: `1px solid darkred`,
							backgroundColor: selected ? 'darkred' : 'white',
							color: selected ? 'white' : 'darkred',
						}),
					},
				}}
			>
				<Tab
					text="Rabbit hole"
					overrides={{
						Panel: {
							styles: (styles) => ({
								...styles,
								backgroundColor: 'darkred',
								borderColor: 'darkred',
							}),
						},
					}}
				>
					‘It was much pleasanter at home,’ thought poor Alice, ‘when one wasn’t always growing
					larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
					gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this sort
					of life! I do wonder what can have happened to me! When I used to read fairy-tales, I
					fancied that kind of thing never happened, and now here I am in the middle of one! There
					ought to be a book written about me, that there ought! And when I grow up, I’ll write one.
				</Tab>
				<Tab
					text="Flamingo"
					overrides={{
						Panel: {
							styles: (styles) => ({
								...styles,
								backgroundColor: 'darkred',
								borderColor: 'darkred',
							}),
						},
					}}
				>
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
				<Tab
					text="Caterpillar"
					overrides={{
						Panel: {
							styles: (styles) => ({
								...styles,
								backgroundColor: 'darkred',
								borderColor: 'darkred',
							}),
						},
					}}
				>
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
