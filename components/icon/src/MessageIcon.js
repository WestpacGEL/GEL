import React from 'react';
import { propTypes, Icon } from './Icon';

export const MessageIcon = ({
	assistiveText = 'Message',
	copyrightYear = '2020',
	size = 'medium',
	look = 'filled',
	...props
}) => (
	<Icon
		icon="MessageIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		{look === 'filled' ? (
			<path
				fill="currentColor"
				fill-rule="evenodd"
				d="M3.636 13 0 23l24-11L0 1l3.636 10H12a1 1 0 1 1 0 2H3.636Z"
				clip-rule="evenodd"
			/>
		) : (
			<path
				fill="currentColor"
				fill-rule="evenodd"
				d="m0 23 4-11L0 1l24 11L0 23Zm5.764-12-2.25-6.19L19.2 12 3.514 19.19 5.764 13H12a1 1 0 1 0 0-2H5.764Z"
				clip-rule="evenodd"
			/>
		)}
	</Icon>
);

MessageIcon.propTypes = propTypes;
