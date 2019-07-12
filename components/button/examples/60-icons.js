import React from 'react';

import { Button } from '../src';

import {
	HouseIcon,
	AlertIcon,
	ChatIcon,
	AccessibilityIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	StarIcon,
} from '../../icon/src'; //until icon package is published

export default () => (
	<>
		<h3>Icon on the right (default)</h3>
		<p>
			<Button appearance="primary" size="small" icon={HouseIcon}>
				Small
			</Button>{' '}
			<Button appearance="primary" size="medium" icon={AlertIcon}>
				Medium
			</Button>{' '}
			<Button appearance="primary" size="large" icon={ChatIcon}>
				Large
			</Button>{' '}
			<Button appearance="primary" size="xlarge" icon={AccessibilityIcon}>
				Extra large
			</Button>
		</p>
		<p>
			<Button appearance="primary" size="xlarge" icon={ArrowRightIcon} block>
				Extra large block
			</Button>
		</p>
		<p>
			<Button appearance="primary" size="small" icon={ArrowRightIcon} block justify>
				Small block justify
			</Button>
		</p>
		<p>
			<Button appearance="primary" size="medium" icon={ArrowRightIcon} block justify>
				Medium block justify
			</Button>
		</p>
		<p>
			<Button appearance="primary" size="large" icon={ArrowRightIcon} block justify>
				Large block justify
			</Button>
		</p>
		<p>
			<Button appearance="primary" size="xlarge" icon={ArrowRightIcon} block justify>
				Extra large block justify
			</Button>
		</p>

		<hr />

		<h3>Icon on the left</h3>
		<p>
			<Button appearance="primary" size="small" icon={HouseIcon} iconPosition="left">
				Small
			</Button>{' '}
			<Button appearance="primary" size="medium" icon={AlertIcon} iconPosition="left">
				Medium
			</Button>{' '}
			<Button appearance="primary" size="large" icon={ChatIcon} iconPosition="left">
				Large
			</Button>{' '}
			<Button appearance="primary" size="xlarge" icon={AccessibilityIcon} iconPosition="left">
				Extra large
			</Button>
		</p>
		<p>
			<Button appearance="primary" size="xlarge" icon={ArrowLeftIcon} iconPosition="left" block>
				Extra large block
			</Button>
		</p>
		<p>
			<Button
				appearance="primary"
				size="small"
				icon={ArrowLeftIcon}
				iconPosition="left"
				block
				justify
			>
				Small block justify
			</Button>
		</p>
		<p>
			<Button
				appearance="primary"
				size="medium"
				icon={ArrowLeftIcon}
				iconPosition="left"
				block
				justify
			>
				Medium block justify
			</Button>
		</p>
		<p>
			<Button
				appearance="primary"
				size="large"
				icon={ArrowLeftIcon}
				iconPosition="left"
				block
				justify
			>
				Large block justify
			</Button>
		</p>
		<p>
			<Button
				appearance="primary"
				size="xlarge"
				icon={ArrowLeftIcon}
				iconPosition="left"
				block
				justify
			>
				Extra large block justify
			</Button>
		</p>

		<hr />

		<h3>Icon only (no text)</h3>
		<p>
			<Button appearance="primary" size="small" icon={StarIcon} />{' '}
			<Button appearance="primary" size="medium" icon={StarIcon} />{' '}
			<Button appearance="primary" size="large" icon={StarIcon} />{' '}
			<Button appearance="primary" size="xlarge" icon={StarIcon} />
		</p>
		<p>
			<Button appearance="primary" size="xlarge" icon={StarIcon} iconPosition="left" block />
		</p>
	</>
);
