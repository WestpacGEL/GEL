import { Icon, IconProps } from './Icon';

export const DropDownIcon = ({
	assistiveText = 'DropDown',
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
			<path d="M5 8L12 16L19 8H5Z" fill="currentColor" />
		) : (
			<path d="M5 8L12 16L19 8H5Z" fill="currentColor" />
		)}
	</Icon>
);
