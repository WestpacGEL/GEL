import { Icon, IconProps } from './Icon';

export const StarHalfIcon = ({
	assistiveText = 'StarHalf',
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
				d="M9 9L12 0L15 9H24L16.4993 14.25L19.5 23.25L12 17.2493L4.5 23.25L7.5 14.25L0 9H9ZM12 15.3293L16.4707 18.9053L14.7232 13.6628L19.2412 10.4993H13.9193L12 4.743V15.3293Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M9 9L12 0L15 9H24L16.4993 14.25L19.5 23.25L12 17.2493L4.5 23.25L7.5 14.25L0 9H9ZM12 15.3293L16.4707 18.9053L14.7232 13.6628L19.2412 10.4993H13.9193L12 4.743V15.3293Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
