import React from 'react';
import { SrOnly } from '../src';

export default () => (
	<>
		<h2>Screen reader only text </h2>
		<p>
			Note: The examples below the following headings are visibility hidden. Best you inspect what
			is being rendered using your browser’s DevTools.
		</p>

		<h3>Default instance (no styling props)</h3>
		<SrOnly>This is screen reader only text</SrOnly>

		<h3>
			SrOnly with a <code>&lt;p&gt;</code> tag
		</h3>
		<SrOnly tag="p">This is screen reader only text</SrOnly>

		<h3>
			SrOnly with a <code>&lt;div&gt;</code> tag
		</h3>
		<SrOnly tag="div">This is screen reader only text</SrOnly>
	</>
);
