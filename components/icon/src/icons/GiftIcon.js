import React from 'react';
import { propTypes, defaultProps, Icon } from '../Icon';

export const GiftIcon = ({ primaryColor, secondaryColor, ...props }) => (
	<Icon {...props}>
		<path
			fill={primaryColor}
			fillRule="evenodd"
			d="M18.4648712,6 L22,6 C23.1045695,6 24,6.8954305 24,8 L24,12 L13,12 L13,7.46487122 C12.6235948,7.24713257 12.2859638,6.96981926 12,6.6458244 C11.7140362,6.96981926 11.3764052,7.24713257 11,7.46487122 L11,12 L0,12 L0,8 C-1.3527075e-16,6.8954305 0.8954305,6 2,6 L2,6 L5.53512878,6 C5.19478857,5.41165327 5,4.72857429 5,4 C5,1.790861 6.790861,0 9,0 C10.1946925,0 11.2670555,0.523754887 12,1.3541756 L12,1.3541756 C12.7329445,0.523754887 13.8053075,0 15,0 C17.209139,0 19,1.790861 19,4 C19,4.72857429 18.8052114,5.41165327 18.4648712,6 Z M11,14 L1,14 L1,22 C1,23.1045695 1.8954305,24 3,24 L21,24 C22.1045695,24 23,23.1045695 23,22 L23,14 L13,14 L13,24 L11,24 L11,14 Z M9,6 C10.1045695,6 11,5.1045695 11,4 C11,2.8954305 10.1045695,2 9,2 C7.8954305,2 7,2.8954305 7,4 C7,5.1045695 7.8954305,6 9,6 Z M15,6 C16.1045695,6 17,5.1045695 17,4 C17,2.8954305 16.1045695,2 15,2 C13.8954305,2 13,2.8954305 13,4 C13,5.1045695 13.8954305,6 15,6 Z"
		/>
	</Icon>
);

GiftIcon.defaultProps = {
	...defaultProps,
	label: 'Gift',
};
GiftIcon.propTypes = propTypes;
