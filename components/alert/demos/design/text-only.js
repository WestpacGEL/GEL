import { jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { Alert } from '@westpac/alert';

import { Playground } from '../../../../website/src/components/playground/macro';
import { Title, Hr } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Success</Title>
			<Alert look="success" mode="text">
				Your account has successfully been opened.
			</Alert>
			<Title>Information</Title>
			<Alert look="info" mode="text">
				The opening hours for this branch have changed.
			</Alert>
			<Title>Warning</Title>
			<Alert look="warning" mode="text">
				Please make sure you complete this process, this operation will time out in 5 min.
			</Alert>
			<Title>Danger</Title>
			<Alert look="danger" mode="text">
				Please enter a valid account number.
			</Alert>
		</Playground>
	);
};

export default Demo;
