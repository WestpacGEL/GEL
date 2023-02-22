import { GEL, jsx } from '@westpac/core';
import { Heading } from '@westpac/heading';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>
				Without <code>tag</code> prop
			</h2>
			<Heading size={1}>Heading size: 1</Heading>
			<Heading size={2}>Heading size: 2</Heading>
			<Heading size={3}>Heading size: 3</Heading>
			<Heading size={4}>Heading size: 4</Heading>
			<Heading size={5}>Heading size: 5</Heading>
			<Heading size={6}>Heading size: 6</Heading>
			<Heading size={7}>Heading size: 7</Heading>
			<Heading size={8}>Heading size: 8</Heading>
			<Heading size={9}>Heading size: 9</Heading>
			<Heading size={10}>Heading size: 10</Heading>

			<hr />

			<h2>
				With <code>tag</code> prop
			</h2>
			<Heading tag="h2" size={1}>
				Heading tag: h2 size: 1
			</Heading>
			<Heading tag="h1" size={2}>
				Heading tag: h1 size: 2
			</Heading>
			<Heading tag="h1" size={3}>
				Heading tag: h1 size: 3
			</Heading>
			<Heading tag="h1" size={4}>
				Heading tag: h1 size: 4
			</Heading>
			<Heading tag="h1" size={5}>
				Heading tag: h1 size: 5
			</Heading>
			<Heading tag="h1" size={6}>
				Heading tag: h1 size: 6
			</Heading>
			<Heading tag="h1" size={7}>
				Heading tag: h1 size: 7
			</Heading>
			<Heading tag="h1" size={8}>
				Heading tag: h1 size: 8
			</Heading>
			<Heading tag="h1" size={9}>
				Heading tag: h1 size: 9
			</Heading>
			<Heading tag="h1" size={10}>
				Heading tag: h1 size: 10
			</Heading>
			<hr />

			<h2>With text</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, repellat iusto velit in rerum
				molestias cupiditate ea doloribus assumenda tenetur, neque, deserunt quis atque illo aperiam
				fuga, vel labore alias!
			</p>
			<Heading size={1}>Heading size: 1</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati iusto porro optio,
				cupiditate atque ipsum animi quo ullam, nemo soluta ut at fugiat pariatur facere, laboriosam
				exercitationem. Architecto odit, dolore.
			</p>
			<Heading size={2}>Heading size: 2</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dolorum, impedit sed
				blanditiis nobis quibusdam alias sequi enim unde, eos aliquam adipisci voluptates harum
				magni cupiditate iusto sit, itaque magnam.
			</p>
			<Heading size={3}>Heading size: 3</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eos, error nam amet
				adipisci optio perspiciatis exercitationem recusandae modi doloremque non odit fugiat, totam
				numquam provident magnam, vitae ipsa ullam.
			</p>
			<Heading size={4}>Heading size: 4</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi dignissimos libero
				cupiditate recusandae harum provident, facere asperiores, sit aspernatur repellat iste
				dolorum sunt tenetur modi accusantium eligendi debitis amet voluptate.
			</p>
			<Heading size={5}>Heading size: 5</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nemo facilis molestias
				voluptate rerum optio quisquam quia laudantium deleniti, ducimus, cum aperiam explicabo eum
				exercitationem. Molestiae dolorem, sunt ut velit.
			</p>
			<Heading size={6}>Heading size: 6</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis pariatur doloremque
				nostrum optio, voluptates officia quis quam magni laborum omnis molestias sit corrupti
				eligendi vero itaque expedita eveniet quia, alias.
			</p>
			<Heading size={7}>Heading size: 7</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ratione libero cumque
				architecto quia, quaerat corporis. Maxime tenetur aliquam nemo provident autem modi, nam
				recusandae laboriosam. Repellat eligendi explicabo optio!
			</p>
			<Heading size={8}>Heading size: 8</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga placeat nobis, beatae,
				provident odio soluta incidunt? Consequuntur, omnis, hic numquam, dignissimos necessitatibus
				fugiat voluptatibus unde ea ab ipsam, laborum quidem.
			</p>
			<Heading size={9}>Heading size: 9</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptates a vel porro
				reprehenderit, nostrum debitis natus quo provident aliquid, temporibus enim rem id ab
				delectus fugiat, cum odit. Voluptatibus.
			</p>
			<Heading size={10}>Heading size: 10</Heading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptates a vel porro
				reprehenderit, nostrum debitis natus quo provident aliquid, temporibus enim rem id ab
				delectus fugiat, cum odit. Voluptatibus.
			</p>

			<hr />

			<h2>Invalid props</h2>
			<Heading size={0}>Heading size too small</Heading>
			<Heading size={11}>Heading size too large</Heading>
			<Heading tag="span" size={5}>
				Heading tag not h1-h6
			</Heading>
		</GEL>
	);
}

export default Example;
