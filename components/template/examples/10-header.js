import React from 'react';
import { Global, useTheme } from '@westpac/core';
import {
	Header,
	HeaderRight,
	HeaderButton,
	HeaderLogo,
	HeaderContact,
	HeaderContactText,
	Hide,
} from '../src';
import {
	MultibrandSmallLogo,
	MultibrandSmallCenterLogo,
	MultibrandLargeLogo,
} from '@westpac/symbol';
import {
	HamburgerMenuIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	HouseIcon,
	HelpIcon,
	TelephoneIcon,
	LiveChatIcon,
} from '@westpac/icon';
import { Button, ButtonWrap } from '@westpac/button';

export default () => {
	const { COLORS } = useTheme();

	return (
		<>
			<Global
				styles={{
					// Lets apply a background to simulate being inside the Template component
					body: {
						backgroundColor: COLORS.background,
					},
				}}
			/>

			<h2>Standard</h2>

			<h3>Simple header (fixed in XS)</h3>
			<Header fixed={[true, false]}>
				<HeaderLogo
					href="#0"
					logo={[<MultibrandSmallLogo label="" />, <MultibrandLargeLogo label="" />]}
					srOnlyText="Go to home"
				/>
			</Header>

			<h3>Header with right side buttons</h3>
			<Header>
				<HeaderButton href="#0" icon={ArrowLeftIcon} srOnlyText="Menu" />

				<HeaderLogo
					href="#0"
					logo={[<MultibrandSmallLogo label="" />, <MultibrandLargeLogo label="" />]}
					srOnlyText="Go to home"
				/>

				<HeaderRight>
					<ButtonWrap>
						<Button appearance="link" size={['small', 'medium']}>
							Help
						</Button>
						<Button appearance="faint" soft size={['small', 'medium']}>
							Sign out
						</Button>
					</ButtonWrap>
				</HeaderRight>
			</Header>

			<h3>Header with left header buttons and centred logo (in XS)</h3>
			<Header>
				<HeaderButton href="#0" icon={ArrowLeftIcon} srOnlyText="Back to previous step" />

				<HeaderLogo
					href="#0"
					logo={[<MultibrandSmallCenterLogo label="" />, <MultibrandLargeLogo label="" />]}
					center={[true, false]}
					srOnlyText="Go to home"
				/>

				<HeaderRight>
					<ButtonWrap>
						<Button appearance="faint" soft size={['small', 'medium']}>
							Save &amp; exit
						</Button>
					</ButtonWrap>
				</HeaderRight>
			</Header>

			<h3>Header with left & right header buttons</h3>
			<Header>
				<HeaderButton href="#0" icon={ArrowLeftIcon} srOnlyText="Back to previous step" />
				<HeaderButton href="#0" icon={HouseIcon} srOnlyText="Go to home" />

				<HeaderLogo
					href="#0"
					logo={[<MultibrandSmallLogo label="" />, <MultibrandLargeLogo label="" />]}
					srOnlyText="Go to home"
				/>

				<HeaderRight>
					<HeaderButton href="#0" icon={HelpIcon} srOnlyText="Help" />
					<HeaderButton href="#0" icon={ArrowRightIcon} srOnlyText="Go to previous step" />
				</HeaderRight>
			</Header>

			<h3>Header with 'Call us'</h3>
			<Header>
				<HeaderButton href="#0" icon={ArrowLeftIcon} srOnlyText="Back to previous step" />

				<HeaderLogo
					href="#0"
					logo={[<MultibrandSmallLogo label="" />, <MultibrandLargeLogo label="" />]}
					srOnlyText="Go to home"
				/>

				<HeaderRight>
					<HeaderContact href="tel:1300130961" icon={TelephoneIcon}>
						<HeaderContactText>Call us on</HeaderContactText>
						<HeaderContactText accent>1300 130 961</HeaderContactText>
					</HeaderContact>
				</HeaderRight>
			</Header>

			<h3>Header with 'LiveChat'</h3>
			<Header>
				<HeaderButton href="#0" icon={ArrowLeftIcon} srOnlyText="Back to previous step" />

				<HeaderLogo
					href="#0"
					logo={[<MultibrandSmallLogo label="" />, <MultibrandLargeLogo label="" />]}
					srOnlyText="Go to home"
				/>

				<HeaderRight>
					<HeaderContact href="#0" icon={LiveChatIcon}>
						<HeaderContactText accent>LiveChat</HeaderContactText>
						<HeaderContactText>Online now</HeaderContactText>
					</HeaderContact>
				</HeaderRight>
			</Header>
		</>
	);
};
