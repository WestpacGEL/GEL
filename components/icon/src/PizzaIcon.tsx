import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const PizzaIcon = ({
	assistiveText = 'Pizza',
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
				d="M1.21191 4.8C3.87591 1.848 7.71591 0 11.9999 0C16.2839 0 20.1359 1.86 22.7879 4.8L11.9999 24L1.21191 4.8ZM11 6C11 7.10457 10.1046 8 9 8C7.89543 8 7 7.10457 7 6C7 4.89543 7.89543 4 9 4C10.1046 4 11 4.89543 11 6ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M11 6C11 7.10457 10.1046 8 9 8C7.89543 8 7 7.10457 7 6C7 4.89543 7.89543 4 9 4C10.1046 4 11 4.89543 11 6Z"
					fill="currentColor"
				/>
				<path
					d="M12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M22.7879 4.8L11.9999 24L1.21191 4.8C3.87591 1.848 7.71591 0 11.9999 0C16.2839 0 20.1359 1.86 22.7879 4.8ZM3.70006 5.14538L11.9999 19.9171L20.2996 5.14566C18.0914 3.19057 15.1843 2 11.9999 2C8.8131 2 5.9136 3.18337 3.70006 5.14538Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
