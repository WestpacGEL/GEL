import { Icon, IconProps } from './Icon';

export const PlayIcon = ({
	assistiveText = 'Play',
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
			<path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
		) : (
			<path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
		)}
	</Icon>
);
