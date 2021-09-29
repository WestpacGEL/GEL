/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Collapsible } from '@westpac/collapsible';
import { Body } from '@westpac/body';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title, Hr } from '../../../../helpers/demos';

const ExampleContent = () => (
	<Body>
		<p>
			It was all very well to say ‘Drink me,’ but the wise little Alice was not going to do that in
			a hurry. ‘No, I’ll look first,’ she said, ‘and see whether it’s marked “poison” or not’; for
			she had read several nice little histories about children who had got burnt, and eaten up by
			wild beasts and other unpleasant things, all because they would not remember the simple rules
			their friends had taught them: such as, that a red-hot poker will burn you if you hold it too
			long; and that if you cut your finger very deeply with a knife, it usually bleeds; and she had
			never forgotten that, if you drink much from a bottle marked ‘poison,’ it is almost certain to
			disagree with you, sooner or later.
		</p>
	</Body>
);

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Small</Title>
			<Collapsible text="Drink me" size="small">
				<ExampleContent />
			</Collapsible>

			<Hr />

			<Title>Medium (default)</Title>
			<Collapsible text="Drink me" size="medium">
				<ExampleContent />
			</Collapsible>

			<Hr />

			<Title>Large</Title>
			<Collapsible text="Drink me" size="large">
				<ExampleContent />
			</Collapsible>

			<Hr />

			<Title>XLarge</Title>
			<Collapsible text="Drink me" size="xlarge">
				<ExampleContent />
			</Collapsible>
		</Playground>
	);
};

export default Demo;
