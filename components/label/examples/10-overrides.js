/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Label } from '@westpac/label';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

const Wrapper = ({ look, value, children, ...props }) => {
	let Tag = 'span';

	if (props.href) {
		Tag = 'a';
	}
	if (props.onClick) {
		Tag = 'button';
	}

	return (
		<Tag {...(Tag === 'button' && { type: 'button' })} {...props}>
			{children}
			{(props.href || props.onClick) && (
				<span
					css={{
						marginLeft: '0.5em',
						fontWeight: '900',
						textDecoration: 'underline',
						color: 'inherit',
					}}
				>
					Edit
				</span>
			)}
		</Tag>
	);
};

function Example({ context }) {
	const overridesWithTokens = {};
	overridesWithTokens['@westpac/label'] = {
		Label: {
			styles: (styles, { look }) => ({
				...styles,
				backgroundColor: look === 'neutral' ? 'rebeccapurple' : styles.backgroundColor,
				outline: '3px solid blue',
			}),
			component: Wrapper,
		},
	};

	return (
		<Playground context={context} brand={overridesWithTokens}>
			<Intopia ignore />
			<h2>With overrides applied</h2>
			<h3>
				Label with a <code>&lt;span&gt;</code> tag
			</h3>
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

			<hr />

			<h2>With overrides and component overrides</h2>
			<Label
				value="Default overridden"
				overrides={{
					Label: {
						styles: styles => ({
							...styles,
							outline: '6px dotted green',
						}),
					},
				}}
			/>
		</Playground>
	);
}

export default Example;
