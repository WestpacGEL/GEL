import { Icon, IconProps } from './Icon';

export const MoreVertIcon = ({
	assistiveText = 'MoreVert',
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
				d="M12 7C13.375 7 14.5 5.875 14.5 4.5C14.5 3.125 13.375 2 12 2C10.625 2 9.5 3.125 9.5 4.5C9.5 5.875 10.625 7 12 7ZM12 9.5C10.625 9.5 9.5 10.625 9.5 12C9.5 13.375 10.625 14.5 12 14.5C13.375 14.5 14.5 13.375 14.5 12C14.5 10.625 13.375 9.5 12 9.5ZM9.5 19.5C9.5 18.125 10.625 17 12 17C13.375 17 14.5 18.125 14.5 19.5C14.5 20.875 13.375 22 12 22C10.625 22 9.5 20.875 9.5 19.5Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12 7C13.375 7 14.5 5.875 14.5 4.5C14.5 3.125 13.375 2 12 2C10.625 2 9.5 3.125 9.5 4.5C9.5 5.875 10.625 7 12 7ZM12 9.5C10.625 9.5 9.5 10.625 9.5 12C9.5 13.375 10.625 14.5 12 14.5C13.375 14.5 14.5 13.375 14.5 12C14.5 10.625 13.375 9.5 12 9.5ZM9.5 19.5C9.5 18.125 10.625 17 12 17C13.375 17 14.5 18.125 14.5 19.5C14.5 20.875 13.375 22 12 22C10.625 22 9.5 20.875 9.5 19.5Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
