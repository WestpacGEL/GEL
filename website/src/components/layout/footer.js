/** @jsx jsx */
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { useState, useEffect } from 'react';
import { EmailIcon, GithubIcon, SlackIcon } from '@westpac/icon';
import debounce from 'lodash.debounce';

export const Footer = () => {
	const { COLORS, SPACING, LAYOUT } = useBrand();
	const mq = useMediaQuery();
	const [visible, setVisible] = useState(true);

	const el = document.querySelector('main') || window;
	let prev = el.scrollTop;

	const scrollHandler = debounce(() => {
		const documentHeight = el.scrollHeight;
		if (el.scrollTop > prev && el.scrollTop + el.clientHeight > documentHeight / 2) {
			setVisible(true);
		} else if (el.scrollTop < prev && el.scrollTop < documentHeight / 2) {
			setVisible(false);
		}

		prev = el.scrollTop;
	}, 10);

	useEffect(() => {
		if (el.scrollHeight > el.clientHeight) {
			setVisible(false);
		}
	}, []);

	useEffect(() => {
		el.addEventListener('scroll', scrollHandler);
		return () => {
			el.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	return (
		<footer
			css={{
				boxSizing: 'border-box',
				position: 'fixed',
				zIndex: 5,
				height: '3.0625rem',
				lineHeight: 1,
				bottom: visible ? 0 : '-3.0625rem',
				right: 0,
				left: 0,
				backgroundColor: '#fff',
				borderTop: `1px solid ${COLORS.border}`,
				display: 'flex',
				flex: '0 0 auto',
				justifyContent: 'space-between',
				padding: '0.6875rem 1.125rem 0.8125rem 1.5rem',
				transition: 'bottom 0.4s ease',

				[`@media only screen and (min-width: ${LAYOUT.breakpoints.lg}px)`]: {
					left: 300,
				},
			}}
		>
			<div css={{ display: 'flex', alignItems: 'center' }}>
				<span
					css={mq({
						display: ['none', null, 'inline-block'],
						marginRight: [null, null, '1.125rem'],
					})}
				>
					Talk to us
				</span>
				<ContactIconLink icon={EmailIcon} href="mailto:gel@westpac.com.au" />
				<ContactIconLink icon={SlackIcon} href="//westpac-digital.slack.com" />
				<ContactIconLink icon={GithubIcon} href="//github.com/WestpacGEL" />
			</div>

			<button
				css={{
					display: 'block',
					border: 0,
					background: 'transparent',
					cursor: 'pointer',
					textAlign: 'right',
					padding: '0 !important',
				}}
				onClick={(e) => {
					e.preventDefault();
					const el = document.querySelector('main') || window;
					el.scroll({
						top: 0,
						left: 0,
						behavior: 'smooth',
					});
				}}
			>
				Top <span css={{ color: COLORS.primary }}>&uarr;</span>
			</button>
		</footer>
	);
};

const ContactIconLink = ({ icon: Icon, href }) => (
	<a
		href={href}
		target="_blank"
		css={{
			display: 'inline-block',
			lineHeight: 1,
			'& + &': {
				marginLeft: '0.75rem',
			},
		}}
	>
		<Icon />
	</a>
);
