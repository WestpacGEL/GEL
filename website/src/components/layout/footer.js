/** @jsx jsx */
import { useState, useEffect } from 'react';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import { EmailIcon, GithubIcon, SlackIcon } from '@westpac/icon';
import { usePageContext } from '../providers/pageContext';
import throttle from 'lodash.throttle';

import { Icon } from '../../../../components/icon/src/Icon';

const UpIcon = (props) => {
	const { COLORS } = useBrand();
	return (
		<Icon assistiveText="Up arrow" {...props}>
			<path
				fill={COLORS.primary}
				fillRule="evenodd"
				d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
			/>
		</Icon>
	);
};

export const Footer = () => {
	const { COLORS } = useBrand();
	const mq = useMediaQuery();
	const [visible, setVisible] = useState(true);
	const { pageHeadingRef } = usePageContext();

	useEffect(() => {
		const setFooter = () => {
			const windowHeight = window.clientHeight;
			const documentHeight = window.scrollHeight;
			const scroll = window.scrollY;

			setVisible(
				windowHeight >= documentHeight ||
					scroll > 600 ||
					scroll + windowHeight > documentHeight - 100
			);
		};
		setFooter();

		const scrollHandler = throttle(setFooter, 200);

		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	const goToTopClickHandler = (e) => {
		e.preventDefault();
		pageHeadingRef.current.focus();
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<footer
			css={mq({
				boxSizing: 'border-box',
				flex: 'none',
				position: 'fixed',
				zIndex: 5,
				height: '3.0625rem',
				lineHeight: 1,
				bottom: visible ? 0 : '-3.0625rem',
				right: 0,
				left: [0, null, null, null, 300],
				backgroundColor: '#fff',
				borderTop: `1px solid ${COLORS.border}`,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				padding: '0.375rem 1.125rem 0.4375rem 1.5rem',
				transition: 'bottom 0.4s ease',
			})}
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
				<ContactIconLink
					icon={EmailIcon}
					href="mailto:gel@westpac.com.au"
					assistiveText="Talk to us via email"
				/>
				<ContactIconLink
					icon={SlackIcon}
					href="//westpac-digital.slack.com"
					assistiveText="Talk to us on Slack"
				/>
				<ContactIconLink
					icon={GithubIcon}
					href="//github.com/WestpacGEL"
					assistiveText="Talk to us on GitHub"
				/>
			</div>

			<Button
				href="#0"
				look="link"
				size="large"
				iconAfter={UpIcon}
				assistiveText="Go to top"
				onClick={goToTopClickHandler}
				overrides={{
					Button: {
						styles: (styles) => ({
							...styles,
							color: COLORS.text,
							textDecoration: 'none',
						}),
					},
				}}
			>
				Top
			</Button>
		</footer>
	);
};

const ContactIconLink = ({ icon: Icon, href, assistiveText }) => (
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
		<Icon assistiveText={assistiveText} />
	</a>
);
