import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const PendingIcon = ({
	assistiveText = 'Pending',
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
					d="M20 16.5L24 12H21C21 6.20101 16.299 1.5 10.5 1.5C4.70101 1.5 0 6.20101 0 12C0 17.799 4.70101 22.5 10.5 22.5C13.0572 22.5 15.4009 21.5859 17.2221 20.0665L15.9417 18.53C14.4674 19.76 12.5701 20.5 10.5 20.5C5.80558 20.5 2 16.6944 2 12C2 7.30558 5.80558 3.5 10.5 3.5C15.1944 3.5 19 7.30558 19 12H16L20 16.5Z"
					fill="currentColor"
				/>
				<path
					d="M10.5 14.5C11.8807 14.5 13 13.3807 13 12C13 10.6193 11.8807 9.5 10.5 9.5C9.11929 9.5 8 10.6193 8 12C8 13.3807 9.11929 14.5 10.5 14.5Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M20 16.5L24 12H21C21 6.20101 16.299 1.5 10.5 1.5C4.70101 1.5 0 6.20101 0 12C0 17.799 4.70101 22.5 10.5 22.5C13.0572 22.5 15.4009 21.5859 17.2221 20.0665L15.9417 18.53C14.4674 19.76 12.5701 20.5 10.5 20.5C5.80558 20.5 2 16.6944 2 12C2 7.30558 5.80558 3.5 10.5 3.5C15.1944 3.5 19 7.30558 19 12H16L20 16.5Z"
					fill="currentColor"
				/>
				<path
					d="M10.5 14.5C11.8807 14.5 13 13.3807 13 12C13 10.6193 11.8807 9.5 10.5 9.5C9.11929 9.5 8 10.6193 8 12C8 13.3807 9.11929 14.5 10.5 14.5Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
