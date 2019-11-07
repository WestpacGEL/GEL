/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { ProgressBar } from '@westpac/progress-bar';
import { StyledButton as Button } from './_utils';

function Example({ brand }) {
	const [progress, setProgress] = useState(0);
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<ProgressBar value={progress} />
			<br />
			<h2>Skinny</h2>
			<ProgressBar value={progress} look="skinny" />
			<div css={{ display: 'flex', marginTop: '3rem', width: '50%' }}>
				<Button onClick={() => setProgress(progress + 1)}>+1</Button>
				<Button onClick={() => setProgress(progress - 1)}>-1</Button>
				<Button onClick={() => setProgress(progress + 10)}>+10</Button>
				<Button onClick={() => setProgress(progress - 10)}>-10</Button>
			</div>
		</GEL>
	);
}

export default Example;
