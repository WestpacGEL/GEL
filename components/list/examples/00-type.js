/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { AndroidIcon, PdfFileIcon } from '@westpac/icon';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<List type="bullet">
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
				<Item>
					Styled bullet list
					<List>
						<Item>Styled bullet list</Item>
						<Item>Styled bullet list</Item>
						<Item>Styled bullet list</Item>
					</List>
				</Item>
				<Item>Styled bullet list</Item>
			</List>

			<br />
			<hr />

			<h2>Bullet</h2>
			<List type="bullet">
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
				<Item>
					Styled bullet list
					<List>
						<Item>Styled bullet list</Item>
						<Item>Styled bullet list</Item>
						<Item>Styled bullet list</Item>
					</List>
				</Item>
				<Item>Styled bullet list</Item>
			</List>

			<br />
			<hr />

			<h2>Link</h2>

			<List type="link">
				<Item>
					<a href="#">Styled link list</a>
				</Item>
				<Item>
					<a href="#">Styled link list</a>
				</Item>
				<Item>
					<a href="#">Styled link list</a>
				</Item>
				<Item>
					<a href="#">Styled link list</a>
					<List>
						<Item>
							<a href="#">Styled link list</a>
						</Item>
						<Item>
							<a href="#">Styled link list</a>
						</Item>
						<Item>
							<a href="#">Styled link list</a>
						</Item>
					</List>
				</Item>
				<Item>
					<a href="#">Styled link list</a>
				</Item>
				<Item>
					<a href="#unstyled">Autofocus on anchor links</a>
				</Item>
			</List>

			<br />
			<hr />

			<h2>Icon link</h2>
			<List type="iconLink" icon={PdfFileIcon}>
				<Item>
					<a href="#">Styled icon link list</a>
				</Item>
				<Item>
					<a href="#">Styled icon link list</a>
				</Item>
				<Item>
					<a href="#">Styled icon link list</a>
				</Item>
				<Item>
					<a href="#">Styled icon link list</a>
					<List>
						<Item>
							<a href="#">Styled icon link list</a>
						</Item>
						<Item>
							<a href="#">Styled icon link list</a>
						</Item>
						<Item>
							<a href="#">Styled icon link list</a>
						</Item>
					</List>
				</Item>
				<Item>
					<a href="#">Styled icon link list</a>
				</Item>
				<Item>
					<a href="#unstyled">Autofocus on anchor links</a>
				</Item>
			</List>

			<br />
			<hr />

			<h2>Tick</h2>
			<List type="tick">
				<Item>Styled tick list</Item>
				<Item>Styled tick list</Item>
				<Item>Styled tick list</Item>
				<Item>
					Styled tick list
					<List>
						<Item>Styled tick list</Item>
						<Item>Styled tick list</Item>
						<Item>Styled tick list</Item>
					</List>
				</Item>
				<Item>Styled tick list</Item>
			</List>

			<br />
			<hr />

			<h2>Cross</h2>
			<List type="cross">
				<Item>Styled cross list</Item>
				<Item>Styled cross list</Item>
				<Item>Styled cross list</Item>
				<Item>
					Styled cross list
					<List>
						<Item>Styled cross list</Item>
						<Item>Styled cross list</Item>
						<Item>Styled cross list</Item>
					</List>
				</Item>
				<Item>Styled cross list</Item>
			</List>

			<br />
			<hr />

			<h2>Icon</h2>
			<List type="icon" icon={AndroidIcon}>
				<Item>Styled icon list</Item>
				<Item>Styled icon list</Item>
				<Item>Styled icon list</Item>
				<Item>
					Styled icon list
					<List>
						<Item>Styled icon list</Item>
						<Item>Styled icon list</Item>
						<Item>Styled icon list</Item>
					</List>
				</Item>
				<Item>Styled icon list</Item>
			</List>

			<br />
			<hr />

			<h2>Ordered</h2>
			<List type="ordered">
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>
					Styled ordered list
					<List>
						<Item>Styled ordered list</Item>
						<Item>Styled ordered list</Item>
						<Item>Styled ordered list</Item>
					</List>
				</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
			</List>

			<br />
			<hr />

			<h2 id="unstyled" tabIndex="-1">
				Unstyled
			</h2>
			<List type="unstyled">
				<Item>Unstyled list</Item>
				<Item>Unstyled list</Item>
				<Item>Unstyled list</Item>
				<Item>
					Unstyled list
					<List>
						<Item>Unstyled list</Item>
						<Item>Unstyled list</Item>
						<Item>Unstyled list</Item>
						<Item>
							Unstyled list
							<List>
								<Item>Unstyled list</Item>
								<Item>Unstyled list</Item>
								<Item>Unstyled list</Item>
							</List>
						</Item>
					</List>
				</Item>
				<Item>Unstyled list</Item>
			</List>
		</GEL>
	);
}

export default Example;
