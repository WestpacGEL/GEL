/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Header } from '@westpac/header';
import { Button } from '@westpac/button';
import { TelephoneIcon, LiveChatIcon } from '@westpac/icon';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title, Hr } from '../../../../helpers/demos';

const Wrapper = (props) => (
	<div css={{ backgroundColor: 'rgba(243,244,246,0.4)', padding: '12px' }} {...props} />
);

const Link = (props) => (
	<Button look="link" css={{ textDecoration: 'none', marginRight: '0.3125rem' }} {...props} />
);

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Wrapper>
				<Title>Simple basic header</Title>
				<Header />
				<Hr />
				<Title>No header button with right side button (‘Sign out’)</Title>
				<Header>
					<Button look="faint" soft>
						Sign out
					</Button>
				</Header>
				<Hr />
				<Title>
					{'Header button left (<) with centered logo (XS only) and right side button (‘Sign out’)'}
				</Title>
				<Header logoCenter leftIcon="arrow">
					<Button look="faint" soft>
						Sign out
					</Button>
				</Header>
				<Hr />
				<Title>
					{
						'Header button left hamburger (☰ XS only) and two right side buttons (‘Help’ & ‘Sign out’)'
					}
				</Title>
				<Header leftIcon="hamburger">
					<Link>Help</Link>
					<Button look="faint" soft>
						Sign out
					</Button>
				</Header>
				<Hr />
				<Title>{`No header button and ‘Call us’`}</Title>
				<Header>
					<a href="tel:1300130961">
						<TelephoneIcon />
					</a>
				</Header>
				<Hr />
				<Title>{`No header button and ‘LiveChat’`}</Title>
				<Header>
					<a href="#0">
						<LiveChatIcon />
					</a>
				</Header>
			</Wrapper>
		</Playground>
	);
};

export default Demo;
