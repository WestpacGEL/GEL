/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { ButtonGroup, Button } from '@westpac/button-group';
import { InfoIcon } from '@westpac/icon';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>‘Screen reader only’ text mode</h2>
			<ButtonGroup name="example-buttongroup-srOnlyText">
				<Button iconAfter={InfoIcon} value="option-1" srOnlyText>
					Screen reader only
				</Button>
				<Button iconAfter={InfoIcon} value="option-2" srOnlyText>
					Screen reader only
				</Button>
				<Button iconAfter={InfoIcon} value="option-3" srOnlyText>
					Screen reader only
				</Button>
			</ButtonGroup>
		</GEL>
	);
}

export default Example;
