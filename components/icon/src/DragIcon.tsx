import { Icon, IconProps } from './Icon';

export const DragIcon = ({
	assistiveText = 'Drag',
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
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M4 9H20V11H4V9ZM20 15H4V13H20V15Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M4 9H20V11H4V9ZM20 15H4V13H20V15Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
