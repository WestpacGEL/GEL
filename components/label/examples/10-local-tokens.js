/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Label } from '@westpac/label';

const Wrapper = ({ children, look }) => (
	<span>
		{children}
		<span
			href="#"
			css={{
				color: look === 'faint' ? '#000' : '#fff',
				marginLeft: '0.5em',
				fontWeight: '900',
			}}
		>
			Edit
		</span>
	</span>
);

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/label'] = {
		neutral: {
			css: {
				backgroundColor: 'rebeccapurple',
				outline: '2px dotted red',
			},
		},
		Wrapper,
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<p>
				<Label value="Default" />
			</p>
			<p>
				<Label look="primary" value="Primary" /> <Label look="hero" value="Hero" />{' '}
				<Label look="neutral" value="Neutral" /> <Label look="faint" value="Faint" />
			</p>
			<p>
				<Label look="success" value="Success" /> <Label look="info" value="Info" />{' '}
				<Label look="warning" value="Warning" /> <Label look="danger" value="Danger" />
			</p>

			<hr />

			<h3>
				Label as <code>&lt;a&gt;</code> tag
			</h3>
			<p>
				<Label href="#0" value="Default" />
			</p>
			<p>
				<Label href="#0" look="primary" value="Primary" />{' '}
				<Label href="#0" look="hero" value="Hero" />{' '}
				<Label href="#0" look="neutral" value="Neutral" />{' '}
				<Label href="#0" look="faint" value="Faint" />
			</p>
			<p>
				<Label href="#0" look="success" value="Success" />{' '}
				<Label href="#0" look="info" value="Info" />{' '}
				<Label href="#0" look="warning" value="Warning" />{' '}
				<Label href="#0" look="danger" value="Danger" />
			</p>

			<hr />

			<h3>
				Label as <code>&lt;button&gt;</code> tag
			</h3>
			<p>
				<Label onClick={() => console.log('Label clicked!')} value="Default" />
			</p>
			<p>
				<Label onClick={() => console.log('Label clicked!')} look="primary" value="Primary" />{' '}
				<Label onClick={() => console.log('Label clicked!')} look="hero" value="Hero" />{' '}
				<Label onClick={() => console.log('Label clicked!')} look="neutral" value="Neutral" />{' '}
				<Label onClick={() => console.log('Label clicked!')} look="faint" value="Faint" />
			</p>
			<p>
				<Label onClick={() => console.log('Label clicked!')} look="success" value="Success" />{' '}
				<Label onClick={() => console.log('Label clicked!')} look="info" value="Info" />{' '}
				<Label onClick={() => console.log('Label clicked!')} look="warning" value="Warning" />{' '}
				<Label onClick={() => console.log('Label clicked!')} look="danger" value="Danger" />
			</p>
		</GEL>
	);
}

export default Example;
