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
				position: 'fixed',
				bottom: visible ? 0 : '-65px',
				right: 0,
				left: 0,
				backgroundColor: '#fff',
				transition: 'bottom 0.4s',
				borderTop: `1px solid ${COLORS.border}`,
				display: 'flex',
				flexGrow: 0,
				flexShrink: 0,
				justifyContent: 'space-between',
				padding: SPACING(3),
				zIndex: 5,

				[`@media only screen and (min-width: ${LAYOUT.breakpoints.xl}px)`]: {
					left: '300px',
				},
			}}
		>
			<div>
				<span css={mq({ display: ['none', null, 'inline'] })}>Talk to us</span>
				<FooterIcon icon={EmailIcon} href="mailto:gel@westpac.com.au" />
				<FooterIcon icon={SlackIcon} href="//westpac-digital.slack.com" />
				<FooterIcon icon={GithubIcon} href="//github.com/WestpacGEL" />
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
				onClick={e => {
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

const FooterIcon = ({ icon: Icon, href }) => {
	const { SPACING } = useBrand();
	return (
		<a href={href} target="_blank">
			<Icon css={{ marginLeft: SPACING(2) }} />
		</a>
	);
};
