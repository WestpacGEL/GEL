import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useCallback, useState } from 'react';

import { defaultRemoveBtn } from './overrides/removeBtn';
import { defaultAddBtn } from './overrides/addBtn';
import { defaultFooter } from './overrides/footer';
import { defaultList } from './overrides/list';
import { defaultItem } from './overrides/item';
import { defaultItemIndex } from './overrides/itemIndex';
import { defaultContent } from './overrides/content';
import { defaultRepeater } from './overrides/repeater';
import pkg from '../package.json';
import { generateID } from '@westpac/core';

export interface RepeaterProps {
	/**
	 * Component to repeat
	 */
	children: React.ReactNode;
	/**
	 * Text for repeater
	 */
	addText?: string;
	/**
	 * Enable separator version
	 */
	separator?: boolean;
	/**
	 * The override API
	 */
	overrides?: {
		Repeater?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		List?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Item?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Footer?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		AddBtn?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		RemoveBtn?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Repeater = ({
	separator,
	addText = 'Add another item',
	children,
	overrides: componentOverrides,
	...rest
}: RepeaterProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Repeater: defaultRepeater,
		List: defaultList,
		Item: defaultItem,
		ItemIndex: defaultItemIndex,
		Content: defaultContent,
		Footer: defaultFooter,
		AddBtn: defaultAddBtn,
		RemoveBtn: defaultRemoveBtn,
	};

	const [items, setItems] = useState([{ id: generateID() }]);

	const state = {
		separator,
		addText,
		overrides: componentOverrides,
		...rest,
	};

	const handleAdd = useCallback(() => {
		setItems([...items, { id: generateID() }]);
	}, [items]);

	const handleRemove = useCallback(
		(id: string) => {
			const newItems = items.filter((item) => item.id !== id);
			setItems(newItems);
		},
		[items]
	);

	const {
		Repeater: { component: Repeater, styles: repeaterStyles, attributes: repeaterAttributes },
		List: { component: List, styles: listStyles, attributes: listAttributes },
		Item: { component: Item, styles: itemStyles, attributes: itemAttributes },
		ItemIndex: { component: ItemIndex, styles: itemIndexStyles, attributes: itemIndexAttributes },
		Content: { component: Content, styles: contentStyles, attributes: contentAttributes },
		Footer: { component: Footer, styles: footerStyles, attributes: footerAttributes },
		AddBtn: { component: AddBtn, styles: addBtnStyles, attributes: addBtnAttributes },
		RemoveBtn: { component: RemoveBtn, styles: RemoveBtnStyles, attributes: RemoveBtnAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Repeater {...rest} state={state} {...repeaterAttributes(state)} css={repeaterStyles(state)}>
			<List state={state} {...listAttributes(state)} css={listStyles(state)}>
				{items.map((item, index) => {
					const last = items.length - 1 === index;
					return (
						<Item
							key={item.id}
							index={index}
							state={state}
							{...itemAttributes(state)}
							css={itemStyles({ ...state, last })}
						>
							{separator && (
								<ItemIndex
									state={state}
									{...itemIndexAttributes(state)}
									css={itemIndexStyles(state)}
								>
									{index + 1}.
								</ItemIndex>
							)}
							<Content state={state} {...contentAttributes(state)} css={contentStyles(state)}>
								{children}
							</Content>
							{items.length > 1 && (
								<RemoveBtn
									onClick={() => handleRemove(item.id)}
									state={state}
									{...RemoveBtnAttributes(state)}
									css={RemoveBtnStyles(state)}
								>
									Remove
								</RemoveBtn>
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

Repeater.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Text for repeater
	 */
	addText: PropTypes.string,
	/**
	 * Component to repeat
	 */
	children: PropTypes.node,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		AddBtn: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Footer: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Item: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		List: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		RemoveBtn: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Repeater: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Enable separator version
	 */
	separator: PropTypes.bool,
};

Repeater.defaultProps = { addText: 'Add another item' };
