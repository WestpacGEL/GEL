import React from 'react';
import { propTypes, defaultProps, Icon } from './Icon';

export const DropDownIcon = (props) => (
	<Icon icon="DropDownIcon" {...props}>
		<polygon fill="currentColor" fillRule="evenodd" points="5 8 12 16 19 8" />
	</Icon>
);

DropDownIcon.defaultProps = {
	...defaultProps,
	assistiveText: 'Drop Down',
	copyrightYear: '2020',
};
DropDownIcon.propTypes = propTypes;
