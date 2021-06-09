/** @jsx jsx */

import { GEL, jsx, Global, useBrand } from '@westpac/core';
import {
	FormPod,
	Panel,
	PanelBody,
	PanelFooter,
	ContactList,
	Indicator,
	Actions,
} from '@westpac/form-pod';
import { List, Item } from '@westpac/list';
import { HeadsetIcon } from '@westpac/icon';
import { Heading } from '@westpac/heading';
import { Button } from '@westpac/button';
import { Alert } from '@westpac/alert';
import { Fragment } from 'react';

function Example({ brand }) {
	const { COLORS } = useBrand();

	// Contact detail data
	const contactItems = [
		{
			icon: HeadsetIcon,
			text: '1300 888 888',
			url: 'tel:1300888888',
			onClick: () => {},
		},
	];

	return (
		<GEL brand={brand}>
			<Global
				styles={{
					// Lets apply a background to simulate being inside the Template component
					body: {
						backgroundColor: COLORS.background,
					},
				}}
			/>

			<FormPod preheading="Preheading" heading="Heading">
				<Panel borderTop={false}>
					<Alert look="danger">
						{/* Nb. Tabindex="-1" for programmatically set focus */}
						<Heading tag="h3" tabIndex="-1">
							Please fix the 4 errors listed below
						</Heading>

						<List type="unstyled">
							<Item>
								<a href="#title">Select a title</a>
							</Item>
							<Item>
								<a href="#given-name">Enter your given name</a>
							</Item>
							<Item>
								<a href="#family-name">Enter your family name</a>
							</Item>
						</List>
					</Alert>
					<PanelBody>[PANEL CONTENT]</PanelBody>
					<PanelFooter left={<ContactList items={contactItems} />} right={<Indicator />} />
				</Panel>
				<Actions
					primary={
						<Fragment>
							<Button appearance="primary" soft size="large" block={[true, false]}>
								Back
							</Button>
							<Button appearance="primary" size="large" block={[true, false]}>
								Next
							</Button>
						</Fragment>
					}
					secondary={
						<Button appearance="faint" soft size="large" block={[true, false]}>
							Cancel
						</Button>
					}
				/>
			</FormPod>
		</GEL>
	);
}

export default Example;
