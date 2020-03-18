/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { EmailIcon, GithubIcon, SlackIcon } from '@westpac/icon';

export const Footer = () => {
	const { COLORS, SPACING } = useBrand();
	return (
		<div css={{ display: 'flex', justifyContent: 'space-between', padding: SPACING(3) }}>
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
		</div>
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
