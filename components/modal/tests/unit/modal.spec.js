import { GEL } from '@westpac/core';
import { render } from '@testing-library/react';
import { Modal, Body } from '@westpac/modal';
import wbc from '@westpac/wbc';

// Modal specific tests
describe('Modal component', () => {
	const SimpleModal = () => (
		<GEL brand={wbc}>
			<Modal heading="Modal heading" open={false} size="medium" onClose={() => {}}>
				<Body>
					<p>
						‘It was much pleasanter at home’, thought poor Alice, ‘when one wasn’t always growing
						larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
						gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this
						sort of life! I do wonder what can have happened to me! When I used to read fairy-tales,
						I fancied that kind of thing never happened, and now here I am in the middle of one!
						There ought to be a book written about me, that there ought!’
					</p>
					<p>
						‘It was much pleasanter at home’, thought poor Alice, ‘when one wasn’t always growing
						larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
						gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this
						sort of life! I do wonder what can have happened to me! When I used to read fairy-tales,
						I fancied that kind of thing never happened, and now here I am in the middle of one!
						There ought to be a book written about me, that there ought!’
					</p>
					<p>
						‘It was much pleasanter at home’, thought poor Alice, ‘when one wasn’t always growing
						larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
						gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this
						sort of life! I do wonder what can have happened to me! When I used to read fairy-tales,
						I fancied that kind of thing never happened, and now here I am in the middle of one!
						There ought to be a book written about me, that there ought!’
					</p>
				</Body>
			</Modal>
		</GEL>
	);

	test('It should render Modal', () => {
		const { container } = render(<SimpleModal />);
		expect(container).toBeInTheDocument();
	});
});
