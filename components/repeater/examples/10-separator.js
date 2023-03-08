import { GEL, jsx } from '@westpac/core';
import { useId } from 'react';
import { Repeater } from '@westpac/repeater';

const Repeat = (props) => {
	const id = useId();
	return (
		<div id={id} {...props}>
			Repeater
		</div>
	);
};

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Repeater separator>
				<Repeat />
			</Repeater>
		</GEL>
	);
}

export default Example;
