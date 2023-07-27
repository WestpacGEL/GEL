import { Icon, IconProps } from './Icon';

export const ExpandMoreIcon = ({
	assistiveText = 'ExpandMore',
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
				d="M12 13.5879L5.41218 7.00006L4 8.41223L12 16.4122L20 8.41218L18.5878 7L12 13.5879Z"
				fill="currentColor"
			/>
		) : (
			<path
				d="M12 13.5879L5.41218 7.00006L4 8.41223L12 16.4122L20 8.41218L18.5878 7L12 13.5879Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
