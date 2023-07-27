import { Icon, IconProps } from './Icon';

export const WineGlassIcon = ({
	assistiveText = 'WineGlass',
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
				d="M20 8C20 12.0796 16.9463 15.446 13 15.9381V22H18V24H6V22H11V15.9381C7.05369 15.446 4 12.0796 4 8V0H20V8ZM18 7H6V2H18V7Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M20 8C20 12.0796 16.9463 15.446 13 15.9381V22H18V24H6V22H11V15.9381C7.05369 15.446 4 12.0796 4 8V0H20V8ZM17.917 9H6.08296C6.55904 11.8377 9.027 14 12 14C14.973 14 17.441 11.8377 17.917 9ZM18 7H6V2H18V7Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
