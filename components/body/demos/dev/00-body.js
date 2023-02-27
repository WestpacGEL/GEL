import { jsx, useBrand } from '@westpac/core';
import { Body } from '@westpac/body';
import { Playground } from '../../../../website/src/components/playground/macro';

const Hr = (props) => {
	const { COLORS } = useBrand();
	return (
		<hr
			css={{ border: 'none', borderTop: `1px solid ${COLORS.border}`, margin: '1.5rem 0' }}
			{...props}
		/>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Body>
				<h1>Heading 1</h1>
				<h2>Heading 2</h2>
				<h3>Heading 3</h3>
				<h4>Heading 4</h4>
				<h5>Heading 5</h5>
				<h6>Heading 6</h6>
				<p>
					<strong>Paragraph</strong>
				</p>
				<p>The baseline body text.</p>
				<Hr />
				<p>
					<strong>Link</strong>
				</p>
				<a href="#">Link a snippet of text</a>. The default text styling being underlined and
				primary colour.
				<Hr />
				<p>
					<strong>Small</strong>
				</p>
				<p>
					<small>De-emphasise</small> inline or blocks of text.
				</p>
				<Hr />
				<p>
					<strong>Strong</strong>
				</p>
				<p>
					<strong>Emphasise a snippet of text.</strong> The default text styling being a heavier
					font weight.
				</p>
				<Hr />
				<p>
					<strong>Emphasis</strong>
				</p>
				<p>
					<em>Emphasise a snippet of text.</em> The default text styling being italics.
				</p>
				<Hr />
				<p>
					<strong>Mark</strong>
				</p>
				<p>
					<mark>Highlight</mark> a portion of text.
				</p>
				<Hr />
				<p>
					<strong>Del/Ins</strong>
				</p>
				<p>
					Show changes by marking up what has been <del>deleted</del> and what has been{' '}
					<ins>inserted</ins>.
				</p>
			</Body>
		</Playground>
	);
};

export default Demo;
