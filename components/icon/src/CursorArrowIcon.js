import React from 'react';
import { propTypes, defaultProps, Icon } from './Icon';

export const CursorArrowIcon = (props) => (
	<Icon icon="CursorArrowIcon" {...props}>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="m6 1 12.67 11.823-5.701.169 3.801 8.741L13.856 23l-3.801-8.741L6 18.313z"
		/>
	</Icon>
);

CursorArrowIcon.defaultProps = {
	...defaultProps,
	assistiveText: 'Cursor arrow',
	copyrightYear: '2021',
};
CursorArrowIcon.propTypes = propTypes;
