import { Icon, IconProps } from './Icon';

export const RemoveIcon = ({
	assistiveText = 'Remove',
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
			<path d="M4 11V13H20V11H4Z" fill="currentColor" />
		) : (
			<path d="M4 11V13H20V11H4Z" fill="currentColor" />
		)}
	</Icon>
);
