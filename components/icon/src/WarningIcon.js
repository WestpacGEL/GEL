import React from 'react';
import { propTypes, defaultProps, Icon } from './Icon';

export const WarningIcon = (props) => (
	<Icon icon="WarningIcon" {...props}>
		<path
			fill="currentColor"
			fillRule="nonzero"
			d="M12.708.293l10.999 11c.39.39.39 1.024 0 1.415l-11 10.999c-.39.39-1.024.39-1.415 0l-10.999-11a1.001 1.001 0 010-1.415l11-10.999c.39-.39 1.024-.39 1.415 0zm-.709 2.124L2.416 12l9.583 9.583L21.583 12l-9.584-9.583zM13 16v2h-2v-2h2zm0-10v8h-2V6h2z"
		/>
	</Icon>
);

WarningIcon.defaultProps = {
	...defaultProps,
	assistiveText: 'Warning',
	copyrightYear: '2020',
};
WarningIcon.propTypes = propTypes;
