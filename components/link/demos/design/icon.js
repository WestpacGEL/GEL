/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Link } from '@westpac/link';
import { PdfFileIcon, ArrowRightIcon } from '@westpac/icon';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title, Hr } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Icon Before</Title>
			<Link href="#" type="standalone" iconBefore={PdfFileIcon}>
				Look, I’m a standalone link
			</Link>
			<Hr />
			<Title>Icon After</Title>
			<Link href="#" type="standalone" iconAfter={ArrowRightIcon}>
				Look, I’m a standalone link
			</Link>
		</Playground>
	);
};

export default Demo;
