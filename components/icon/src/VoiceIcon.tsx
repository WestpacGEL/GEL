import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const VoiceIcon = ({
	assistiveText = 'Voice',
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
					d="M16 11V4C16 1.79086 14.2091 0 12 0C9.79086 0 8 1.79086 8 4V11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11Z"
					fill="currentColor"
				/>
				<path
					d="M3.05493 12C3.47856 15.8322 6.30832 18.9393 10 19.777V24H14V19.777C17.6917 18.9393 20.5214 15.8322 20.9451 12H18.9291C18.4439 15.3923 15.5265 18 12 18C8.47353 18 5.55612 15.3923 5.07089 12H3.05493Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M16 4V11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11V4C8 1.79086 9.79086 0 12 0C14.2091 0 16 1.79086 16 4ZM14 4V11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11V4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z"
					fill="currentColor"
				/>
				<path
					d="M3.05493 12C3.47856 15.8322 6.30832 18.9393 10 19.777V24H14V19.777C17.6917 18.9393 20.5214 15.8322 20.9451 12H18.9291C18.4439 15.3923 15.5265 18 12 18C8.47353 18 5.55612 15.3923 5.07089 12H3.05493Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
