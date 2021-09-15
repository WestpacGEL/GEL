import React from 'react';
import { propTypes, defaultProps, Icon } from './Icon';

export const CursorArrowRaysIcon = (props) => (
	<Icon icon="CursorArrowRaysIcon" {...props}>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="m11 10 8.167 7.524-3.675.107 2.45 5.563-1.878.806-2.45-5.562L11 21.018V10Zm-4.851 3.328a1 1 0 0 1-.75 1.2l-3.897.899a1 1 0 0 1-.45-1.949l3.897-.9a1 1 0 0 1 1.2.75ZM21.368 4.5a1 1 0 0 1-.148 1.406l-3.108 2.517a1 1 0 1 1-1.26-1.554l3.11-2.517a1 1 0 0 1 1.406.148Zm-17.33-.148 3.11 2.517a1 1 0 0 1-1.26 1.554L2.78 5.907a1 1 0 0 1 1.259-1.554ZM12 0a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1Z"
		/>
	</Icon>
);

CursorArrowRaysIcon.defaultProps = {
	...defaultProps,
	assistiveText: 'Cursor arrow rays',
	copyrightYear: '2021',
};
CursorArrowRaysIcon.propTypes = propTypes;
