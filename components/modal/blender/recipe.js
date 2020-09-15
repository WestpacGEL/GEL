import { GEL } from '@westpac/core';
import React from 'react';

import { Modal, Body, Footer } from '../src/blender';
import { Button } from '@westpac/button';

import { blenderCloseBtn } from '../src/overrides/closeBtn';
import { blenderHeading } from '../src/overrides/heading';
import { blenderModal } from '../src/overrides/modal';
import { blenderModalWrapper } from '../src/blender/modalWrapper';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/modal'] = {
		Modal: {
			component: blenderModal.component,
			styles: blenderModal.styles,
		},
		ModalWrapper: {
			styles: blenderModalWrapper.styles,
		},
		CloseBtn: {
			component: blenderCloseBtn.component,
		},
		Heading: {
			component: blenderHeading.component,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Modal heading="Text">
				<Body>Text</Body>
				<Footer>Text</Footer>
			</Modal>
			<Modal heading="Text" size="small">
				<Body>Text</Body>
			</Modal>
			<Modal heading="Text" size="large">
				<Body>Text</Body>
			</Modal>
			<Modal heading="Text" open>
				<Body>Text</Body>
			</Modal>
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
		ModalWrapper: {
			attributes: blenderModalWrapper.attributes,
		},
		CloseBtn: {
			component: blenderCloseBtn.component,
			attributes: blenderCloseBtn.attributes,
		},
		Heading: {
			component: blenderHeading.component,
		},
	};

	return [
		{
			heading: `A default modal`,
			component: () => {
				return (
					<GEL brand={overridesWithTokens}>
						<Button data-modal="default-modal">Open</Button>
						<Modal id="default-modal" heading="Default Modal">
							<Body>A default Modal</Body>
						</Modal>
					</GEL>
				);
			},
		},
		{
			heading: `A small modal`,
			component: () => {
				return (
					<GEL brand={overridesWithTokens}>
						<Button data-modal="small-modal">Open</Button>
						<Modal id="small-modal" heading="Small Modal" size="small">
							<Body>A small modal</Body>
						</Modal>
					</GEL>
				);
			},
		},
		{
			heading: `A large modal`,
			component: () => {
				return (
					<GEL brand={overridesWithTokens}>
						<Button data-modal="large-modal">Open</Button>
						<Modal id="large-modal" heading="Large Modal" size="large">
							<Body>A Large modal</Body>
						</Modal>
					</GEL>
				);
			},
		},
		{
			heading: `A modal with a footer`,
			component: () => {
				return (
					<GEL brand={overridesWithTokens}>
						<Button data-modal="footer-modal">Open</Button>
						<Modal id="footer-modal" heading="Modal with Footer">
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
