/** @jsx jsx */

import { jsx } from '@westpac/core';
import { PhoneIcon } from '@westpac/icon';
import { Alert } from '@westpac/alert';

import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Alert with dismiss button</Title>
			<Alert look="info" icon={PhoneIcon} dismissible>
				<strong>Notifications</strong> You have notifications activated.
			</Alert>
			<Title>Alert with no icon</Title>
			<Alert look="info" icon={null}>
				<strong>Please note</strong> These products are no longer available. If you are looking for
				service and support of an existing poroduct please contact our <a href="#">support team</a>.
			</Alert>
			<Title>Long alert</Title>
			<Alert look="warning">
				<strong>Scam alert</strong> We have been made aware of an email scam currently circulating.
				<p>
					This email advises that we are experiencing a high rate of mail server messages. The link
					will take you to a phishing website which may ask for personal information such as online
					banking sign in details &/or credit card details.
				</p>
				<p>
					Do not click the link in this email or enter your personal information. Westpac will never
					ask you to click a link to sign into your online banking.
				</p>
			</Alert>
		</Playground>
	);
};

export default Demo;
