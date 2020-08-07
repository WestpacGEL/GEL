/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Body } from '@westpac/body';
import { Button } from '@westpac/button';
import { List, Item } from '@westpac/list';
import { AndroidIcon, GithubIcon } from '@westpac/icon';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Body>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias porro, laboriosam
					recusandae ex ipsum harum unde illum neque, dolorem eaque quam vero aliquam fuga commodi,
					fugit odio. Incidunt, veritatis, quod.
				</p>
				<Button look="primary">Primary</Button> <Button look="hero">Hero</Button>{' '}
				<Button look="link">Link</Button>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias porro, laboriosam
					recusandae ex ipsum harum unde illum neque, dolorem eaque quam vero aliquam fuga commodi,
					fugit odio. Incidunt, veritatis, quod.
				</p>
				<List look="hero">
					<Item>Styled bullet list - hero</Item>
					<Item>Styled bullet list - hero</Item>
					<Item>Styled bullet list - hero</Item>
				</List>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum obcaecati natus corporis
					earum ipsam maxime, temporibus possimus veritatis doloribus consectetur repudiandae
					beatae, exercitationem autem magnam qui quod provident repellat aliquam.
				</p>
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
				</List>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum obcaecati natus corporis
					earum ipsam maxime, temporibus possimus veritatis doloribus consectetur repudiandae
					beatae, exercitationem autem magnam qui quod provident repellat aliquam.
				</p>
				<List type="tick" assistiveText="The following items are included">
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
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum obcaecati natus corporis
					earum ipsam maxime, temporibus possimus veritatis doloribus consectetur repudiandae
					beatae, exercitationem autem magnam qui quod provident repellat aliquam.
				</p>
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
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum obcaecati natus corporis
					earum ipsam maxime, temporibus possimus veritatis doloribus consectetur repudiandae
					beatae, exercitationem autem magnam qui quod provident repellat aliquam.
				</p>
				<List type="icon" icon={AndroidIcon}>
					<Item>Styled icon list</Item>
					<Item>Styled icon list</Item>
					<Item>Styled icon list</Item>
					<Item type="icon" icon={GithubIcon}>
						Styled icon list
						<List>
							<Item>Styled icon list</Item>
							<Item>Styled icon list</Item>
							<Item>Styled icon list</Item>
						</List>
					</Item>
				</List>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum obcaecati natus corporis
					earum ipsam maxime, temporibus possimus veritatis doloribus consectetur repudiandae
					beatae, exercitationem autem magnam qui quod provident repellat aliquam.
				</p>
			</Body>
		</GEL>
	);
}

export default Example;
