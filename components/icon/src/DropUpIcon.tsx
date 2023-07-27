import { Icon, IconProps } from './Icon';

export const DropUpIcon = ({
	assistiveText = 'DropUp',
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
			<path d="M19 16L12 8L5 16L19 16Z" fill="currentColor" />
		) : (
			<path d="M19 16L12 8L5 16L19 16Z" fill="currentColor" />
		)}
	</Icon>
);
