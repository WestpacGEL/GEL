import { Icon, IconProps } from './Icon';

export const BookIcon = ({
	assistiveText = 'Book',
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
				d="M4 0C2.89543 0 2 0.89543 2 2V22C2 23.1046 2.89543 24 4 24H20C21.1046 24 22 23.1046 22 22V2C22 0.895431 21.1046 0 20 0H4ZM12 2H6V14L9 12L12 14V2Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12 2H20V22H4V2H6V14L9 12L12 14V2ZM2 2C2 0.89543 2.89543 0 4 0H20C21.1046 0 22 0.895431 22 2V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V2Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
