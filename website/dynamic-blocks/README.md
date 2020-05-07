## The blocks editor

The content field (or blocks editor) in the GEL design system is used for the design, code and accessibility tabs of the website. It allows for the creation of page content, through the arrangement of "blocks".

Behind the scenes blocks save structured data that represents things like paragraphs, headings, lists as well as other formatting elements common to WYSIWYG editors. The blocks editor is more complicated than a basic mark-up format such as it allows for custom blocks.

A block is responsible for serializing and deserializing the data it requires. It is also responsible for the editor interface and rendering the result on the website. Blocks can have side-effects such as uploading images or accessing Keystone data via graphQL.

## Dynamic blocks

For the reasons mentioned above, creating blocks in the content field is not trivial. We simplified the process by creating dynamic blocks. From the perspective of an author using the editor UI, dynamic blocks will feel like many different blocks. However from a strictly technical perspective, all dynamic blocks are the same thing.

A dynamic block contains serialised data that represents a React component along with the value of its props. The props can be edited by authors using the content field and the data saved will be used to render a React component on the website.

In short, we reduced the vast API for blocks down to a React component with an interface for editing props.

## Creating Dynamic blocks

To create a dynamic block create a component in the `website/dynamic-blocks` folder. From this, export an object with a key `component`. This should be the a valid React component. For example:

```jsx
export const Hello = {
	component: () => 'Hello world',
};
```

The next step is to make this dynamic block available in the editor. To do this open `website/dynamic-blocks/index.js` and add `Hello` to the list of exported components.

For a simple block that it! Note: This is the simplest set-up where no props editor is required.

If we want to include editable props, we need to export an editor component as well. The editor component will receive a `value` prop that contains the current data as well an `onChange` function for saving data. The saved data will also be provided to the original component:

```jsx
export const Hello = {
	component: ({ text }) => `Hello ${text}`,
	editor: ({ value, onChange }) => (
		<input
			type="text"
			value={value.text}
			onChange={(e) => {
				onChange({ text: e.target.value });
			}}
		/>
	),
};
```

## Changing dynamic blocks

Considerable caution must be taken when changing the shape of data in dynamic blocks that are already in use. If the shape of saved data is changed or if the component expects new data that was not there when old content was saved, the blocks editor will throw an error when trying to load.

To avoid this set default values, catch errors where new data is expected and handle this in a way that allow the editors to update the component. If at all possible it's best to avoid the need for migrations to modify data within the serialised content field.

For the reasons above it is also recommended that you do not remove existing blocks but rather remove them from the toolbar by exporting `archived: true` along with the `component` and `editor`. This will prevent authors from adding this block while still allowing old content to render.
