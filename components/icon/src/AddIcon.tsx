import { Icon, IconProps } from './Icon';

export const AddIcon = ({
	assistiveText = 'Add',
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
			<path d="M11 11H4V13H11V20H13V13H20V11H13V4H11V11Z" fill="currentColor" />
		) : (
			<path d="M11 11H4V13H11V20H13V13H20V11H13V4H11V11Z" fill="currentColor" />
		)}
	</Icon>
);
