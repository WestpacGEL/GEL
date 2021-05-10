/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { defaultRepeaterRemoveButton } from './overrides/repeaterRemoveButton';
import { defaultRepeaterAddButton } from './overrides/repeaterAddButton';
import { defaultRepeaterFooter } from './overrides/repeaterFooter';
import { defaultRepeaterList } from './overrides/repeaterList';
import { defaultRepeaterItem } from './overrides/repeaterItem';
import { defaultRepeater } from './overrides/repeater';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
// SHOULD PROBABLY PUT THIS INTO ITS OWN COMPONENT !!!!!

export const Repeater = ({
	component: Component,
	addText,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Repeater: defaultRepeater,
		List: defaultRepeaterList,
		Item: defaultRepeaterItem,
		Footer: defaultRepeaterFooter,
		AddButton: defaultRepeaterAddButton,
		RemoveButton: defaultRepeaterRemoveButton,
	};

	// initial component instance id
	const [items, setItems] = useState([{ id: useInstanceId() }]);

	const state = {
		Component,
		overrides: componentOverrides,
		...rest,
	};

	const handleAdd = () => {
		setItems([...items, { id: useInstanceId() }]);
	};

	const handleRemove = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};

	const {
		Repeater: { component: Repeater, styles: repeaterStyles, attributes: repeaterAttributes },
		List: { component: List, styles: listStyles, attributes: listAttributes },
		Item: { component: Item, styles: itemStyles, attributes: itemAttributes },
		Footer: { component: Footer, styles: footerStyles, attributes: footerAttributes },
		AddButton: { component: AddButton, styles: addButtonStyles, attributes: addButtonAttributes },
		RemoveButton: {
			component: RemoveButton,
			styles: removeButtonStyles,
			attributes: removeButtonAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Repeater {...rest} state={state} {...repeaterAttributes(state)} css={repeaterStyles(state)}>
			<List state={state} {...listAttributes(state)} css={listStyles(state)}>
				{items.map((item, index) => {
					return (
						<Item
							key={item.id}
							index={index}
							state={state}
							{...itemAttributes(state)}
							css={itemStyles(state)}
						>
							<Component />
							{items.length > 1 && (
								<RemoveButton
									onClick={() => handleRemove(item.id)}
									state={state}
									{...removeButtonAttributes(state)}
									css={removeButtonStyles(state)}
								/>
							)}
						</Item>
					);
				})}
			</List>
			<Footer state={state} {...footerAttributes(state)} css={footerStyles(state)}>
				<AddButton
					onClick={handleAdd}
					state={state}
					{...addButtonAttributes(state)}
					css={addButtonStyles(state)}
				>
					{addText}
				</AddButton>
				{/* {help && <Help />} */}
			</Footer>
		</Repeater>
	);
};

// ==============================
// Types
// ==============================

Repeater.propTypes = {
	/**
	 * Component to repeat
	 */
	component: PropTypes.func,

	/**
	 * Text for repeater
	 */
	addText: PropTypes.string,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Badge: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Repeater.defaultProps = {
	addText: 'Add another item',
};
