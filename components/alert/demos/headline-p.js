/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Alert } from '@westpac/alert';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Alert heading="This is a Heading" headingTag="h3">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque expedita natus voluptate voluptatem quasi commodi dolorem fuga. Officiis similique,
					iusto ab. Fugit officiis at, dolores repellendus perferendis maxime quae. Esse!
				</p>
				<p>
					Est, unde quis, molestias nisi quae voluptates nemo quaerat nihil, consequuntur nobis
					ratione rerum asperiores eveniet dicta maiores quia nostrum. Pariatur, natus. Lorem ipsum
					dolor sit amet, consectetur adipisicing elit. Fuga, magnam illum harum consequatur, quo
					sunt impedit quam minus eaque saepe voluptas corrupti voluptatum, sapiente dolor sequi
					tempore maxime? Neque, obcaecati.
				</p>
			</Alert>
		</Playground>
	);
};
