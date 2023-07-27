import { Icon, IconProps } from './Icon';

export const ListIcon = ({
	assistiveText = 'List',
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
				d="M2 9H4V7H2V9ZM4 13H2V11H4V13ZM4 17H2V15H4V17ZM22 13H6V11H22V13ZM6 17H22V15H6V17ZM6 9V7H22V9H6Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M2 9H4V7H2V9ZM4 13H2V11H4V13ZM4 17H2V15H4V17ZM22 13H6V11H22V13ZM6 17H22V15H6V17ZM6 9V7H22V9H6Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
