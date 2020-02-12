/** @jsx jsx */

import { jsx } from '@westpac/core';
import { FavouriteIcon } from '@westpac/icon';
import { Row } from './_util';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ context }) {
	return (
		<Playground context={context} brand={brand}>
			<Intopia />

			<Row>
				<FavouriteIcon assistiveText="Colored heart" color="#DE350B" />
				<FavouriteIcon assistiveText="Colored heart" color="#FF991F" />
				<FavouriteIcon assistiveText="Colored heart" color="#00875A" />
				<FavouriteIcon assistiveText="Colored heart" color="#00A3BF" />
				<FavouriteIcon assistiveText="Colored heart" color="#0052CC" />
				<FavouriteIcon assistiveText="Colored heart" color="#5243AA" />
			</Row>
		</Playground>
	);
}

export default Example;
