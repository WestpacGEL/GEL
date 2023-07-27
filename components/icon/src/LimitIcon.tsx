import { Icon, IconProps } from './Icon';

export const LimitIcon = ({
	assistiveText = 'Limit',
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
				d="M24 12C24 18.627 18.6278 24 12 24C5.37225 24 0 18.627 0 12C0 5.373 5.37225 0 12 0C18.6278 0 24 5.373 24 12ZM3.8557 6.36994L17.6301 20.1443C18.7358 19.3785 19.678 18.3933 20.3938 17.2517L6.74833 3.6062C5.6067 4.32199 4.62151 5.26423 3.8557 6.36994Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12 24C18.6278 24 24 18.627 24 12C24 5.373 18.6278 0 12 0C5.37225 0 0 5.373 0 12C0 18.627 5.37225 24 12 24ZM20.4663 17.3242C21.4379 15.7825 22 13.9569 22 12C22 6.47714 17.5229 2 12 2C10.0431 2 8.21747 2.5621 6.67579 3.53365L20.4663 17.3242ZM17.7017 20.2164L3.78362 6.29834C2.65915 7.9157 2 9.88087 2 12C2 17.5229 6.47714 22 12 22C14.1191 22 16.0843 21.3408 17.7017 20.2164Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
