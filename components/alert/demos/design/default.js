import { jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { Alert } from '@westpac/alert';
import { PhoneIcon } from '@westpac/icon';

import { Playground } from '../../../../website/src/components/playground/macro';
import { Title, Hr } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Success</Title>
			<Alert look="success">
				<strong>Thank you</strong> Your account has successfully been opened.
			</Alert>
			<Title>Information</Title>
			<Alert look="info" dismissible>
				<strong>Changed Opening Hours</strong> The opening hours for this branch have changed.
			</Alert>
			<Title>Warning</Title>
			<Alert look="warning" dismissible>
				<strong>Time out</strong> Please make sure you complete this process, this operation will
				time out in 5 min.
			</Alert>
			<Title>Danger</Title>
			<Alert look="danger" dismissible>
				<strong>Please fix the 3 errors listed below</strong>
				<List
					type="unstyled"
					overrides={{
						Item: {
							styles: (styles) => ({
								...styles,
								textDecoration: 'underline',
							}),
						},
					}}
				>
					<Item>Select a title</Item>
					<Item>Enter your given name</Item>
					<Item>Enter your family name</Item>
				</List>
			</Alert>
			<Title>System Error</Title>
			<Alert look="system" dismissible>
				<strong>System Error</strong> The server is not responding. Please try again later. We are
				sorry for any inconvenience.
			</Alert>
			<Title>Flexible info style icon</Title>
			<Alert icon={PhoneIcon}>
				Please make sure your mobile number is correct, we will use this to contact you if we have
				any questions about your application.
			</Alert>
		</Playground>
	);
};

export default Demo;
