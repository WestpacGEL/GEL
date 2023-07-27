import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const DropboxIcon = ({
	assistiveText = 'Dropbox',
	copyrightYear = '2023',
	size = 'medium',
	look = 'filled',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="TestIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		look={look}
		color={color}
		overrides={overrides}
		{...props}
	>
		{look === 'filled' ? (
			<Fragment>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M16.9403 1L12.0001 5.15496L19.118 9.58574L12 14.0166L16.9402 18.1723L23.9999 13.5268L19.118 9.58574L24 5.64621L16.9403 1Z"
					fill="currentColor"
				/>
				<path
					d="M7.05976 19.0541L4.93953 17.6598V19.2228L12.0142 23.4993L19.0889 19.2228V17.6598L16.9687 19.0541L12.0142 14.9103L7.05976 19.0541Z"
					fill="currentColor"
				/>
				<path
					d="M0 13.5265L7.05968 18.1727L12 14.0166L4.8817 9.58607L0 13.5265Z"
					fill="currentColor"
				/>
				<path
					d="M7.49993e-05 5.64621L7.05976 1L12.0001 5.15496L4.8817 9.58607L7.49993e-05 5.64621Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M16.9403 1L12.0001 5.15496L19.118 9.58574L12 14.0166L16.9402 18.1723L23.9999 13.5268L19.118 9.58574L24 5.64621L16.9403 1Z"
					fill="currentColor"
				/>
				<path
					d="M7.05976 19.0541L4.93953 17.6598V19.2228L12.0142 23.4993L19.0889 19.2228V17.6598L16.9687 19.0541L12.0142 14.9103L7.05976 19.0541Z"
					fill="currentColor"
				/>
				<path
					d="M0 13.5265L7.05968 18.1727L12 14.0166L4.8817 9.58607L0 13.5265Z"
					fill="currentColor"
				/>
				<path
					d="M7.49993e-05 5.64621L7.05976 1L12.0001 5.15496L4.8817 9.58607L7.49993e-05 5.64621Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
