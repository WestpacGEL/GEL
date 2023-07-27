import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const BusinessPersonIcon = ({
	assistiveText = 'BusinessPerson',
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
					d="M18 6C18 9.315 15.315 12 12 12C8.685 12 6 9.315 6 6C6 2.685 8.685 0 12 0C15.315 0 18 2.685 18 6Z"
					fill="currentColor"
				/>
				<path
					d="M9.16577 15.221L11.7392 18.6522L10 24H14L12.2609 18.6522L14.8343 15.221C13.7919 15.0737 12.8136 15 12 15C11.1865 15 10.2082 15.0737 9.16577 15.221Z"
					fill="currentColor"
				/>
				<path
					d="M8 15.4121C4.17331 16.1271 0 17.7708 0 20.3332V23.9999H8V15.4121Z"
					fill="currentColor"
				/>
				<path
					d="M16 23.9999H24V20.3332C24 17.7708 19.8267 16.1271 16 15.4121V23.9999Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12ZM16 6C16 8.21043 14.2104 10 12 10C9.78957 10 8 8.21043 8 6C8 3.78957 9.78957 2 12 2C14.2104 2 16 3.78957 16 6Z"
					fill="currentColor"
				/>
				<path
					d="M9.16577 15.221L11.7392 18.6522L10 24H14L12.2609 18.6522L14.8343 15.221C13.7919 15.0737 12.8136 15 12 15C11.1865 15 10.2082 15.0737 9.16577 15.221Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M6 15.8682C2.85049 16.7253 0 18.2155 0 20.3332V23.9999H8V15.4121C7.3359 15.5362 6.66136 15.6882 6 15.8682ZM3.51431 18.9402C2.10763 19.6988 2 20.2401 2 20.3332V21.9999H6V17.9485C5.07065 18.2284 4.21522 18.5622 3.51431 18.9402Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M24 20.3332C24 18.2155 21.1495 16.7253 18 15.8682C17.3386 15.6882 16.6641 15.5362 16 15.4121V23.9999H24V20.3332ZM22 21.9999V20.3332C22 20.2401 21.8924 19.6988 20.4857 18.9402C19.7848 18.5622 18.9294 18.2284 18 17.9485V21.9999H22Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
