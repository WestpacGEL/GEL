import { GEL, jsx, useFonts } from '@westpac/core';
import { Heading, BrandHeading } from '@westpac/heading';

function Example({ brand }) {
	return (
		<GEL brand={brand} css={{ ...useFonts({ path: 'assets/' }) }}>
			<h2>Heading</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, repellat iusto velit in rerum
				molestias cupiditate ea doloribus assumenda tenetur, neque, deserunt quis atque illo aperiam
				fuga, vel labore alias!
			</p>
			<Heading size={1} uppercase>
				Heading size: 1
			</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati iusto porro optio,
				cupiditate atque ipsum animi quo ullam, nemo soluta ut at fugiat pariatur facere, laboriosam
				exercitationem. Architecto odit, dolore.
			</p>
			<Heading size={2} uppercase>
				Heading size: 2
			</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dolorum, impedit sed
				blanditiis nobis quibusdam alias sequi enim unde, eos aliquam adipisci voluptates harum
				magni cupiditate iusto sit, itaque magnam.
			</p>
			<Heading size={3} uppercase>
				Heading size: 3
			</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eos, error nam amet
				adipisci optio perspiciatis exercitationem recusandae modi doloremque non odit fugiat, totam
				numquam provident magnam, vitae ipsa ullam.
			</p>
			<Heading size={4} uppercase>
				Heading size: 4
			</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi dignissimos libero
				cupiditate recusandae harum provident, facere asperiores, sit aspernatur repellat iste
				dolorum sunt tenetur modi accusantium eligendi debitis amet voluptate.
			</p>
			<Heading size={5} uppercase>
				Heading size: 5
			</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nemo facilis molestias
				voluptate rerum optio quisquam quia laudantium deleniti, ducimus, cum aperiam explicabo eum
				exercitationem. Molestiae dolorem, sunt ut velit.
			</p>
			<Heading size={6} uppercase>
				Heading size: 6
			</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis pariatur doloremque
				nostrum optio, voluptates officia quis quam magni laborum omnis molestias sit corrupti
				eligendi vero itaque expedita eveniet quia, alias.
			</p>
			<Heading size={7} uppercase>
				Heading size: 7
			</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ratione libero cumque
				architecto quia, quaerat corporis. Maxime tenetur aliquam nemo provident autem modi, nam
				recusandae laboriosam. Repellat eligendi explicabo optio!
			</p>
			<Heading size={8} uppercase>
				Heading size: 8
			</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga placeat nobis, beatae,
				provident odio soluta incidunt? Consequuntur, omnis, hic numquam, dignissimos necessitatibus
				fugiat voluptatibus unde ea ab ipsam, laborum quidem.
			</p>
			<Heading size={9} uppercase>
				Heading size: 9
			</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptates a vel porro
				reprehenderit, nostrum debitis natus quo provident aliquid, temporibus enim rem id ab
				delectus fugiat, cum odit. Voluptatibus.
			</p>
			<Heading size={10} uppercase>
				Heading size: 10
			</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptates a vel porro
				reprehenderit, nostrum debitis natus quo provident aliquid, temporibus enim rem id ab
				delectus fugiat, cum odit. Voluptatibus.
			</p>

			<hr />

			<h2>BrandHeading</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, repellat iusto velit in rerum
				molestias cupiditate ea doloribus assumenda tenetur, neque, deserunt quis atque illo aperiam
				fuga, vel labore alias!
			</p>
			<BrandHeading size={1} uppercase>
				BrandHeading size: 1
			</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati iusto porro optio,
				cupiditate atque ipsum animi quo ullam, nemo soluta ut at fugiat pariatur facere, laboriosam
				exercitationem. Architecto odit, dolore.
			</p>
			<BrandHeading size={2} uppercase>
				BrandHeading size: 2
			</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dolorum, impedit sed
				blanditiis nobis quibusdam alias sequi enim unde, eos aliquam adipisci voluptates harum
				magni cupiditate iusto sit, itaque magnam.
			</p>
			<BrandHeading size={3} uppercase>
				BrandHeading size: 3
			</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eos, error nam amet
				adipisci optio perspiciatis exercitationem recusandae modi doloremque non odit fugiat, totam
				numquam provident magnam, vitae ipsa ullam.
			</p>
			<BrandHeading size={4} uppercase>
				BrandHeading size: 4
			</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi dignissimos libero
				cupiditate recusandae harum provident, facere asperiores, sit aspernatur repellat iste
				dolorum sunt tenetur modi accusantium eligendi debitis amet voluptate.
			</p>
			<BrandHeading size={5} uppercase>
				BrandHeading size: 5
			</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nemo facilis molestias
				voluptate rerum optio quisquam quia laudantium deleniti, ducimus, cum aperiam explicabo eum
				exercitationem. Molestiae dolorem, sunt ut velit.
			</p>
			<BrandHeading size={6} uppercase>
				BrandHeading size: 6
			</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis pariatur doloremque
				nostrum optio, voluptates officia quis quam magni laborum omnis molestias sit corrupti
				eligendi vero itaque expedita eveniet quia, alias.
			</p>
			<BrandHeading size={7} uppercase>
				BrandHeading size: 7
			</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ratione libero cumque
				architecto quia, quaerat corporis. Maxime tenetur aliquam nemo provident autem modi, nam
				recusandae laboriosam. Repellat eligendi explicabo optio!
			</p>
		</GEL>
	);
}

export default Example;
