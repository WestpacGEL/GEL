import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const CompassIcon = ({
	assistiveText = 'Compass',
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
			<Fragment>
				<path
					d="M12 13.5C11.1712 13.5 10.5 12.8288 10.5 12C10.5 11.1712 11.1712 10.5 12 10.5C12.8288 10.5 13.5 11.1712 13.5 12C13.5 12.8288 12.8288 13.5 12 13.5Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12 24C18.6278 24 24 18.627 24 12C24 5.373 18.6278 0 12 0C5.37225 0 0 5.373 0 12C0 18.627 5.37225 24 12 24ZM14.25 9.75L6 6L9.75 14.25L18 18L14.25 9.75Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M14.25 9.75L6 6L9.75 14.25L18 18L14.25 9.75ZM10.5 12C10.5 12.8287 11.1713 13.5 12 13.5C12.8287 13.5 13.5 12.8287 13.5 12C13.5 11.1713 12.8287 10.5 12 10.5C11.1713 10.5 10.5 11.1713 10.5 12Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12 24C18.6278 24 24 18.627 24 12C24 5.373 18.6278 0 12 0C5.37225 0 0 5.373 0 12C0 18.627 5.37225 24 12 24ZM2 12C2 6.47714 6.47714 2 12 2C17.5229 2 22 6.47714 22 12C22 17.5229 17.5229 22 12 22C6.47714 22 2 17.5229 2 12Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
