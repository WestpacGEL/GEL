import { Icon, IconProps } from './Icon';

export const GenericFileIcon = ({
	assistiveText = 'GenericFile',
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
				d="M2 2C2 0.89543 2.89543 0 4 0H16L22 6V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V2ZM16 2L20 6H16V2ZM6 12H18V10H6V12ZM18 16H6V14H18V16ZM6 20H18V18H6V20Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M2 2C2 0.89543 2.89543 0 4 0H16L22 6V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V2ZM4 2H16V6H20V22H4V2ZM18 12H6V10H18V12ZM6 16H18V14H6V16ZM18 20H6V18H18V20Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
