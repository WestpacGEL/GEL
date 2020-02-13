/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button, ButtonGroup, ButtonDropdown } from '@westpac/button';
import { HouseIcon } from '@westpac/icon';
import { Fragment } from 'react';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

const TextWrapper = ({ children, ...rest }) => (
	<Fragment>
		{children}
		<HouseIcon size="small" color="currentColor" css={{ marginLeft: '0.5em' }} />
	</Fragment>
);

function Example({ context }) {
	const overridesWithTokens = {};
	overridesWithTokens['@westpac/button'] = {
		Button: {
			styles: styles => ({
				...styles,
				outline: '1px dotted blue',
			}),
		},
		ButtonGroup: {
			styles: styles => ({
				...styles,
				outline: `4px solid green`,
			}),
		},
		TextWrapper: {
			component: TextWrapper,
		},
		Panel: {
			styles: styles => ({
				...styles,
				backgroundColor: 'palevioletred',
				color: 'white',
			}),
		},
	};

	return (
		<Playground context={context} brand={overridesWithTokens}>
			<Intopia ignore />
			<h2>With overrides applied</h2>
			<Button>Default standard</Button> <Button look="primary">Primary standard</Button>{' '}
			<Button look="hero">Hero standard</Button> <Button look="faint">Faint standard</Button>{' '}
			<Button look="link">Link</Button>
			<hr />
			<ButtonGroup block>
				<Button>Left</Button>
				<Button>Middle</Button>
				<Button>Right</Button>
			</ButtonGroup>
			<hr />
			<ButtonGroup
				block
				data={[
					{ children: 'Left', value: 'left' },
					{ children: 'Middle', value: 'middle' },
					{ children: 'Right', value: 'right' },
				]}
			/>
			<hr />
			<ButtonDropdown look="primary" text="Primary Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>
			<h2>With overrides and component overrides</h2>
			<ButtonGroup
				overrides={{
					ButtonGroup: {
						styles: styles => ({
							...styles,
							outline: `5px solid rebeccapurple`,
						}),
					},
				}}
			>
				<Button>Left</Button>
				<Button>Middle</Button>
				<Button>Right</Button>
			</ButtonGroup>
			<hr />
			<ButtonGroup
				overrides={{
					ButtonGroup: {
						styles: styles => ({
							...styles,
							outline: `5px solid hotpink`,
						}),
					},
				}}
				data={[
					{ children: 'Left', value: 'left' },
					{ children: 'Middle', value: 'middle' },
					{ children: 'Right', value: 'right' },
				]}
			/>
			<hr />
			<ButtonDropdown
				look="primary"
				text="Primary Dropdown"
				overrides={{
					Panel: {
						styles: styles => ({
							...styles,
							backgroundColor: 'darkred',
						}),
					},
				}}
			>
				<p>Example dropdown content...</p>
			</ButtonDropdown>
		</Playground>
	);
}

export default Example;
