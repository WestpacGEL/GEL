import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const HousePersonIcon = ({
	assistiveText = 'HousePerson',
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
					d="M22 8V11.9969C21.0883 10.7837 19.6369 10 18 10C15.2354 10 13 12.2354 13 15C13 16.237 13.4476 17.3681 14.1899 18.2404C13.9252 18.3383 13.6649 18.4455 13.4127 18.5617C12.6549 18.9111 11.8537 19.3948 11.2156 20.0575C10.7347 20.5568 10.3028 21.2086 10.1086 22H2V8L12 0L22 8Z"
					fill="currentColor"
				/>
				<path
					d="M18 12C19.66 12 21 13.34 21 15C21 16.66 19.66 18 18 18C16.34 18 15 16.66 15 15C15 13.34 16.34 12 18 12Z"
					fill="currentColor"
				/>
				<path
					d="M12 24V22.9024C12 20.7073 16 19.5 18 19.5C20 19.5 24 20.7073 24 22.9024V24H12Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M20 8.96125L12 2.56125L4 8.96125V20H11.5L10.5 22H2V8L12 0L22 8V12L20 10.5V8.96125Z"
					fill="currentColor"
				/>
				<path
					d="M18 12C19.66 12 21 13.34 21 15C21 16.66 19.66 18 18 18C16.34 18 15 16.66 15 15C15 13.34 16.34 12 18 12Z"
					fill="currentColor"
				/>
				<path
					d="M12 24V22.9024C12 20.7073 16 19.5 18 19.5C20 19.5 24 20.7073 24 22.9024V24H12Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
