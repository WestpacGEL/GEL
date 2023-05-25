import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useTransition, animated } from '@react-spring/web';
import { useCallback, useState, useRef, useEffect } from 'react';
import { VisuallyHidden } from '@westpac/a11y';

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
	 * Index heading tag to use for index on separator version
	 */
	indexTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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

interface Action {
	type: string;
	index: number;
	id?: string;
}

// ==============================
// Component
// ==============================

export const Repeater = ({
	separator,
	addText = 'Add another item',
	indexTag = 'h3',
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
	const [action, setAction] = useState<Action>({ type: '', index: 0 });
	const [status, setStatus] = useState('');
	const refArr = useRef(new Array());

	const state = {
		separator,
		addText,
		indexTag,
		overrides: componentOverrides,
		...rest,
	};

	const handleAdd = useCallback(() => {
		setItems([...items, { id: generateID() }]);
		setAction({ type: 'add', index: items.length });
	}, [items]);

	const handleRemove = useCallback(
		(id: string, index: number) => {
			const newItems = items.filter((item) => item.id !== id);
			setItems(newItems);
			setAction({ type: 'remove', index, id });
		},
		[items]
	);

	useEffect(() => {
		if (action.type === 'add') {
			refArr.current[items.length - 1].focus();
			setStatus(`Item added`);
		}

		if (action.type === 'remove') {
			refArr.current.splice(action.index, 1);
			const focusIndex = action.index === 0 ? 0 : action.index - 1;
			refArr.current[focusIndex].focus();
			setStatus(`Item ${action.index + 1} removed`);
		}
	}, [items.length, action]);

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

	const transition = useTransition(items, {
		config: { duration: 150 },
		from: { opacity: 1 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		onRest: (result, ctrl, item) => {
			setItems((state) =>
				state.filter((i) => {
					return i.id !== item.id;
				})
			);
		},
	});

	return (
		<Repeater {...rest} state={state} {...repeaterAttributes(state)} css={repeaterStyles(state)}>
			<List state={state} {...listAttributes(state)} css={listStyles(state)}>
				{transition((style, item, t, index) => {
					return (
						<animated.li style={style}>
							<Item
								ref={(el: HTMLElement) => {
									refArr.current[index] = el;
								}}
								tabIndex="-1"
								index={index}
								state={state}
								{...itemAttributes(state)}
								css={itemStyles(state)}
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
										onClick={() => handleRemove(item.id, index)}
										state={{ ...state, index }}
										{...RemoveBtnAttributes(state)}
										css={RemoveBtnStyles(state)}
									>
										Remove
									</RemoveBtn>
								)}
							</Item>
						</animated.li>
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
			<VisuallyHidden role="status">{status}</VisuallyHidden>
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
	 * Index heading tag to use for index on separator version
	 */
	indexTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
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
