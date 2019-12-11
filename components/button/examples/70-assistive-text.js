/** @jsx jsx */

import { HouseIcon } from '@westpac/icon';
import { GEL, jsx } from '@westpac/core';
import { Button } from '@westpac/button';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />
			<h2>Assistive text (screen reader text)</h2>
			<Button iconAfter={HouseIcon} assistiveText="Go to home" />{' '}
			<Button assistiveText="Learn more about accessibility">Learn more</Button>
		</GEL>
	);
}

export default Example;
