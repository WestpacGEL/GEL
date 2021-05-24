/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { defaultRemoveBtn } from './overrides/removeBtn';
import { defaultAddBtn } from './overrides/addBtn';
import { defaultFooter } from './overrides/footer';
import { defaultList } from './overrides/list';
import { defaultItem } from './overrides/item';
import { defaultRepeater } from './overrides/repeater';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Repeater = ({ addText, children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Repeater: defaultRepeater,
		List: defaultList,
		Item: defaultItem,
		Footer: defaultFooter,
		AddBtn: defaultAddBtn,
		RemoveBtn: defaultRemoveBtn,
	};

	const [items, setItems] = useState([{ id: useInstanceId() }]);

	const state = {
		addText,
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
		AddBtn: { component: AddBtn, styles: addBtnStyles, attributes: addBtnAttributes },
		RemoveBtn: { component: RemoveBtn, styles: RemoveBtnStyles, attributes: RemoveBtnAttributes },
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
							{children}
							{items.length > 1 && (
								<RemoveBtn
									onClick={() => handleRemove(item.id)}
									state={state}
									{...RemoveBtnAttributes(state)}
									css={RemoveBtnStyles(state)}
								/>
							)}
						</Item>
					);
				})}
			</List>
			<Footer state={state} {...footerAttributes(state)} css={footerStyles(state)}>
				<AddBtn
					onClick={handleAdd}
					state={state}
					{...addBtnAttributes(state)}
					css={addBtnStyles(state)}
				>
					{addText}
				</AddBtn>
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
	children: PropTypes.node.isRequired,
	/**
	 * Text for repeater
	 */
	addText: PropTypes.string,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Repeater: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		List: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Item: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Footer: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		AddBtn: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		RemoveBtn: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Repeater.defaultProps = {
	addText: 'Add another item',
};
