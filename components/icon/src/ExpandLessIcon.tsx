import { Icon, IconProps } from './Icon';

export const ExpandLessIcon = ({
	assistiveText = 'ExpandLess',
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
				d="M12 9.82435L18.5878 16.4121L20 15L12 7L4 15L5.41218 16.4122L12 9.82435Z"
				fill="currentColor"
			/>
		) : (
			<path
				d="M12 9.82435L18.5878 16.4121L20 15L12 7L4 15L5.41218 16.4122L12 9.82435Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
