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
			<div>top &uarr;</div>
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
