/** @jsx jsx */

import { jsx, useMediaQuery, useBrand } from '@westpac/core';
import { useTransition, animated } from 'react-spring';
import { forwardRef } from 'react';

export const Modal = forwardRef(({ heading, open, onClose, size, dismissible, ...rest }, ref) => {
	const { SPACING } = useBrand();

	const modalTransition = useTransition(open, null, {
		from: {
			position: 'fixed',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'baseline',
			left: 0,
			right: 0,
			top: SPACING(5),
			bottom: 0,
			opacity: 0,
			transform: `translateY(-20px)`,
			zIndex: '1002',
		},
		enter: { opacity: 1, transform: `translateY(0px)` },
		leave: { opacity: 0, transform: `translateY(-40px)` },
		config: { duration: 350 },
	});

	return modalTransition.map(
		({ item, key, props }) =>
			item && (
				<animated.div key={key} style={props}>
					<div ref={ref} {...rest} />
				</animated.div>
			)
	);
});

export const modalStyles = (_, { size }) => {
	const mq = useMediaQuery();

	return mq({
		position: 'relative',
		overflow: 'auto',
		maxHeight: '85%',
		margin: '0 0.75rem',
		backgroundColor: '#fff',
		borderRadius: '0.1875rem',
		boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
		width: ['auto', size === 'small' ? '18.75rem' : '37.5rem', size === 'large' && '56.25rem'],
	})[0];
};
