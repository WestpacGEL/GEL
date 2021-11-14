/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import { useReducer } from 'react';
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

	const actions = {
		ADD: 'add',
		REMOVE: 'remove',
		TOGGLE: 'toggle',
		SET_TITLE: 'set title',
	};

	const setTitle = (id, titleType, val) => ({
		type: actions.SET_TITLE,
		payload: { id, title: { [titleType]: val } },
	});

	const initialState = {
		initial: true,
		items: [
			{ id: useInstanceId(), open: true, title: { primary: '', secondary: '', tertiary: '' } },
		],
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case actions.ADD:
				let delay = false;
				const items = state.items.map((item, index) => {
					if (index === state.items.length - 1) {
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

				items.push({
					id: useInstanceId(),
					open: true,
					delay,
					title: { primary: '', secondary: '', tertiary: '' },
				});

				return { ...state, items };

			case actions.REMOVE:
				return { ...state, items: state.items.filter((item) => item.id !== action.payload.id) };
			case actions.TOGGLE:
				return {
					...state,
					initial: false,
					items: state.items.map((item) =>
						item.id === action.payload.id ? { ...item, delay: false, open: !item.open } : item
					),
				};
			case actions.SET_TITLE:
				return {
					...state,
					items: state.items.map((item) => {
						if (item.id === action.payload.id) {
							return {
								...item,
								title: { ...item.title, ...action.payload.title },
							};
						} else {
							return item;
						}
					}),
				};
			default:
				return state;
		}
	};

	const [compactaState, dispatch] = useReducer(reducer, initialState);
	const { initial, items } = compactaState;

	const state = {
		initial,
		items,
		overrides: componentOverrides,
		...rest,
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
										<TitleSecondary
											state={state}
											{...titleSecondaryAttributes(state)}
											css={titleSecondaryStyles(state)}
										>
											{item.title.secondary}
										</TitleSecondary>
									)}
									{item.title.tertiary && (
										<TitleTertiary
											state={state}
											{...titleTertiaryAttributes(state)}
											css={titleTertiaryStyles(state)}
										>
											{item.title.tertiary}
										</TitleTertiary>
									)}
								</Title>
							)}
							<Actions state={state} {...actionsAttributes(state)} css={actionsStyles(state)}>
								<RemoveBtn
									onClick={() => dispatch({ type: actions.REMOVE, payload: { id: item.id } })}
									state={state}
									{...removeBtnAttributes(state)}
									css={removeBtnStyles(state)}
								>
									Remove
								</RemoveBtn>
								<Toggle
									onClick={() => dispatch({ type: actions.TOGGLE, payload: { id: item.id } })}
									open={item.open}
									state={state}
									{...toggleAttributes(state)}
									css={toggleStyles(state)}
								/>
							</Actions>
						</Header>
						<Content
							open={item.open}
							delay={item.delay}
							state={state}
							{...contentAttributes(state)}
							css={contentStyles({ ...state, open: item.open })}
						>
							{children({
								id: item.id,
								setPrimaryTitle: (val) => dispatch(setTitle(item.id, 'primary', val)),
								setSecondaryTitle: (val) => dispatch(setTitle(item.id, 'secondary', val)),
								setTertiaryTitle: (val) => dispatch(setTitle(item.id, 'tertiary', val)),
							})}
						</Content>
					</Item>
				);
			})}
			<Footer state={state} {...footerAttributes(state)} css={footerStyles(state)}>
				<AddBtn
					onClick={() => dispatch({ type: actions.ADD })}
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
	addText: 'Add another',
};
