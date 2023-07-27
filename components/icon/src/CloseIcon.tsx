import { Icon, IconProps } from './Icon';

export const CloseIcon = ({
	assistiveText = 'Close',
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
				d="M5.41421 4L12 10.5858L18.5858 4L20 5.41421L13.4142 12L20 18.5858L18.5858 20L12 13.4142L5.41421 20L4 18.5858L10.5858 12L4 5.41421L5.41421 4Z"
				fill="currentColor"
			/>
		) : (
			<path
				d="M5.41421 4L12 10.5858L18.5858 4L20 5.41421L13.4142 12L20 18.5858L18.5858 20L12 13.4142L5.41421 20L4 18.5858L10.5858 12L4 5.41421L5.41421 4Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
