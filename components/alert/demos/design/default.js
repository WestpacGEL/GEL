/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Alert } from '@westpac/alert';
import { Playground } from '../../../../website/src/components/playground/macro';

const Title = (props) => {
	const { COLORS } = useBrand();
	return <p css={{ fontStyle: 'italic', color: COLORS.muted }} {...props} />;
};

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Success (note text wrapping in xs breakpoint)</Title>
			<Alert look="success" dismissible>
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
			<Title>Information</Title>
			<Alert look="info" dismissible>
				<strong>Heads up!</strong> This alert needs your attention, but it’s not super important.{' '}
				<a href="#">Link</a>
			</Alert>
			<Title>Warning</Title>
			<Alert look="warning" dismissible>
				<strong>Warning!</strong> Better check yourself, you’re not looking too good.{' '}
				<a href="#">Link</a>
			</Alert>
			<Title>Danger</Title>
			<Alert look="danger" dismissible>
				<strong>Oh snap!</strong> Change a few things up and try submitting again.{' '}
				<a href="#">Link</a>
			</Alert>
			<Title>System</Title>
			<Alert look="system" dismissible>
				<strong>System Error 8942:</strong> The server is no responding. Please try again later.
				Sorry for the inconvenience. <a href="#">Link</a>
			</Alert>
			<br />
			<Title>Sucess (without icon and close button)</Title>
			<Alert look="success" icon={null}>
				<strong>Well done!</strong> You successfully read this important alert message, but you
				can't close it. <a href="#">Link</a>
			</Alert>
		</Playground>
	);
};
