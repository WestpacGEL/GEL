import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ContactIcon = ({
	assistiveText = 'Contact',
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
				d="M20 2H18V0H16V2H8V0H6V2H4C2.89543 2 2 2.89543 2 4V22C2 23.1046 2.89543 24 4 24H20C21.1046 24 22 23.1046 22 22V4C22 2.89543 21.1046 2 20 2ZM6 18.46C6 15.96 9.97 14.88 12 14.88C14.03 14.88 18 15.96 18 18.47V20H6V18.46ZM15 11C15 12.65 13.65 14 12 14C10.35 14 9 12.65 9 11C9 9.35 10.35 8 12 8C13.65 8 15 9.35 15 11Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M6 18.46C6 15.96 9.97 14.88 12 14.88C14.03 14.88 18 15.96 18 18.47V20H6V18.46Z"
					fill="currentColor"
				/>
				<path
					d="M15 11C15 12.65 13.65 14 12 14C10.35 14 9 12.65 9 11C9 9.35 10.35 8 12 8C13.65 8 15 9.35 15 11Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M18 2H20C21.1046 2 22 2.89543 22 4V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V4C2 2.89543 2.89543 2 4 2H6V0H8V2H16V0H18V2ZM4 4H20V22H4V4Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
