/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import {
	HouseIcon,
	AlertIcon,
	ChatIcon,
	AccessibilityIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	StarIcon,
} from '@westpac/icon';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Icon after</h2>
			<Button size="small" iconAfter={HouseIcon}>
				Small
			</Button>{' '}
			<Button size="medium" iconAfter={AlertIcon}>
				Medium
			</Button>{' '}
			<Button size="large" iconAfter={ChatIcon}>
				Large
			</Button>{' '}
			<Button size="xlarge" iconAfter={AccessibilityIcon}>
				Extra large
			</Button>
			<br />
			<br />
			<Button size="xlarge" iconAfter={ArrowRightIcon} block>
				Extra large block
			</Button>
			<br />
			<Button size="small" iconAfter={ArrowRightIcon} block justify>
				Small block justify
			</Button>
			<br />
			<Button size="medium" iconAfter={ArrowRightIcon} block justify>
				Medium block justify
			</Button>
			<br />
			<Button size="large" iconAfter={ArrowRightIcon} block justify>
				Large block justify
			</Button>
			<br />
			<Button size="xlarge" iconAfter={ArrowRightIcon} block justify>
				Extra large block justify
			</Button>
			<hr />
			<h2>Icon before</h2>
			<Button size="small" iconBefore={HouseIcon}>
				Small
			</Button>{' '}
			<Button size="medium" iconBefore={AlertIcon}>
				Medium
			</Button>{' '}
			<Button size="large" iconBefore={ChatIcon}>
				Large
			</Button>{' '}
			<Button size="xlarge" iconBefore={AccessibilityIcon}>
				Extra large
			</Button>
			<br />
			<br />
			<Button size="xlarge" iconBefore={ArrowLeftIcon} block>
				Extra large block
			</Button>
			<br />
			<Button size="small" iconBefore={ArrowLeftIcon} block justify>
				Small block justify
			</Button>
			<br />
			<Button size="medium" iconBefore={ArrowLeftIcon} block justify>
				Medium block justify
			</Button>
			<br />
			<Button size="large" iconBefore={ArrowLeftIcon} block justify>
				Large block justify
			</Button>
			<br />
			<Button size="xlarge" iconBefore={ArrowLeftIcon} block justify>
				Extra large block justify
			</Button>
			<hr />
			<h2>Icon only (no text)</h2>
			<Button size="small" iconBefore={StarIcon} /> <Button size="medium" iconBefore={StarIcon} />{' '}
			<Button size="large" iconBefore={StarIcon} /> <Button size="xlarge" iconBefore={StarIcon} />
			<br />
			<br />
			<Button size="xlarge" iconBefore={StarIcon} block />
		</GEL>
	);
}

export default Example;
