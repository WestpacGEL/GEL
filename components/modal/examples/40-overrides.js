import { GEL, jsx } from '@westpac/core';
import { useState } from 'react';
import { Modal, Body, Footer } from '@westpac/modal';
import { Button } from '@westpac/button';

function Example({ brand }) {
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);

	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/modal'] = {
		Modal: {
			styles: (styles) => ({ ...styles, border: '2px solid palevioletred' }),
		},
		Header: {
			styles: (styles) => ({ ...styles, borderBottom: `2px solid palevioletred` }),
		},
		Heading: {
			styles: (styles) => ({ ...styles, color: 'darkmagenta' }),
		},
		Backdrop: {
			styles: (styles) => ({ ...styles, backgroundColor: 'rgba(153,0,0,0.6)' }),
		},
		Body: {
			styles: (styles) => ({ ...styles, color: 'lightcoral' }),
		},
		Footer: {
			styles: (styles) => ({
				...styles,
				borderTop: '2px solid palevioletred',
				backgroundColor: 'lavenderblush',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<Button onClick={() => setOpen(true)}>Open</Button>
			<Modal heading="Modal heading" open={open} onClose={() => setOpen(false)}>
				<Body>
					‘It was much pleasanter at home’, thought poor Alice, ‘when one wasn’t always growing
					larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
					gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this sort
					of life! I do wonder what can have happened to me! When I used to read fairy-tales, I
					fancied that kind of thing never happened, and now here I am in the middle of one! There
					ought to be a book written about me, that there ought!’
				</Body>
				<Footer>
					<Button look="faint" onClick={() => setOpen(false)}>
						Close
					</Button>
				</Footer>
			</Modal>

			<h2>With overrides and component overrides</h2>
			<Button onClick={() => setOpen2(true)}>Open</Button>
			<Modal
				heading="Modal heading"
				open={open2}
				onClose={() => setOpen2(false)}
				overrides={{
					Header: {
						styles: (styles) => ({ ...styles, borderBottom: `2px solid black` }),
					},
					Heading: {
						styles: (styles) => ({ ...styles, color: 'black' }),
					},
					Backdrop: {
						styles: (styles) => ({ ...styles, backgroundColor: 'rgba(153,0,0,0.6)' }),
					},
				}}
			>
				<Body
					overrides={{
						Body: {
							styles: (styles) => ({ ...styles, color: 'black' }),
						},
					}}
				>
					‘It was much pleasanter at home’, thought poor Alice, ‘when one wasn’t always growing
					larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
					gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this sort
					of life! I do wonder what can have happened to me! When I used to read fairy-tales, I
					fancied that kind of thing never happened, and now here I am in the middle of one! There
					ought to be a book written about me, that there ought!’
				</Body>
				<Footer
					overrides={{
						Footer: {
							styles: (styles) => ({
								...styles,
								borderTop: '2px solid black',
								backgroundColor: 'white',
							}),
						},
					}}
				>
					<Button look="faint" onClick={() => setOpen(false)}>
						Close
					</Button>
				</Footer>
			</Modal>
		</GEL>
	);
}

export default Example;
