import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useCallback, useId, useState, useRef, useEffect } from 'react';
import { VisuallyHidden } from '@westpac/a11y';

import { defaultHeaderSecondary } from './overrides/headerSecondary';
import { defaultTitleSecondary } from './overrides/titleSecondary';
import { defaultPrimaryHeading } from './overrides/primaryHeading';
import { defaultTitleTertiary } from './overrides/titleTertiary';
import { defaultTitlePrimary } from './overrides/titlePrimary';
import { defaultCollapsible } from './overrides/collapsible';
import { defaultHeaderTitle } from './overrides/headerTitle';
import { defaultRemoveBtn } from './overrides/removeBtn';
import { defaultItemIndex } from './overrides/itemIndex';
import { defaultCompacta } from './overrides/compacta';
import { defaultContent } from './overrides/content';
import { defaultHeader } from './overrides/header';
import { defaultAddBtn } from './overrides/addBtn';
import { defaultFooter } from './overrides/footer';
import { defaultToggle } from './overrides/toggle';
import { defaultItem } from './overrides/item';
import pkg from '../package.json';
import { generateID } from '@westpac/core';

interface CompactaProps {
	/**
	 * Tag for primary title
	 */
	titleTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	/**
	 * Component to repeat
	 */
	children(...args: unknown[]): unknown;
	/**
	 * Text for compacta
	 */
	addText?: string;
	/**
	 * The override API
	 */
	overrides?: {
		Compacta?: {
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

export const Compacta = ({
	titleTag = 'h3',
	addText = 'Add another',
	children,
	overrides: componentOverrides,
	...rest
}: CompactaProps) => {
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
		HeaderTitle: defaultHeaderTitle,
		HeaderSecondary: defaultHeaderSecondary,
		PrimaryHeading: defaultPrimaryHeading,
		TitlePrimary: defaultTitlePrimary,
		TitleSecondary: defaultTitleSecondary,
		TitleTertiary: defaultTitleTertiary,
		RemoveBtn: defaultRemoveBtn,
		Toggle: defaultToggle,
		Collapsible: defaultCollapsible,
		Content: defaultContent,
		Footer: defaultFooter,
		AddBtn: defaultAddBtn,
	};

	const [initial, setInitial] = useState(true);
	const id = useId();
	const [items, setItems] = useState([
		{ id, open: true, delay: false, title: { primary: '', secondary: '', tertiary: '' } },
	]);
	const [action, setAction] = useState<Action>({ type: '', index: 0 });
	const [status, setStatus] = useState('');
	const headingRefs = useRef(new Array());
	const toggleRefs = useRef(new Array());

	const state = {
		initial,
		items,
		brand,
		titleTag,
		overrides: componentOverrides,
		...rest,
	};

	const handleAdd = useCallback(() => {
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
			}
			return item;
		});

		setItems([
			...newItems,
			{
				id: `${id}-${generateID()}`,
				open: true,
				delay,
				title: { primary: '', secondary: '', tertiary: '' },
			},
		]);

		setAction({ type: 'add', index: newItems.length });
	}, [id, items]);

	const handleRemove = useCallback((id: string, index: number) => {
		setItems((items) => items.filter((item) => item.id !== id));
		setAction({ type: 'remove', index, id });
	}, []);

	const handleToggle = useCallback(
		(id: string, index: number) => {
			if (initial) setInitial(false);
			setItems((items) =>
				items.map((item) => (item.id === id ? { ...item, delay: false, open: !item.open } : item))
			);
			setAction({ type: 'toggle', index });
		},
		[initial]
	);

	const setTitle = useCallback((id: string, titleType: string, title: string) => {
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
	}, []);

	useEffect(() => {
		if (action.type) {
			if (action.type === 'add') {
				setTimeout(() => {
					headingRefs?.current[action.index]?.focus();
				}, 1);
				setStatus(`Item added`);
			}

			if (action.type === 'remove') {
				headingRefs.current.splice(action.index, 1);
				const focusIndex = action.index === 0 ? 0 : action.index - 1;
				setTimeout(() => {
					headingRefs?.current[focusIndex]?.focus();
				}, 1);
				setStatus(`Item ${action.index + 1} removed`);
			}

			if (action.type === 'toggle') {
				toggleRefs?.current[action.index]?.focus();
			}
		}
	}, [items.length, action]);

	const {
		Compacta: { component: Compacta, styles: compactaStyles, attributes: compactaAttributes },
		Item: { component: Item, styles: itemStyles, attributes: itemAttributes },
		Header: { component: Header, styles: headerStyles, attributes: headerAttributes },
		ItemIndex: { component: ItemIndex, styles: itemIndexStyles, attributes: itemIndexAttributes },
		HeaderTitle: {
			component: HeaderTitle,
			styles: headerTitleStyles,
			attributes: headerTitleAttributes,
		},
		HeaderSecondary: {
			component: HeaderSecondary,
			styles: headerSecondaryStyles,
			attributes: headerSecondaryAttributes,
		},
		PrimaryHeading: {
			component: PrimaryHeading,
			styles: primaryHeadingStyles,
			attributes: primaryHeadingAttributes,
		},
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

	const TitleSecondaryJSX = (props: any) => (
		<TitleSecondary
			state={state}
			{...titleSecondaryAttributes(state)}
			css={titleSecondaryStyles(state)}
			{...props}
		/>
	);

	const TitleTertiaryJSX = (props: any) => (
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
						<Header state={state} {...headerAttributes(state)} css={headerStyles(state)} {...rest}>
							<HeaderTitle
								state={state}
								{...headerTitleAttributes(state)}
								css={headerTitleStyles(state)}
							>
								<PrimaryHeading
									id={`gel-compacta-title-${item.id}`}
									ref={(el: HTMLElement) => {
										headingRefs.current[index] = el;
									}}
									tabIndex="-1"
									state={state}
									{...primaryHeadingAttributes(state)}
									css={primaryHeadingStyles(state)}
								>
									<ItemIndex
										state={state}
										{...itemIndexAttributes(state)}
										css={itemIndexStyles(state)}
									>
										{index + 1}.
									</ItemIndex>
									{!item.open && item.title.primary && (
										<TitlePrimary
											state={state}
											{...titlePrimaryAttributes(state)}
											css={titlePrimaryStyles(state)}
										>
											{item.title.primary}
										</TitlePrimary>
									)}
								</PrimaryHeading>
								<Toggle
									onClick={() => handleToggle(item.id, index)}
									open={item.open}
									ref={(el: HTMLElement) => {
										toggleRefs.current[index] = el;
									}}
									state={state}
									{...toggleAttributes({
										...state,
										id: `gel-compacta-content-${item.id}`,
										titleId: `gel-compacta-title-${item.id}`,
										open: item.open,
									})}
									css={toggleStyles(state)}
								/>
							</HeaderTitle>
							{!item.open && (
								<HeaderSecondary
									state={state}
									{...headerSecondaryAttributes(state)}
									css={headerSecondaryStyles(state)}
								>
									{item.title.secondary && (
										<TitleSecondaryJSX>{item.title.secondary}</TitleSecondaryJSX>
									)}
									{item.title.tertiary && (
										<TitleTertiaryJSX>{item.title.tertiary}</TitleTertiaryJSX>
									)}
								</HeaderSecondary>
							)}
						</Header>
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
									setPrimaryTitle: (title: string) => setTitle(item.id, 'primary', title),
									setSecondaryTitle: (title: string) => setTitle(item.id, 'secondary', title),
									setTertiaryTitle: (title: string) => setTitle(item.id, 'tertiary', title),
									brand,
								})}
								{item.open && (
									<RemoveBtn
										onClick={() => handleRemove(item.id, index)}
										state={{ ...state, id: item.id }}
										{...removeBtnAttributes(state)}
										css={removeBtnStyles(state)}
									>
										Remove
									</RemoveBtn>
								)}
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
			<VisuallyHidden role="status">{status}</VisuallyHidden>
		</Compacta>
	);
};

Compacta.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Text for compacta
	 */
	addText: PropTypes.string,
	/**
	 * Component to repeat
	 */
	children: PropTypes.func.isRequired,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		AddBtn: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Compacta: PropTypes.shape({
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
	}),
};
