/** @jsx jsx */

import { VisuallyHidden } from '@westpac/a11y';
import { jsx } from '@westpac/core';
import { Fragment } from 'react';

export default () => (
	<Fragment>
		<h2>Screen reader only text </h2>
		<p>
			Note: The examples below the following headings are visibility hidden. Best you inspect what
			is being rendered using your browser’s DevTools.
		</p>

		<h3>Default instance (no styling props)</h3>
		<VisuallyHidden>This is screen reader only text</VisuallyHidden>

		<h3>
			VisuallyHidden with a <code>&lt;p&gt;</code> tag
		</h3>
		<VisuallyHidden tag="p">This is screen reader only text?</VisuallyHidden>

		<h3>
			VisuallyHidden with a <code>&lt;div&gt;</code> tag
		</h3>
		<VisuallyHidden tag="div">This is screen reader only text</VisuallyHidden>
	</Fragment>
);
