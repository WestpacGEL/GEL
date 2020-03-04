/** @jsx jsx */

import { useState } from 'react';
import { jsx } from '@westpac/core';
import { ProgressBar } from '@westpac/progress-bar';
import { StyledButton as Button } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
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
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />

			<h2>Default</h2>
			<ProgressBar value={0} />
			<ProgressBar value={20} />

			<br />
			<h2>Controlled</h2>
			<ProgressBar value={progress} />

			<br />
			<h2>Skinny</h2>
			<ProgressBar value={progress} look="skinny" />
			<div css={{ display: 'flex', marginTop: '3rem', width: '50%' }}>
				<Button onClick={() => handleProgress(1)}>+1</Button>
				<Button onClick={() => handleProgress(-1)}>-1</Button>
				<Button onClick={() => handleProgress(10)}>+10</Button>
				<Button onClick={() => handleProgress(-10)}>-10</Button>
			</div>
		</Playground>
	);
};
