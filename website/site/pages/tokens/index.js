import React from 'react';

import { useBrand } from '@westpac/core';
import { Container } from '@westpac/grid';

import Colors from '../../../../components/core/examples/00-tokens-colors';
import Spacing from '../../../../components/core/examples/20-tokens-spacing';
import Type from '../../../../components/core/examples/30-tokens-type';
import Packs from '../../../../components/core/examples/40-tokens-packs';

const TokensPage = () => {
	const brand = useBrand();
	return (
		<Container>
			<Colors brand={brand} />
			<Spacing brand={brand} />
			<Type brand={brand} />
			<Packs brand={brand} />
		</Container>
	);
};

export default TokensPage;
