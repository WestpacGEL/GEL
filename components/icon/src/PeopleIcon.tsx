import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const PeopleIcon = ({
	assistiveText = 'People',
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
					d="M14 7C14 4.2375 11.7625 2 9 2C6.2375 2 4 4.2375 4 7C4 9.7625 6.2375 12 9 12C11.7625 12 14 9.7625 14 7Z"
					fill="currentColor"
				/>
				<path
					d="M15 12C14.6574 12 14.3229 11.9656 13.9998 11.9C15.2372 10.6376 16 8.90816 16 7C16 5.09184 15.2372 3.36242 13.9998 2.09996C14.3229 2.03441 14.6574 2 15 2C17.7625 2 20 4.2375 20 7C20 9.7625 17.7625 12 15 12Z"
					fill="currentColor"
				/>
				<path
					d="M24 18C24 16.016 20.6642 14.7663 17.7224 14.2593C19.1127 15.2143 20 16.4655 20 18V22H24V18Z"
					fill="currentColor"
				/>
				<path
					d="M0 22V18C0 15.34 5.99625 14 9 14C12.0037 14 18 15.34 18 18V22H0Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 18V22H18V18C18 15.34 12.0037 14 9 14C5.99625 14 0 15.34 0 18ZM16 18.0569V20H2V18.0569C2.0265 18.0148 2.09443 17.9286 2.25237 17.799C2.6116 17.5043 3.2155 17.1818 4.04451 16.8866C5.69649 16.2984 7.719 16 9 16C10.281 16 12.3035 16.2984 13.9555 16.8866C14.7845 17.1818 15.3884 17.5043 15.7476 17.799C15.9056 17.9286 15.9735 18.0148 16 18.0569ZM1.98507 18.0869C1.98507 18.0869 1.98593 18.0818 1.99143 18.0715C1.98846 18.0818 1.98507 18.0869 1.98507 18.0869ZM16.0149 18.0869C16.0149 18.0869 16.0115 18.0818 16.0086 18.0715C16.0141 18.0818 16.0149 18.0869 16.0149 18.0869Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M9 2C11.7625 2 14 4.2375 14 7C14 9.7625 11.7625 12 9 12C6.2375 12 4 9.7625 4 7C4 4.2375 6.2375 2 9 2ZM9 4C10.6579 4 12 5.34207 12 7C12 8.65793 10.6579 10 9 10C7.34207 10 6 8.65793 6 7C6 5.34207 7.34207 4 9 4Z"
					fill="currentColor"
				/>
				<path
					d="M13.9998 11.9C14.3229 11.9656 14.6574 12 15 12C17.7625 12 20 9.7625 20 7C20 4.2375 17.7625 2 15 2C14.6574 2 14.3229 2.03441 13.9998 2.09996C15.2372 3.36242 16 5.09184 16 7C16 8.90816 15.2372 10.6376 13.9998 11.9Z"
					fill="currentColor"
				/>
				<path
					d="M17.7224 14.2598C20.6643 14.7668 24 16.0165 24 18.0005V22.0005H20V18.0005C20 16.4659 19.1127 15.2148 17.7224 14.2598Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
