import { Icon, IconProps } from './Icon';

export const DesktopIcon = ({
	assistiveText = 'Desktop',
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
				d="M18 23.5L15.5 22L14.8333 20H22C23.1046 20 24 19.1046 24 18V2C24 0.89543 23.1046 0 22 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H9.16667L8.5 22L6 23.5V24H18V23.5ZM22 16H2V2H22V16Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M18 23.5L15.5 22L14.8333 20H22C23.1046 20 24 19.1046 24 18V2C24 0.89543 23.1046 0 22 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H9.16667L8.5 22L6 23.5V24H18V23.5ZM22 16H2V2H22V16Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
