import { GEL } from '@westpac/core';
import { FlexiCell } from '@westpac/flexi-cell';
import { AccessibilityIcon } from '@westpac/icon';
import { Heading } from '@westpac/heading';

function Example({ brand }: { brand: object | ((...args: unknown[]) => unknown) }) {
	return (
		<GEL brand={brand}>
			<FlexiCell
				withBorder // add the border and radius
				before={
					<div>
						<AccessibilityIcon />
					</div>
				}
				after={<AccessibilityIcon />}
				truncateText
			>
				<Heading size={3}>Title</Heading>
			</FlexiCell>
		</GEL>
	);
}

export default Example;
