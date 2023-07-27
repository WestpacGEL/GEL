import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const NotificationOffIcon = ({
	assistiveText = 'NotificationOff',
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
					d="M9.99995 3.25203V2C9.99995 0.89543 10.8954 0 12 0C13.1045 0 14 0.89543 14 2V3.25203C17.4504 4.14012 20 7.27232 20 11V16.4227L7.7797 4.20243C8.45859 3.78005 9.20539 3.45654 9.99995 3.25203Z"
					fill="currentColor"
				/>
				<path
					d="M8.99995 21C8.99995 22.6569 10.3438 24 12.0015 24C13.6591 24 15.003 22.6569 15.003 21H8.99995Z"
					fill="currentColor"
				/>
				<path
					d="M0.964722 3.03523L2.37894 1.62102L22.3789 21.621L20.9647 23.0352L17.9295 20H1.99995V19L3.99995 17V11C3.99995 9.5797 4.37007 8.24585 5.01913 7.08964L0.964722 3.03523Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M10 2V3.25203C9.20547 3.45654 8.45867 3.78005 7.77979 4.20243L9.24556 5.66821C10.0704 5.2412 11.0071 5 12 5C15.3137 5 18 7.68629 18 11V14.4226L20 16.4227V11C20 7.27232 17.4505 4.14012 14 3.25203V2C14 0.89543 13.1046 0 12 0C10.8955 0 10 0.89543 10 2Z"
					fill="currentColor"
				/>
				<path
					d="M9 21C9 22.6569 10.3438 24 12.0015 24C13.6592 24 15.003 22.6569 15.003 21H9Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0.964844 3.03531L2.37906 1.62109L22.3791 21.6211L20.9648 23.0353L17.9296 20.0001H2.00008V19.0001L4.00008 17.0001V11.0001C4.00008 9.57978 4.3702 8.24593 5.01925 7.08971L0.964844 3.03531ZM6 11C6 10.1385 6.18156 9.31945 6.50849 8.57896L15.9295 18H6V11Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
