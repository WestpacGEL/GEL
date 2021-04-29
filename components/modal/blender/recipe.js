import { GEL, titleCase } from '@westpac/core';
import React from 'react';

import { Modal, Body, Footer } from '../src/blender';
import { Button, blenderIcon } from '@westpac/button';

import { blenderModalDialog } from '../src/overrides/modalDialog';
import { blenderModalContent } from '../src/overrides/modalContent';
import { blenderCloseBtn } from '../src/overrides/closeBtn';
import { blenderHeading } from '../src/overrides/heading';
import { blenderModal } from '../src/overrides/modal';
import { blenderBody } from '../src/overrides/body';
import { blenderBackdrop } from '../src/overrides/backdrop';

const sizes = ['small', 'medium', 'large'];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/modal'] = {
		Modal: {
			component: blenderModal.component,
			styles: blenderModal.styles,
		},
		ModalDialog: {
			component: blenderModalDialog.component,
			styles: blenderModalDialog.styles,
		},
		ModalContent: {
			component: blenderModalContent.component,
		},
		CloseBtn: {
			component: blenderCloseBtn.component,
		},
		Heading: {
			component: blenderHeading.component,
		},
		Body: {
			component: blenderBody.component,
		},
		Backdrop: {
			component: blenderBackdrop.component,
			styles: blenderBackdrop.styles,
		},
	};
	overridesWithTokens['@westpac/button'] = {
		Icon: {
			component: blenderIcon.component,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			{/* Default */}
			<Modal heading="Text">
				<Body>Text</Body>
				<Footer>Text</Footer>
			</Modal>

			{/* Sizes */}
			{sizes.map((size) => (
				<Modal key={size} heading="Text" size={size}>
					<Body>Text</Body>
				</Modal>
			))}

			{/* Open state */}
			<Modal heading="Text" open>
				<Body>Text</Body>
			</Modal>

			{/* Button */}
			<Button>Text</Button>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/modal'] = {
		Modal: {
			component: blenderModal.component,
			attributes: blenderModal.attributes,
		},
		ModalDialog: {
			component: blenderModalDialog.component,
		},
		ModalContent: {
			component: blenderModalContent.component,
		},
		CloseBtn: {
			component: blenderCloseBtn.component,
			attributes: blenderCloseBtn.attributes,
		},
		Heading: {
			component: blenderHeading.component,
			attributes: blenderHeading.attributes,
		},
		Body: {
			component: blenderBody.component,
		},
		Backdrop: {
			component: () => null, //not required, jQuery rendered
		},
	};
	overridesWithTokens['@westpac/button'] = {
		Icon: {
			component: blenderIcon.component,
		},
	};

	return [
		// Default
		{
			heading: 'Default modal',
			component: () => {
				return (
					<GEL brand={overridesWithTokens}>
						<Button data-modal="default-modal">Open</Button>
						<Modal id="default-modal" heading="Your modal heading">
							<Body>Your modal content</Body>
						</Modal>
					</GEL>
				);
			},
		},

		// Sizes
		...sizes.map((size, i) => ({
			...(i === 0 && { heading: 'Sizes' }),
			subheading: `${titleCase(size)} modal`,
			component: () => {
				return (
					<GEL brand={overridesWithTokens}>
						<Button data-modal={`${size}-modal`}>Open</Button>
						<Modal id={`${size}-modal`} heading={`Your ${size} modal heading`} size={size}>
							<Body>Your {size} modal content</Body>
						</Modal>
					</GEL>
				);
			},
		})),

		// Footer
		{
			heading: 'Modal footer',
			component: () => {
				return (
					<GEL brand={overridesWithTokens}>
						<Button data-modal="footer-modal">Open</Button>
						<Modal id="footer-modal" heading="Your modal heading">
							<Body>A modal with a footer</Body>
							<Footer>
								<Button data-modal="footer-modal">Close</Button>
							</Footer>
						</Modal>
					</GEL>
				);
			},
		},
	];
}
