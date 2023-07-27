import { Icon, IconProps } from './Icon';

export const EmailIcon = ({
	assistiveText = 'Email',
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
				d="M2 2H22C23.1046 2 24 2.89543 24 4V20C24 21.1046 23.1046 22 22 22H2C0.89543 22 0 21.1046 0 20V4C0 2.89543 0.89543 2 2 2ZM2 6.40625V8.68443L12 14.139L22 8.68443V6.40625L12 11.8608L2 6.40625Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M2 2H22C23.1046 2 24 2.89543 24 4V20C24 21.1046 23.1046 22 22 22H2C0.89543 22 0 21.1046 0 20V4C0 2.89543 0.89543 2 2 2ZM2 4H22V6.40633L12 11.8609L2 6.40633V4ZM2 8.68451V20H22V8.68451L12 14.1391L2 8.68451Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
