/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { TelephoneIcon } from '@westpac/icon';
import { Alert } from '@westpac/alert';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Custom icon</h2>
			<h3>TelephoneIcon</h3>
			<Alert icon={TelephoneIcon}>
				<strong>Heads up!</strong> This alert needs your attention, but it’s not super important.{' '}
				<a href="#">Link</a>
			</Alert>

			<h3>TelephoneIcon (success `look`)</h3>
			<p>
				Note: The following icons should not render as <TelephoneIcon />.
			</p>
			<Alert look="success" icon={TelephoneIcon}>
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
			<Alert look="warning" icon={TelephoneIcon}>
				<strong>Warning!</strong> Better check yourself, you’re not looking too good.{' '}
				<a href="#">Link</a>
			</Alert>
			<Alert look="danger" icon={TelephoneIcon}>
				<strong>Oh snap!</strong> Change a few things up and try submitting again.{' '}
				<a href="#">Link</a>
			</Alert>
			<Alert look="system" icon={TelephoneIcon}>
				<strong>System Error 8942:</strong> The server is no responding. Please try again later.
				Sorry for the inconvenience. <a href="#">Link</a>
			</Alert>
		</GEL>
	);
}

export default Example;
