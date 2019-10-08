import React from 'react';
import { Alert, Heading } from '../src';

export default () => (
	<>
		<h2>Default instance (no styling props)</h2>
		<Alert>
			This is a default alert. <a href="#">Link</a>
		</Alert>

		<hr />

		<h2>Text styling</h2>

		<h3>Inline bold text</h3>
		<Alert appearance="info">
			<strong>Heads up!</strong> This alert needs your attention, but it’s not super important.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolor provident quasi nisi
			officia tempore fuga autem, animi iste molestiae, qui omnis doloribus aliquid ipsam rem fugiat
			veniam voluptatem accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
			unde quis, molestias nisi quae voluptates nemo quaerat nihil, consequuntur nobis ratione rerum
			asperiores eveniet dicta maiores quia nostrum. Pariatur, natus. Lorem ipsum dolor sit amet,
			consectetur adipisicing elit. Fuga, magnam illum harum consequatur, quo sunt impedit quam
			minus eaque saepe voluptas corrupti voluptatum, sapiente dolor sequi tempore maxime? Neque,
			obcaecati. <a href="#">Link</a>
		</Alert>

		<h3>Alert heading</h3>
		<Alert appearance="info">
			<Heading>This is a Heading</Heading>
			This alert needs your attention, but it’s not super important. Lorem ipsum dolor sit amet,
			consectetur adipisicing elit. Quo dolor provident quasi nisi officia tempore fuga autem, animi
			iste molestiae, qui omnis doloribus aliquid ipsam rem fugiat veniam voluptatem accusamus!
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, unde quis, molestias nisi quae
			voluptates nemo quaerat nihil, consequuntur nobis ratione rerum asperiores eveniet dicta
			maiores quia nostrum. Pariatur, natus. Lorem ipsum dolor sit amet, consectetur adipisicing
			elit. Fuga, magnam illum harum consequatur, quo sunt impedit quam minus eaque saepe voluptas
			corrupti voluptatum, sapiente dolor sequi tempore maxime? Neque, obcaecati.{' '}
			<a href="#">Link</a>
		</Alert>

		<h3>Paragraphs</h3>
		<Alert appearance="info">
			<Heading>This is a Heading</Heading>
			<p>
				This alert needs your attention, but it’s not super important. Lorem ipsum dolor sit amet,
				consectetur adipisicing elit. Quo dolor provident quasi nisi officia tempore fuga autem,
				animi iste molestiae, qui omnis doloribus aliquid ipsam rem fugiat veniam voluptatem
				accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			</p>
			<p>
				Est, unde quis, molestias nisi quae voluptates nemo quaerat nihil, consequuntur nobis
				ratione rerum asperiores eveniet dicta maiores quia nostrum. Pariatur, natus. Lorem ipsum
				dolor sit amet, consectetur adipisicing elit. Fuga, magnam illum harum consequatur, quo sunt
				impedit quam minus eaque saepe voluptas corrupti voluptatum, sapiente dolor sequi tempore
				maxime? Neque, obcaecati. <a href="#">Link</a>
			</p>
		</Alert>
	</>
);
