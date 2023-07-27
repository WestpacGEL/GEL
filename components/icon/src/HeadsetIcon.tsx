import { Icon, IconProps } from './Icon';

export const HeadsetIcon = ({
	assistiveText = 'Headset',
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
				d="M22 21V10C22 4.47715 17.5228 0 12 0C6.47715 0 2 4.47715 2 10V17C2 18.6569 3.34315 20 5 20H8V12H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V12H16V20H20V20.25C20 21.2165 19.3604 22 18.5714 22H12V24H19C20.6569 24 22 22.6569 22 21Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M22 10V21C22 22.6569 20.6569 24 19 24H12V22H18.5714C19.3604 22 20 21.2165 20 20.25V20H16V12H20V10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10V12H8V20H5C3.34315 20 2 18.6569 2 17V10C2 4.47715 6.47715 0 12 0C17.5228 0 22 4.47715 22 10ZM4 17V14H6V18H5C4.44772 18 4 17.5523 4 17ZM18 18V14H20V18H18Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
