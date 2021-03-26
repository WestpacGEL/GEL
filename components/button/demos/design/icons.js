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
	InfoIcon,
	ArrowRightIcon,
} from '@westpac/icon';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

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
				<Title>Icon positioning</Title>
				<Button look="primary" iconAfter={InfoIcon}>
					Icon right
				</Button>{' '}
				<Button look="primary" iconBefore={InfoIcon}>
					Icon left
				</Button>
			</p>
			<p>
				<Title>Block-level buttons with icons</Title>
				<Button look="primary" block justify iconAfter={ArrowRightIcon}>
					Next step
				</Button>
				<br />
				<Button look="primary" iconAfter={RefreshIcon} block>
					Refresh list
				</Button>
			</p>
		</Playground>
	);
};
