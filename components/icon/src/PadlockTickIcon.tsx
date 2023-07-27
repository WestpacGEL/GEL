import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const PadlockTickIcon = ({
	assistiveText = 'PadlockTick',
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
				d="M4 8H6V6C6 2.68629 8.68629 0 12 0C15.3137 0 18 2.68629 18 6V8H20C21.1046 8 22 8.89543 22 10V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V10C2 8.89543 2.89543 8 4 8ZM16 6V8H8V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6ZM10.7021 17.4679L16.585 11.585L17.995 13.005L10.7021 20.2979L6.70211 16.2979L8.11211 14.8879L10.7021 17.4679Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M10.7021 17.4679L16.585 11.585L17.995 13.005L10.7021 20.2979L6.70211 16.2979L8.11211 14.8879L10.7021 17.4679Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M6 8H4C2.89543 8 2 8.89543 2 10V22C2 23.1046 2.89543 24 4 24H20C21.1046 24 22 23.1046 22 22V10C22 8.89543 21.1046 8 20 8H18V6C18 2.68629 15.3137 0 12 0C8.68629 0 6 2.68629 6 6V8ZM16 8V6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6V8H16ZM20 10V22H4V10H20Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
