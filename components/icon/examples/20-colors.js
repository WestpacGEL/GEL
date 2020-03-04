/** @jsx jsx */

import { jsx } from '@westpac/core';
import { FavouriteIcon } from '@westpac/icon';
import { Row } from './_util';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
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
};
