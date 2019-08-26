import React from 'react';

export default () => (
	<>
		<h2>Lead</h2>

		<p className="lead">
			I’m lead text. Read me and you'll get an idea of what's below. Don't over do it though keep me
			short and sweet or things might get a little loud. I’m not intended to be used in big
			paragraphs as this defeats the objective for the skim reader.
		</p>

		<hr />

		<h2>Text alignment</h2>

		<p className="text-left">
			<strong>Left aligned text.</strong>
			<br />
			Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
			sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sialiquam
			qualaboriosam, nisi olu voluptas nulla pariatur? Lorem ipsum dolor sit amet, consectetur
			adipisicing elit. Tempore autem modi voluptatum quia iusto pariatur hic, excepturi explicabo
			dignissimos, vitae nulla, cumque possimus reiciendis natus officiis delectus, accusantium
			voluptate fugiat.
		</p>
		<p className="text-center">
			<strong>Center aligned text.</strong>
			<br />
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed magnam cupiditate dolorum eius
			nulla. Voluptatum est eos qui? Consequatur ipsa ea asperiores explicabo quae fuga minima est
			eaque ut nobis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nobis iure,
			minima laudantium aperiam? Quos rem, nesciunt facilis, necessitatibus impedit nostrum cum
			inventore, pariatur voluptatibus quibusdam totam omnis nulla quae.
		</p>
		<p className="text-right">
			<strong>Right aligned text.</strong>
			<br />
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis esse enim quia tenetur
			eius facere magnam repudiandae nulla quaerat laudantium expedita, tempore velit, earum
			molestias libero quibusdam quo saepe cupiditate. Lorem ipsum dolor sit amet, consectetur
			adipisicing elit. Illum itaque suscipit rem hic possimus quos, officia alias! Reprehenderit
			nemo odio quos, impedit, perferendis nam. Possimus, repellat? Repellendus earum magnam eius!
		</p>
		<p className="text-justify">
			<strong>Justify text.</strong>
			<br />
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis esse enim quia tenetur
			eius facere magnam repudiandae nulla quaerat laudantium expedita, tempore velit, earum
			molestias libero quibusdam quo saepe cupiditate. Lorem ipsum dolor sit amet, consectetur
			adipisicing elit. Saepe aspernatur, optio quisquam. Ducimus vero odio cupiditate odit
			voluptate at atque, id reiciendis aut mollitia dolorem explicabo dolore nemo, suscipit quidem.
		</p>
		<p className="text-nowrap">
			<strong>Nowrap text.</strong>
			<br />
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis esse enim quia tenetur
			eius facere magnam repudiandae nulla quaerat laudantium expedita, tempore velit, earum
			molestias libero quibusdam quo saepe cupiditate.
		</p>

		<hr />

		<h2>Text colors</h2>

		<p className="text-primary">
			I’m text-primary. I’m super accessible. I’m all about being seen.
		</p>
		<p className="text-hero">I’m text-hero. I’m usually accessible on white but always check.</p>
		<p className="text-muted">I’m text-muted. I’m accessible on white but always check.</p>
		<p className="text-success">I’m text-success. I’m accessible on white but always check.</p>
		<p className="text-information">
			I’m text-information. I’m accessible on white but always check.
		</p>
		<p className="text-warning">I’m text-warning. I’m accessible on white but always check.</p>
		<p className="text-danger">I’m text-danger. I’m accessible on white but always check.</p>
	</>
);
