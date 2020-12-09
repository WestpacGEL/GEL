/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Alert } from '@westpac/alert';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Alert type="success">
				<strong>Well done!</strong> You successfully read this important alert message. Lorem ipsum
				dolor sit amet, consectetur adipisicing elit. Quo dolor provident quasi nisi officia tempore
				fuga autem, animi iste molestiae, qui omnis doloribus aliquid ipsam rem fugiat veniam
				voluptatem accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, unde
				quis, molestias nisi quae voluptates nemo quaerat nihil, consequuntur nobis ratione rerum
				asperiores eveniet dicta maiores quia nostrum. Pariatur, natus. Lorem ipsum dolor sit amet,
				consectetur adipisicing elit. Fuga, magnam illum harum consequatur, quo sunt impedit quam
				minus eaque saepe voluptas corrupti voluptatum, sapiente dolor sequi tempore maxime? Neque,
				obcaecati. <a href="#">Link</a>
			</Alert>

			<hr />

			<h2>Box</h2>
			<Alert type="box">
				<strong>Well done!</strong> You successfully read this important alert message. Lorem ipsum
				dolor sit amet, consectetur adipisicing elit. Quo dolor provident quasi nisi officia tempore
				fuga autem, animi iste molestiae, qui omnis doloribus aliquid ipsam rem fugiat veniam
				voluptatem accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, unde
				quis, molestias nisi quae voluptates nemo quaerat nihil, consequuntur nobis ratione rerum
				asperiores eveniet dicta maiores quia nostrum. Pariatur, natus. Lorem ipsum dolor sit amet,
				consectetur adipisicing elit. Fuga, magnam illum harum consequatur, quo sunt impedit quam
				minus eaque saepe voluptas corrupti voluptatum, sapiente dolor sequi tempore maxime? Neque,
				obcaecati. <a href="#">Link</a>
			</Alert>

			<hr />

			<h2>Text</h2>
			<Alert type="text">
				<strong>Well done!</strong> You successfully read this important alert message. Lorem ipsum
				dolor sit amet, consectetur adipisicing elit. Quo dolor provident quasi nisi officia tempore
				fuga autem, animi iste molestiae, qui omnis doloribus aliquid ipsam rem fugiat veniam
				voluptatem accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, unde
				quis, molestias nisi quae voluptates nemo quaerat nihil, consequuntur nobis ratione rerum
				asperiores eveniet dicta maiores quia nostrum. Pariatur, natus. Lorem ipsum dolor sit amet,
				consectetur adipisicing elit. Fuga, magnam illum harum consequatur, quo sunt impedit quam
				minus eaque saepe voluptas corrupti voluptatum, sapiente dolor sequi tempore maxime? Neque,
				obcaecati. <a href="#">Link</a>
			</Alert>
		</GEL>
	);
}
