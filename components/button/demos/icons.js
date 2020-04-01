/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import {
	NewWindowIcon,
	DropDownIcon,
	PrintIcon,
	RefreshIcon,
	SearchIcon,
	PlayIcon,
	PauseIcon,
	CloseIcon,
	AddCircleIcon,
} from '@westpac/icon';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<p>
				<Button iconAfter={NewWindowIcon}>New window</Button>{' '}
				<Button iconAfter={DropDownIcon}>Drop down</Button>{' '}
				<Button iconAfter={PrintIcon}>Print</Button>{' '}
				<Button iconAfter={RefreshIcon}>Refresh</Button>{' '}
				<Button iconAfter={SearchIcon}>Search</Button>
			</p>
			<p>
				<Button iconBefore={SearchIcon} /> <Button iconBefore={PlayIcon} />{' '}
				<Button iconBefore={PauseIcon} /> <Button iconBefore={CloseIcon} />{' '}
				<Button iconBefore={AddCircleIcon} />
			</p>
			<p>
				<Button iconAfter={RefreshIcon} block>
					Refresh list
				</Button>
			</p>
		</Playground>
	);
};
