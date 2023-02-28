import { jsx } from '@westpac/core';
import { Alert } from '@westpac/alert';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Success</Title>
			<Alert look="success">
				<strong>Well done!</strong> You successfully read this important alert message.{' '}
				<a href="#">Link</a>
			</Alert>
			<Title>Information</Title>
			<Alert look="info">
				<strong>Heads up!</strong> This alert needs your attention, but it’s not super important.{' '}
				<a href="#">Link</a>
			</Alert>
			<Title>Warning</Title>
			<Alert look="warning">
				<strong>Warning!</strong> Better check yourself, you’re not looking too good.{' '}
				<a href="#">Link</a>
			</Alert>
			<Title>Danger</Title>
			<Alert look="danger">
				<strong>Oh snap!</strong> Change a few things up and try submitting again.{' '}
				<a href="#">Link</a>
			</Alert>
			<Title>System</Title>
			<Alert look="system">
				<strong>System Error 8942:</strong> The server is no responding. Please try again later.
				Sorry for the inconvenience. <a href="#">Link</a>
			</Alert>
		</Playground>
	);
};

export default Demo;
