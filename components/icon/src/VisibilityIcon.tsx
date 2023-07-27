import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const VisibilityIcon = ({
	assistiveText = 'Visibility',
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
				d="M12 4C6.545 4 1.887 7.317 0 12C1.887 16.683 6.545 20 12 20C17.455 20 22.113 16.683 24 12C22.113 7.317 17.455 4 12 4ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12 20C17.455 20 22.113 16.683 24 12C22.113 7.317 17.455 4 12 4C6.545 4 1.887 7.317 0 12C1.887 16.683 6.545 20 12 20ZM12 18C7.66904 18 3.9508 15.5387 2.19096 12C3.9508 8.46132 7.66904 6 12 6C16.331 6 20.0492 8.46132 21.809 12C20.0492 15.5387 16.331 18 12 18Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
