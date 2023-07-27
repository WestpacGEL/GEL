import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const SmsIcon = ({
	assistiveText = 'Sms',
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
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M2 0C0.89543 0 0 0.89543 0 2V24L6 18H22C23.1046 18 24 17.1046 24 16V2C24 0.89543 23.1046 0 22 0H2ZM6 11C7.10457 11 8 10.1046 8 9C8 7.89543 7.10457 7 6 7C4.89543 7 4 7.89543 4 9C4 10.1046 4.89543 11 6 11ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9ZM18 11C19.1046 11 20 10.1046 20 9C20 7.89543 19.1046 7 18 7C16.8954 7 16 7.89543 16 9C16 10.1046 16.8954 11 18 11Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M6 11C7.10457 11 8 10.1046 8 9C8 7.89543 7.10457 7 6 7C4.89543 7 4 7.89543 4 9C4 10.1046 4.89543 11 6 11Z"
					fill="currentColor"
				/>
				<path
					d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
					fill="currentColor"
				/>
				<path
					d="M20 9C20 10.1046 19.1046 11 18 11C16.8954 11 16 10.1046 16 9C16 7.89543 16.8954 7 18 7C19.1046 7 20 7.89543 20 9Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 2V24L6 18H22C23.1046 18 24 17.1046 24 16V2C24 0.89543 23.1046 0 22 0H2C0.89543 0 0 0.89543 0 2ZM22 16H5.17157L2 19.1716V2H22V16Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
