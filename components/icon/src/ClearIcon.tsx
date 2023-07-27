import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ClearIcon = ({
	assistiveText = 'Clear',
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
				d="M12 24C18.6278 24 24 18.627 24 12C24 5.373 18.6278 0 12 0C5.37225 0 0 5.373 0 12C0 18.627 5.37225 24 12 24ZM8.46447 7.05018L12 10.5857L15.5355 7.05018L16.9497 8.4644L13.4142 11.9999L16.9497 15.5355L15.5355 16.9497L12 13.4141L8.46447 16.9497L7.05025 15.5355L10.5858 11.9999L7.05025 8.4644L8.46447 7.05018Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M8.46447 7.05018L12 10.5857L15.5355 7.05018L16.9497 8.4644L13.4142 11.9999L16.9497 15.5355L15.5355 16.9497L12 13.4141L8.46447 16.9497L7.05025 15.5355L10.5858 11.9999L7.05025 8.4644L8.46447 7.05018Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M24 12C24 18.627 18.6278 24 12 24C5.37225 24 0 18.627 0 12C0 5.373 5.37225 0 12 0C18.6278 0 24 5.373 24 12ZM22 12C22 17.5225 17.5231 22 12 22C6.4769 22 2 17.5225 2 12C2 6.47749 6.4769 2 12 2C17.5231 2 22 6.47749 22 12Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
