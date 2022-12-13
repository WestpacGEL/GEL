/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { defaultTitleSecondary } from './overrides/titleSecondary';
import { defaultTitleTertiary } from './overrides/titleTertiary';
import { defaultTitlePrimary } from './overrides/titlePrimary';
import { defaultCollapsible } from './overrides/collapsible';
import { defaultRemoveBtn } from './overrides/removeBtn';
import { defaultItemIndex } from './overrides/itemIndex';
import { defaultCompacta } from './overrides/compacta';
import { defaultContent } from './overrides/content';
import { defaultActions } from './overrides/actions';
import { defaultHeader } from './overrides/header';
import { defaultAddBtn } from './overrides/addBtn';
import { defaultFooter } from './overrides/footer';
import { defaultToggle } from './overrides/toggle';
import { defaultTitle } from './overrides/title';
import { defaultItem } from './overrides/item';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Compacta = ({
	addText,
	children,
	overrides: componentOverrides,
	...rest
}: typeof Compacta.propTypes & typeof Compacta.defaultProps) => {
	const brand = useBrand();
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = brand;

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
		Collapsible: defaultCollapsible,
		Content: defaultContent,
		Footer: defaultFooter,
		AddBtn: defaultAddBtn,
	};

	const [initial, setInitial] = useState(true);
	const [items, setItems] = useState([
		{ id: useInstanceId(), open: true, title: { primary: '', secondary: '', tertiary: '' } },
	]);

	const state = {
		initial,
		items,
		brand,
		overrides: componentOverrides,
		...rest,
	};

	const handleAdd = () => {
		let delay = false;

		const newItems = items.map((item, index) => {
			if (index === items.length - 1) {
				if (item.open) {
					delay = true;
				}
				return {
					...item,
					open: false,
					delay: false,
				};
			} else {
				return item;
			}
		});

		newItems.push({
			id: useInstanceId(),
			open: true,
			delay,
			title: { primary: '', secondary: '', tertiary: '' },
		});

		setItems(newItems);
	};

	const handleRemove = (id) => {
		setItems((items) => items.filter((item) => item.id !== id));
	};

	const handleToggle = (id) => {
		if (initial) setInitial(false);
		setItems((items) =>
			items.map((item) => (item.id === id ? { ...item, delay: false, open: !item.open } : item))
		);
	};

	const setTitle = (id, titleType, title) => {
		setItems((items) =>
			items.map((item) => {
				if (item.id === id) {
					return {
						...item,
						title: { ...item.title, [titleType]: title },
					};
				} else {
					return item;
				}
			})
		);
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
		Collapsible: {
			component: Collapsible,
			styles: collapsibleStyles,
			attributes: collapsibleAttributes,
		},
		Content: { component: Content, styles: contentStyles, attributes: contentAttributes },
		Footer: { component: Footer, styles: footerStyles, attributes: footerAttributes },
		AddBtn: { component: AddBtn, styles: addBtnStyles, attributes: addBtnAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	// pre-building JSX for these components since we can't call hooks in loops
	const HeaderJSX = ({ open, ...rest }) => (
		<Header
			state={state}
			{...headerAttributes(state)}
			css={headerStyles({ ...state, open })}
			{...rest}
		/>
	);

	const TitleSecondaryJSX = (props) => (
		<TitleSecondary
			state={state}
			{...titleSecondaryAttributes(state)}
			css={titleSecondaryStyles(state)}
			{...props}
		/>
	);

	const TitleTertiaryJSX = (props) => (
		<TitleTertiary
			state={state}
			{...titleTertiaryAttributes(state)}
			css={titleTertiaryStyles(state)}
			{...props}
		/>
	);

	// Building out styles here since it contains hooks and we are unable to pre-render the component as its children will
	// contain text-inputs which update compacta state causing re-renders and making them lose focus on each keystroke
	const builtContentStyles = contentStyles(state);

	return (
		<Compacta {...rest} state={state} {...compactaAttributes(state)} css={compactaStyles(state)}>
			{items.map((item, index) => {
				return (
					<Item key={item.id} state={state} {...itemAttributes(state)} css={itemStyles(state)}>
						<HeaderJSX open={item.open} state={state}>
							<ItemIndex state={state} {...itemIndexAttributes(state)} css={itemIndexStyles(state)}>
								{index + 1}
							</ItemIndex>
							{!item.open && (
								<Title state={state} {...titleAttributes(state)} css={titleStyles(state)}>
									{item.title.primary && (
										<TitlePrimary
											state={state}
											{...titlePrimaryAttributes(state)}
											css={titlePrimaryStyles(state)}
										>
											{item.title.primary}
										</TitlePrimary>
									)}
									{item.title.secondary && (
										<TitleSecondaryJSX>{item.title.secondary}</TitleSecondaryJSX>
									)}
									{item.title.tertiary && (
										<TitleTertiaryJSX>{item.title.tertiary}</TitleTertiaryJSX>
									)}
								</Title>
							)}
							<Actions state={state} {...actionsAttributes(state)} css={actionsStyles(state)}>
								{item.open && (
									<RemoveBtn
										onClick={() => handleRemove(item.id)}
										state={state}
										{...removeBtnAttributes(state)}
										css={removeBtnStyles(state)}
									>
										Remove
									</RemoveBtn>
								)}
								<Toggle
									onClick={() => handleToggle(item.id)}
									open={item.open}
									state={state}
									{...toggleAttributes({
										...state,
										id: `gel-compacta-content-${item.id}`,
										open: item.open,
									})}
									css={toggleStyles(state)}
								/>
							</Actions>
						</HeaderJSX>
						<Collapsible
							open={item.open}
							delay={item.delay}
							state={state}
							{...collapsibleAttributes(state)}
							css={collapsibleStyles(state)}
						>
							<Content
								id={`gel-compacta-content-${item.id}`}
								state={state}
								{...contentAttributes({ ...state, open: item.open })}
								css={{ ...builtContentStyles, visibility: !item.open && 'hidden' }}
							>
								{children({
									id: item.id,
									setPrimaryTitle: (title) => setTitle(item.id, 'primary', title),
									setSecondaryTitle: (title) => setTitle(item.id, 'secondary', title),
									setTertiaryTitle: (title) => setTitle(item.id, 'tertiary', title),
									brand,
								})}
							</Content>
						</Collapsible>
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
					{addText}
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
	children: PropTypes.func.isRequired,

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
	addText: 'Add another',
};
