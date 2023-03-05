import { GEL, jsx } from '@westpac/core';
import { Label } from '@westpac/label';

const LabelOverride = ({ look, value, state: _, children, ...rest }) => {
	return (
		<span {...rest}>
			{children}
			<button
				type="button"
				onClick={(e) => console.log('Edit button clicked')}
				css={{
					marginLeft: '0.5em',
					fontWeight: '900',
					textDecoration: 'underline',
					color: 'inherit',
					alignItems: 'center',
					appearance: 'none',
					cursor: 'pointer',
					border: 0,
					background: 'none',
					lineHeight: 1.5,
					textAlign: 'center',
					touchAction: 'manipulation',
					userSelect: 'none',
					verticalAlign: 'middle',
					whiteSpace: 'nowrap',
					padding: 0,
				}}
			>
				Edit
			</button>
		</span>
	);
};

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/label'] = {
		Label: {
			styles: (styles, { look }) => ({
				...styles,
				backgroundColor: look === 'neutral' ? 'rebeccapurple' : styles.backgroundColor,
				outline: '3px solid blue',
			}),
			component: LabelOverride,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<h3>Default</h3>
			<p>
				<Label value="Default" />
			</p>
			<h3>Look</h3>
			<p>
				<Label look="primary" value="Primary" /> <Label look="hero" value="Hero" />{' '}
				<Label look="neutral" value="Neutral" /> <Label look="faint" value="Faint" />
			</p>
			<p>
				<Label look="success" value="Success" /> <Label look="info" value="Info" />{' '}
				<Label look="warning" value="Warning" /> <Label look="danger" value="Danger" />
			</p>

			<hr />

			<h2>With overrides and component overrides</h2>
			<Label
				value="Default overridden"
				overrides={{
					Label: {
						styles: (styles) => ({
							...styles,
							outline: '6px dotted green',
						}),
					},
				}}
			/>
		</GEL>
	);
}

export default Example;
