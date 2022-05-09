/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Link } from '@westpac/link';
import { Body } from '@westpac/body';
import { Playground } from '../../../../website/src/components/playground/macro';
import { PdfFileIcon, ArrowRightIcon } from '@westpac/icon';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Body>
				<Link href="#" iconBefore={PdfFileIcon}>
					Look, I’m a standalone link
				</Link>
				<br />
				<Link href="#" iconAfter={ArrowRightIcon}>
					Look, I’m a standalone link
				</Link>
			</Body>
		</Playground>
	);
};

export default Demo;
