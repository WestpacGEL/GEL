import { Icon, IconProps } from './Icon';

export const CameraIcon = ({
	assistiveText = 'Camera',
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
				d="M2 4H6L8 2H16L18 4H22C23.1046 4 24 4.89543 24 6V20C24 21.1046 23.1046 22 22 22H2C0.89543 22 0 21.1046 0 20V6C0 4.89543 0.89543 4 2 4ZM7 13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M6.82843 6H2V20H22V6H17.1716L15.1716 4H8.82843L6.82843 6ZM8 2L6 4H2C0.89543 4 0 4.89543 0 6V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V6C24 4.89543 23.1046 4 22 4H18L16 2H8ZM12 19C8.68629 19 6 16.3137 6 13C6 9.68629 8.68629 7 12 7C15.3137 7 18 9.68629 18 13C18 16.3137 15.3137 19 12 19ZM12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13C16 15.2091 14.2091 17 12 17Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
