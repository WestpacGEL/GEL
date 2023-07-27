import { Icon, IconProps } from './Icon';

export const VideoIcon = ({
	assistiveText = 'Video',
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
				d="M16 4C17.1046 4 18 4.89543 18 6V9.5L24 5V19L18 14.5V18C18 19.1046 17.1046 20 16 20H2C0.89543 20 0 19.1046 0 18V6C0 4.89543 0.895431 4 2 4H16Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M0 6C0 4.89543 0.895431 4 2 4H16C17.1046 4 18 4.89543 18 6V9.5L24 5V19L18 14.5V18C18 19.1046 17.1046 20 16 20H2C0.89543 20 0 19.1046 0 18V6ZM2 6H16V18H2L2 6Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
