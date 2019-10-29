/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import {
	AddIcon,
	CalendarIcon,
	DeleteIcon,
	GridIcon,
	HelpIcon,
	MessageIcon,
	StarIcon,
	WriteIcon,
} from '@westpac/icon';
import { Row } from './_util';

const Wrapper = ({ children, icon, ...rest }) => (
	<div>
		{children}
		name: <span css={{}}>{icon}</span>
	</div>
);

function Example({ brand }) {
	const overwritesWithTokens = { ...brand };
	overwritesWithTokens['@westpac/icon'] = {
		Wrapper,
	};

	return (
		<GEL brand={overwritesWithTokens}>
			<h2>With overwrites applied</h2>
			<Row>
				<AddIcon />
				<CalendarIcon />
				<DeleteIcon />
				<GridIcon />
				<HelpIcon />
				<MessageIcon />
				<StarIcon />
				<WriteIcon />
			</Row>
		</GEL>
	);
}

export default Example;
