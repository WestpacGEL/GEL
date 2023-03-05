import { jsx } from '@westpac/core';
import { ProgressBar } from '@westpac/progress-bar';
import { Button } from '@westpac/button';
import { useState } from 'react';

import { Playground } from '../../../../website/src/components/playground/macro';
const Wrapper = (props) => (
	<div css={{ display: 'flex', justifyContent: 'space-between', width: '50%' }} {...props} />
);

const Demo = ({ context, showCode, showDemo }) => {
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
			<ProgressBar value={progress} />
			<ProgressBar value={progress} look="skinny" />
			<p>Use the +/- buttons below to demonstrate how the progress bar moves.</p>
			<Wrapper>
				<div>
					<Button
						soft
						onClick={() => handleProgress(-1)}
						overrides={{
							Button: { styles: (styles) => ({ ...styles, marginRight: '1rem', width: '5rem' }) },
						}}
					>
						-1%
					</Button>
					<Button
						soft
						onClick={() => handleProgress(-10)}
						overrides={{
							Button: { styles: (styles) => ({ ...styles, width: '5rem' }) },
						}}
					>
						-10%
					</Button>
				</div>
				<div>
					<Button
						soft
						onClick={() => handleProgress(1)}
						overrides={{
							Button: { styles: (styles) => ({ ...styles, marginRight: '1rem', width: '5rem' }) },
						}}
					>
						+1%
					</Button>
					<Button
						soft
						onClick={() => handleProgress(10)}
						overrides={{
							Button: { styles: (styles) => ({ ...styles, width: '5rem' }) },
						}}
					>
						+10%
					</Button>
				</div>
			</Wrapper>
		</Playground>
	);
};

export default Demo;
