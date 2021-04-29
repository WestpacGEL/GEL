/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { ProgressBar } from '@westpac/progress-bar';
import { StyledButton as Button } from './_utils';

function Example({ brand }) {
	const [progress, setProgress] = useState(5);

	function handleProgress(unit) {
		let newProgress = progress + unit;

		if (newProgress > 100) {
			newProgress = 100;
		}

		if (newProgress < 0) {
			newProgress = 0;
		}

		setProgress(newProgress);
	}

	return (
		<GEL brand={brand}>
			<h2>Default</h2>

			<h3>Label</h3>
			<ProgressBar value={progress} />

			<h3>noLabel</h3>
			<ProgressBar value={progress} noLabel />

			<hr />

			<h2>Skinny</h2>
			<ProgressBar value={progress} look="skinny" />

			<div css={{ display: 'flex', marginTop: '3rem', width: '50%' }}>
				<Button onClick={() => handleProgress(-10)}>-10</Button>
				<Button onClick={() => handleProgress(-1)}>-1</Button>
				<Button onClick={() => handleProgress(1)}>+1</Button>
				<Button onClick={() => handleProgress(10)}>+10</Button>
			</div>

			<hr />
		</GEL>
	);
}

export default Example;
