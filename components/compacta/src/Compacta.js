/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { defaultTitlePrimary } from './overrides/titlePrimary';
import { defaultTitleSecondary } from './overrides/titleSecondary';
import { defaultTitleTertiary } from './overrides/titleTertiary';
import { defaultAddBtn } from './overrides/addBtn';
import { defaultFooter } from './overrides/footer';
import { defaultToggle } from './overrides/toggle';
import { defaultRemoveBtn } from './overrides/removeBtn';
import { defaultContent } from './overrides/content';
import { defaultTitle } from './overrides/title';
import { defaultActions } from './overrides/actions';
import { defaultItemIndex } from './overrides/itemIndex';
import { defaultItem } from './overrides/item';
import { defaultHeader } from './overrides/header';
import { defaultCompacta } from './overrides/compacta';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

// I can also introduce a prop called data which will contain the array and allows for the developer to update the data themselves,
// if no data supplied then can be handled internally?
// probably need an on remove?
export const Compacta = ({ addText, children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Compacta: defaultCompacta,
		Item: defaultItem,
		Header: defaultHeader,
		ItemIndex: defaultItemIndex,
		Title: defaultTitle,
		TitlePrimary: defaultTitlePrimary,
		TitleSecondary: defaultTitleSecondary,
		TitleTertiary: defaultTitleTertiary,
		Actions: defaultActions,
		RemoveBtn: defaultRemoveBtn,
		Toggle: defaultToggle,
		Content: defaultContent,
		Footer: defaultFooter,
		AddBtn: defaultAddBtn,
	};

	// remove second one later
	// probably going to have to use this as source of truth for state of everything
	// need to pass a function somehow
	const [items, setItems] = useState([
		{
			id: useInstanceId(),
			open: false,
			title: 'Title',
			secondaryTitle: 'Secondary',
			tertiaryTitle: 'Tertiary',
		},
		{ id: useInstanceId(), open: true },
	]);

	const state = {
		overrides: componentOverrides,
		...rest,
	};

	// handle stale state stuff here??
	const handleAdd = () => {
		setItems((items) => [...items, { id: useInstanceId(), open: true }]);
	};

	const handleRemove = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};

	// should this work on index or id's?
	// what is more efficient
	const handleOpen = (index) => {
		const updatedItems = [...items];
		updatedItems[index].open = !updatedItems[index].open;
		setItems(updatedItems);
	};

	const setTitle = (index, title) => {
		console.log('Index: ', index);
		console.log('Title: ', title);
	};

	const {
		Compacta: { component: Compacta, styles: compactaStyles, attributes: compactaAttributes },
		Item: { component: Item, styles: itemStyles, attributes: itemAttributes },
		Header: { component: Header, styles: headerStyles, attributes: headerAttributes },
		ItemIndex: { component: ItemIndex, styles: itemIndexStyles, attributes: itemIndexAttributes },
		Title: { component: Title, styles: titleStyles, attributes: titleAttributes },
		TitlePrimary: {
			component: TitlePrimary,
			styles: titlePrimaryStyles,
			attributes: titlePrimaryAttributes,
		},
		TitleSecondary: {
			component: TitleSecondary,
			styles: titleSecondaryStyles,
			attributes: titleSecondaryAttributes,
		},
		TitleTertiary: {
			component: TitleTertiary,
			styles: titleTertiaryStyles,
			attributes: titleTertiaryAttributes,
		},
		Actions: { component: Actions, styles: actionsStyles, attributes: actionsAttributes },
		RemoveBtn: { component: RemoveBtn, styles: removeBtnStyles, attributes: removeBtnAttributes },
		Toggle: { component: Toggle, styles: toggleStyles, attributes: toggleAttributes },
		Content: { component: Content, styles: contentStyles, attributes: contentAttributes },
		Footer: { component: Footer, styles: footerStyles, attributes: footerAttributes },
		AddBtn: { component: AddBtn, styles: addBtnStyles, attributes: addBtnAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	// need to fix the hooks bug whatever it is
	// need to double check the mobile views
	// need to figure out a nice way to do the conditional titling
	return (
		<Compacta {...rest} state={state} {...compactaAttributes(state)} css={compactaStyles(state)}>
			{items.map((item, index) => {
				return (
					<Item key={item.id} state={state} {...itemAttributes(state)} css={itemStyles(state)}>
						<Header
							state={state}
							{...headerAttributes(state)}
							css={headerStyles({ ...state, open: item.open })}
						>
							<ItemIndex state={state} {...itemIndexAttributes(state)} css={itemIndexStyles(state)}>
								{index + 1}
							</ItemIndex>
							<Title state={state} {...titleAttributes(state)} css={titleStyles(state)}>
								<TitlePrimary
									state={state}
									{...titlePrimaryAttributes(state)}
									css={titlePrimaryStyles(state)}
								>
									{!item.open && 'Primary'}
								</TitlePrimary>
								<TitleSecondary
									state={state}
									{...titleSecondaryAttributes(state)}
									css={titleSecondaryStyles(state)}
								>
									{!item.open && 'Secondary'}
								</TitleSecondary>
								<TitleTertiary
									state={state}
									{...titleTertiaryAttributes(state)}
									css={titleTertiaryStyles(state)}
								>
									{!item.open && 'Tertiary'}
								</TitleTertiary>
							</Title>
							<Actions state={state} {...actionsAttributes(state)} css={actionsStyles(state)}>
								<RemoveBtn
									onClick={() => handleRemove(item.id)}
									state={state}
									{...removeBtnAttributes(state)}
									css={removeBtnStyles(state)}
								>
									Remove
								</RemoveBtn>
								<Toggle
									onClick={() => handleOpen(index)}
									open={item.open}
									state={state}
									{...toggleAttributes(state)}
									css={toggleStyles(state)}
								/>
							</Actions>
						</Header>
						<Content
							state={state}
							{...contentAttributes(state)}
							css={contentStyles({ ...state, open: item.open })}
						>
							<div css={{ padding: '4rem' }}></div>
						</Content>
					</Item>
				);
			})}
			<Footer state={state} {...footerAttributes(state)} css={footerStyles(state)}>
				<AddBtn
					onClick={handleAdd}
					state={state}
					{...addBtnAttributes(state)}
					css={addBtnStyles(state)}
				>
					Add another
				</AddBtn>
			</Footer>
		</Compacta>
	);
};

// ==============================
// Types
// ==============================

Compacta.propTypes = {
	/**
	 * Component to repeat
	 */
	children: PropTypes.node.isRequired,
	/**
	 * Text for compacta
	 */
	addText: PropTypes.string,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Compacta: PropTypes.shape({
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

Compacta.defaultProps = {
	addText: 'Add another item',
};
