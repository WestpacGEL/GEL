/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { useState, useEffect } from 'react';
import { EmailIcon, GithubIcon, SlackIcon } from '@westpac/icon';
import debounce from 'lodash.debounce';

export const Footer = () => {
	const { COLORS, SPACING } = useBrand();
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
	}, 100);

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
				width: '100%',
				backgroundColor: '#fff',
				transition: 'bottom 0.4s',
				borderTop: `1px solid ${COLORS.border}`,
				borderLeft: `1px solid ${COLORS.border}`,
				display: 'flex',
				flexGrow: 0,
				flexShrink: 0,
				justifyContent: 'space-between',
				padding: SPACING(3),
				zIndex: 5,
			}}
		>
			<div>
				<span>Talk to us</span>
				<FooterIcon icon={EmailIcon} href="mailto:info@westpac.com" />
				<FooterIcon icon={SlackIcon} href="//westpac.slack.com" />
				<FooterIcon icon={GithubIcon} href="//github.com/westpacgel" />
			</div>

			<button
				css={{
					display: 'block',
					border: 0,
					background: 'transparent',
					cursor: 'pointer',
					textAlign: 'right',
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
		<a href={href}>
			<Icon css={{ marginLeft: SPACING(2) }} />
		</a>
	);
};
