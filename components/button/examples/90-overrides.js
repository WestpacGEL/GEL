import { GEL, jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { HouseIcon } from '@westpac/icon';
import { Fragment } from 'react';

const ContentOverride = ({ children, ...rest }) => (
	<Fragment>
		{children}
		<HouseIcon size="small" color="currentColor" css={{ marginLeft: '0.5em' }} />
	</Fragment>
);

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/button'] = {
		Button: {
			styles: (styles) => ({
				...styles,
				outline: '1px dotted blue',
			}),
		},
		Content: {
			component: ContentOverride,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<Button>Default standard</Button> <Button look="primary">Primary standard</Button>{' '}
			<Button look="hero">Hero standard</Button> <Button look="faint">Faint standard</Button>{' '}
			<Button look="link">Link</Button>
			<h2>With overrides and component overrides</h2>
			<Button
				block
				overrides={{
					Button: {
						styles: (styles) => ({
							...styles,
							outline: '2px dotted black',
						}),
					},
				}}
			>
				Default standard
			</Button>
		</GEL>
	);
}

export default Example;
