import { Icon, IconProps } from './Icon';

export const MessageIcon = ({
	assistiveText = 'Message',
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
				d="M3.63636 13L0 23L24 12L0 1L3.63636 11H12C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13H3.63636Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M0 23L4 12L0 1L24 12L0 23ZM5.76449 11L3.51378 4.81055L19.1999 12L3.51378 19.1895L5.76449 13H12C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11H5.76449Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
