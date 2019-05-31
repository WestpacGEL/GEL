import React from 'react';

import { Button } from '../src/index.js';

import { HouseIcon, AlertIcon, ChatIcon, AccessibilityIcon } from '../../icon/src'; //until icon package is published

export default () => (
	<>
		<h3>Icon right (default)</h3>
		<p>
			<Button appearance="primary" size="small" icon={<HouseIcon />}>
				Home
			</Button>
			{' '}
			<Button appearance="primary" size="medium" icon={<AlertIcon />}>
				Home
			</Button>
			{' '}
			<Button appearance="primary" size="large" icon={<ChatIcon />}>
				Home
			</Button>
			{' '}
			<Button appearance="primary" size="xlarge" icon={<AccessibilityIcon />}>
				Home
			</Button>
		</p>

		<h3>Icon left</h3>
		<p>
			<Button appearance="primary" size="small" icon={<HouseIcon />} iconPosition="left">
				Home
			</Button>
			{' '}
			<Button appearance="primary" size="medium" icon={<AlertIcon />} iconPosition="left">
				Home
			</Button>
			{' '}
			<Button appearance="primary" size="large" icon={<ChatIcon />} iconPosition="left">
				Home
			</Button>
			{' '}
			<Button appearance="primary" size="xlarge" icon={<AccessibilityIcon />} iconPosition="left">
				Home
			</Button>
		</p>
	</>
);