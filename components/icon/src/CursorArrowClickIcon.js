import React from 'react';
import { propTypes, defaultProps, Icon } from './Icon';

export const CursorArrowClickIcon = (props) => (
	<Icon icon="CursorArrowClickIcon" {...props}>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="m11 10 8.167 7.524-3.675.107 2.45 5.563-1.878.806-2.45-5.562L11 21.018V10Zm1-10c6.627 0 12 5.373 12 12 0 1.327-.215 2.604-.613 3.797l-1.898-.633A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.995 9.995 0 0 0 5.528 8.947l-.895 1.789A11.996 11.996 0 0 1 0 12C0 5.373 5.373 0 12 0Z"
		/>
	</Icon>
);

AccessibilityIcon.defaultProps = {
	...defaultProps,
	assistiveText: 'Cursor arrow click',
	copyrightYear: '2021',
};
AccessibilityIcon.propTypes = propTypes;
