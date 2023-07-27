import { Icon, IconProps } from './Icon';

export const MoreHorizIcon = ({
	assistiveText = 'MoreHoriz',
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
				d="M4.5 9.5C3.125 9.5 2 10.625 2 12C2 13.375 3.125 14.5 4.5 14.5C5.875 14.5 7 13.375 7 12C7 10.625 5.875 9.5 4.5 9.5ZM19.5 9.5C18.125 9.5 17 10.625 17 12C17 13.375 18.125 14.5 19.5 14.5C20.875 14.5 22 13.375 22 12C22 10.625 20.875 9.5 19.5 9.5ZM9.5 12C9.5 10.625 10.625 9.5 12 9.5C13.375 9.5 14.5 10.625 14.5 12C14.5 13.375 13.375 14.5 12 14.5C10.625 14.5 9.5 13.375 9.5 12Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M4.5 9.5C3.125 9.5 2 10.625 2 12C2 13.375 3.125 14.5 4.5 14.5C5.875 14.5 7 13.375 7 12C7 10.625 5.875 9.5 4.5 9.5ZM19.5 9.5C18.125 9.5 17 10.625 17 12C17 13.375 18.125 14.5 19.5 14.5C20.875 14.5 22 13.375 22 12C22 10.625 20.875 9.5 19.5 9.5ZM9.5 12C9.5 10.625 10.625 9.5 12 9.5C13.375 9.5 14.5 10.625 14.5 12C14.5 13.375 13.375 14.5 12 14.5C10.625 14.5 9.5 13.375 9.5 12Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
