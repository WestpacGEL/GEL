/** @jsx jsx */
import { Fragment, useState } from 'react';

import { jsx } from '@westpac/core';
import { Text } from '@westpac/text-input';

import { LogList } from './log-list';

export const Changelog = ({ data }) => {
	const [range, updateRange] = useState('');

	const handleChange = event => {
		updateRange(event.target.value);
	};

	return (
		<Fragment>
			<div css={{ maxWidth: 320 }}>
				<Text
					onChange={handleChange}
					placeholder={'Semver Range: e.g. "> 1.0.6 <= 3.0.2"'}
					value={range}
				/>
			</div>
			<LogList changelog={data} range={range} />
		</Fragment>
	);
};
