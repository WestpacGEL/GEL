/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { useTransition, animated } from 'react-spring';

const Backdrop = ({ state: { open }, ...rest }) => {
	const backdropTransition = useTransition(open, null, {
		from: {
			opacity: 0,
		},
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 400 },
	});

	return backdropTransition.map(
		({ item, key, props }) =>
			item && (
				<animated.div key={key} style={props}>
					<div {...rest} />
				</animated.div>
			)
	);
};

const backdropStyles = () => {
	return {
		label: getLabel('modal-backdrop'),
		zIndex: '1001',
		position: 'fixed',
		backgroundColor: 'rgba(0,0,0,0.5)',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'baseline',
	};
};

const backdropAttributes = () => null;

export const defaultBackdrop = {
	component: Backdrop,
	styles: backdropStyles,
	attributes: backdropAttributes,
};
