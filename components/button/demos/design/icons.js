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
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<p>
				<Button look="hero" soft iconAfter={NewWindowIcon}>
					New window
				</Button>{' '}
				<Button look="primary" iconAfter={DropDownIcon}>
					Dropdown
				</Button>{' '}
				<Button look="hero" iconAfter={PrintIcon}>
					Print
				</Button>{' '}
				<Button look="primary" soft iconAfter={RefreshIcon}>
					Refresh
				</Button>{' '}
				<Button look="primary" iconAfter={SearchIcon}>
					Search
				</Button>
			</p>
			<p>
				<Button look="faint" iconBefore={SearchIcon} />{' '}
				<Button look="faint" iconBefore={PlayIcon} /> <Button look="faint" iconBefore={PauseIcon} />{' '}
				<Button look="faint" iconBefore={CloseIcon} />{' '}
				<Button look="faint" iconBefore={AddCircleIcon} />
			</p>
			<p>
				<Button look="primary" iconAfter={RefreshIcon} block>
					Refresh list
				</Button>
			</p>
		</Playground>
	);
};
