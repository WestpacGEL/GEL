import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const FingerprintIcon = ({
	assistiveText = 'Fingerprint',
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
					d="M18.5216 3.18422C18.6236 3.2427 18.7483 3.27488 18.8748 3.27488C19.1606 3.27488 19.4198 3.11342 19.5536 2.84581C19.7529 2.47796 19.6099 2.01535 19.2285 1.81705C16.7894 0.561643 14.5626 0 12.0176 0C9.45338 0 7.01157 0.618753 4.78029 1.83036C4.41088 2.03046 4.27203 2.50446 4.47253 2.87461C4.689 3.24587 5.14877 3.38192 5.51687 3.18253C7.50433 2.09002 9.69602 1.53695 12.0176 1.53695C14.3418 1.53695 16.2766 2.02667 18.5216 3.18422Z"
					fill="currentColor"
				/>
				<path
					d="M1.51242 9.34361C1.16084 9.09903 1.08059 8.62228 1.32702 8.26805C2.51492 6.58819 4.02695 5.26932 5.824 4.34683C9.59226 2.4027 14.4055 2.39598 18.1755 4.33484C19.9767 5.25945 21.4872 6.56799 22.6714 8.23067C22.9205 8.57323 22.8388 9.06368 22.4874 9.30814C22.1343 9.55379 21.6575 9.47354 21.4142 9.12377C20.3655 7.65552 19.0389 6.50465 17.4698 5.70267C14.1244 3.98916 9.84595 3.99243 6.51849 5.71433C4.94527 6.52408 3.61604 7.68349 2.5716 9.14414C2.44746 9.36139 2.21529 9.48177 1.95655 9.48177C1.80155 9.48177 1.64936 9.43495 1.51242 9.34361Z"
					fill="currentColor"
				/>
				<path
					d="M15.2452 23.9699C13.3416 23.4431 12.084 22.7325 10.7695 21.4421C9.08011 19.7647 8.15162 17.532 8.15162 15.1448C8.15162 13.1286 9.86549 11.4916 11.9703 11.4916C14.0752 11.4916 15.7891 13.1286 15.7891 15.1448C15.7891 16.3101 16.8077 17.2611 18.0708 17.2611C19.334 17.2611 20.3526 16.3101 20.3526 15.1448C20.3526 10.7888 16.5927 7.24729 11.9585 7.24729C8.66456 7.24729 5.65562 9.0801 4.30352 11.9114C3.8546 12.8438 3.62354 13.9406 3.62354 15.1448C3.62354 16.5035 3.82096 17.7948 4.40384 19.3491C4.55802 19.75 4.35581 20.1978 3.95912 20.335C3.56274 20.4874 3.11344 20.2797 2.97271 19.8887C2.38573 18.3194 2.09842 16.7615 2.09842 15.1448C2.09842 13.7032 2.3748 12.3881 2.91962 11.238C4.52273 7.87505 8.07444 5.69852 11.9585 5.69852C17.4345 5.69852 21.8896 9.9262 21.8896 15.133C21.8896 17.1492 20.1757 18.7862 18.0708 18.7862C15.966 18.7862 14.2521 17.1492 14.2521 15.133C14.2521 13.9677 13.2335 13.0167 11.9703 13.0167C10.7072 13.0167 9.68857 13.9677 9.68857 15.133C9.68857 17.1111 10.4526 18.9563 11.8468 20.339C12.9536 21.4342 14.0053 22.0304 15.6326 22.4806C16.0434 22.5871 16.2826 23.0129 16.1752 23.4111C16.1002 23.756 15.7871 24 15.4462 24C15.3871 24 15.3215 23.9891 15.2452 23.9699Z"
					fill="currentColor"
				/>
				<path
					d="M14.058 20.4818C12.2477 19.2546 11.1664 17.2607 11.1664 15.1448C11.1664 14.7159 11.5059 14.3764 11.9349 14.3764C12.3638 14.3764 12.7033 14.7159 12.7033 15.1448C12.7033 16.756 13.5279 18.2719 14.9189 19.2068C15.7254 19.752 16.6711 20.0158 17.8226 20.0158C18.1359 20.0158 18.6012 19.9738 19.0198 19.9005C19.4381 19.8231 19.8364 20.1028 19.9122 20.5273C19.9897 20.9456 19.7099 21.3439 19.2867 21.4194C18.742 21.5246 18.2163 21.5645 17.8226 21.5645C16.3788 21.5645 15.103 21.1987 14.058 20.4818Z"
					fill="currentColor"
				/>
				<path
					d="M8.80652 23.5224C8.93769 23.6686 9.1373 23.7517 9.34571 23.7517C9.54723 23.7517 9.74259 23.6736 9.90244 23.5283C10.2014 23.2143 10.2014 22.7404 9.91172 22.4355C8.85097 21.3609 8.42132 20.8149 7.75091 19.6103C7.04584 18.362 6.67379 16.8202 6.67379 15.1448C6.67379 12.3837 9.06352 10.132 12.0058 10.132C14.9481 10.132 17.3378 12.3837 17.3378 15.1448C17.3378 15.5738 17.6773 15.9133 18.1063 15.9133C18.5353 15.9133 18.8748 15.5738 18.8748 15.1448C18.8748 11.5331 15.79 8.59507 12.0058 8.59507C8.22158 8.59507 5.13684 11.5331 5.13684 15.1448C5.13684 17.0829 5.57191 18.8849 6.4009 20.3626C7.14774 21.7114 7.67217 22.3881 8.80652 23.5224Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M18.5215 3.18422C18.6236 3.2427 18.7482 3.27488 18.8747 3.27488C19.1606 3.27488 19.4198 3.11342 19.5536 2.84581C19.7529 2.47796 19.6098 2.01535 19.2285 1.81705C16.7894 0.561643 14.5626 0 12.0176 0C9.45335 0 7.01154 0.618753 4.78026 1.83036C4.41085 2.03046 4.272 2.50446 4.4725 2.87461C4.68897 3.24587 5.14874 3.38192 5.51684 3.18253C7.5043 2.09002 9.69599 1.53695 12.0176 1.53695C14.3418 1.53695 16.2766 2.02667 18.5215 3.18422Z"
					fill="currentColor"
				/>
				<path
					d="M1.51239 9.34361C1.16081 9.09903 1.08056 8.62228 1.32699 8.26805C2.51489 6.58819 4.02692 5.26932 5.82397 4.34683C9.59223 2.4027 14.4054 2.39598 18.1754 4.33484C19.9766 5.25945 21.4872 6.56799 22.6714 8.23067C22.9205 8.57323 22.8388 9.06368 22.4873 9.30814C22.1342 9.55379 21.6575 9.47354 21.4142 9.12377C20.3654 7.65552 19.0389 6.50465 17.4698 5.70267C14.1243 3.98916 9.84591 3.99243 6.51846 5.71433C4.94524 6.52408 3.61601 7.68349 2.57157 9.14414C2.44743 9.36139 2.21526 9.48177 1.95652 9.48177C1.80152 9.48177 1.64933 9.43495 1.51239 9.34361Z"
					fill="currentColor"
				/>
				<path
					d="M15.2452 23.9699C13.3415 23.4431 12.084 22.7325 10.7695 21.4421C9.08008 19.7647 8.15159 17.532 8.15159 15.1448C8.15159 13.1286 9.86545 11.4916 11.9703 11.4916C14.0752 11.4916 15.789 13.1286 15.789 15.1448C15.789 16.3101 16.8077 17.2611 18.0708 17.2611C19.334 17.2611 20.3526 16.3101 20.3526 15.1448C20.3526 10.7888 16.5927 7.24729 11.9585 7.24729C8.66453 7.24729 5.65559 9.0801 4.30349 11.9114C3.85457 12.8438 3.62351 13.9406 3.62351 15.1448C3.62351 16.5035 3.82093 17.7948 4.40381 19.3491C4.55799 19.75 4.35578 20.1978 3.95909 20.335C3.56271 20.4874 3.11341 20.2797 2.97268 19.8887C2.3857 18.3194 2.09839 16.7615 2.09839 15.1448C2.09839 13.7032 2.37477 12.3881 2.91959 11.238C4.5227 7.87505 8.07441 5.69852 11.9585 5.69852C17.4344 5.69852 21.8895 9.9262 21.8895 15.133C21.8895 17.1492 20.1757 18.7862 18.0708 18.7862C15.9659 18.7862 14.2521 17.1492 14.2521 15.133C14.2521 13.9677 13.2335 13.0167 11.9703 13.0167C10.7072 13.0167 9.68854 13.9677 9.68854 15.133C9.68854 17.1111 10.4526 18.9563 11.8468 20.339C12.9536 21.4342 14.0053 22.0304 15.6325 22.4806C16.0433 22.5871 16.2826 23.0129 16.1751 23.4111C16.1001 23.756 15.7871 24 15.4462 24C15.3871 24 15.3215 23.9891 15.2452 23.9699Z"
					fill="currentColor"
				/>
				<path
					d="M14.058 20.4818C12.2476 19.2546 11.1664 17.2607 11.1664 15.1448C11.1664 14.7159 11.5059 14.3764 11.9348 14.3764C12.3638 14.3764 12.7033 14.7159 12.7033 15.1448C12.7033 16.756 13.5279 18.2719 14.9189 19.2068C15.7253 19.752 16.671 20.0158 17.8225 20.0158C18.1358 20.0158 18.6011 19.9738 19.0198 19.9005C19.438 19.8231 19.8364 20.1028 19.9122 20.5273C19.9896 20.9456 19.7098 21.3439 19.2867 21.4194C18.742 21.5246 18.2163 21.5645 17.8225 21.5645C16.3788 21.5645 15.103 21.1987 14.058 20.4818Z"
					fill="currentColor"
				/>
				<path
					d="M8.80649 23.5224C8.93766 23.6686 9.13727 23.7517 9.34568 23.7517C9.5472 23.7517 9.74256 23.6736 9.90241 23.5283C10.2013 23.2143 10.2013 22.7404 9.91169 22.4355C8.85094 21.3609 8.42129 20.8149 7.75088 19.6103C7.04581 18.362 6.67376 16.8202 6.67376 15.1448C6.67376 12.3837 9.06349 10.132 12.0058 10.132C14.9481 10.132 17.3378 12.3837 17.3378 15.1448C17.3378 15.5738 17.6773 15.9133 18.1063 15.9133C18.5352 15.9133 18.8747 15.5738 18.8747 15.1448C18.8747 11.5331 15.79 8.59507 12.0058 8.59507C8.22155 8.59507 5.13681 11.5331 5.13681 15.1448C5.13681 17.0829 5.57188 18.8849 6.40087 20.3626C7.14771 21.7114 7.67214 22.3881 8.80649 23.5224Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
