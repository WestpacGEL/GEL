/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { ProgressBar } from '@westpac/progress-bar';
import { StyledButton as Button } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const [progress, setProgress] = useState(10);
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/progress-bar'] = {
		styles: styles => ({
			...styles,
			borderColor: 'mediumaquamarine',
		}),
		subComponent: {
			Bar: {
				styles: styles => ({
					...styles,
					backgroundColor: 'darkcyan',
				}),
			},
		},
	};

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
		<GEL brand={overridesWithTokens}>
			<Intopia ignore />

			<h2>With overrides applied</h2>
			<ProgressBar value={progress} />
			<br />
			<ProgressBar value={progress} look="skinny" />
			<h2>With overrides and component overrides</h2>
			<ProgressBar
				value={progress}
				overrides={{
					styles: styles => ({
						...styles,
						borderColor: 'skyblue',
					}),
					subComponent: {
						Bar: {
							styles: styles => ({
								...styles,
								backgroundColor: 'cornflowerblue',
							}),
						},
					},
				}}
			/>
			<div css={{ display: 'flex', marginTop: '3rem', width: '50%' }}>
				<Button onClick={() => handleProgress(1)}>+1</Button>
				<Button onClick={() => handleProgress(-1)}>-1</Button>
				<Button onClick={() => handleProgress(10)}>+10</Button>
				<Button onClick={() => handleProgress(-10)}>-10</Button>
			</div>
		</GEL>
	);
}

export default Example;
