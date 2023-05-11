import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultContactListItem } from './overrides/contactListItem';
import { defaultContactList } from './overrides/contactList';
import { defaultItemLink } from './overrides/itemLink';
import { defaultItemIcon } from './overrides/itemIcon';
import { defaultItemText } from './overrides/itemText';
import pkg from '../package.json';

export interface FormPodContactListProps {
	/**
	 * Array of contact detail data (objects)
	 */
	items?: {
		icon(...args: unknown[]): unknown;
		iconColor?: string;
		text: string;
		url: string;
		onClick?: (...args: unknown[]) => unknown;
	}[];
	/**
	 * The override API
	 */
	overrides?: {
		ContactList?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		ContactListItem?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		ItemLink?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		ItemIcon?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		ItemText?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const FormPodContactList = ({
	items = [],
	overrides: componentOverrides,
	...rest
}: FormPodContactListProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		ContactList: defaultContactList,
		ContactListItem: defaultContactListItem,
		ItemLink: defaultItemLink,
		ItemIcon: defaultItemIcon,
		ItemText: defaultItemText,
	};

	const state = {
		items,
		overrides: componentOverrides,
		...rest,
	};

	const {
		ContactList: {
			component: ContactList,
			styles: contactListStyles,
			attributes: contactListAttributes,
		},
		ContactListItem: {
			component: ContactListItem,
			styles: contactListItemStyles,
			attributes: contactListItemAttributes,
		},
		ItemLink: { component: ItemLink, styles: itemLinkStyles, attributes: itemLinkAttributes },
		ItemIcon: { component: ItemIcon, styles: itemIconStyles, attributes: itemIconAttributes },
		ItemText: { component: ItemText, styles: itemTextStyles, attributes: itemTextAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<ContactList
			{...rest}
			state={state}
			{...contactListAttributes(state)}
			css={contactListStyles(state)}
		>
			{items?.map((item, i) => (
				<ContactListItem
					key={i}
					state={state}
					{...contactListItemAttributes(state)}
					css={contactListItemStyles(state)}
				>
					<ItemLink
						href={item.url}
						onClick={item.onClick}
						state={state}
						{...itemLinkAttributes(state)}
						css={itemLinkStyles(state)}
					>
						{item.icon && (
							<ItemIcon
								icon={item.icon}
								color={item.iconColor}
								state={state}
								{...itemIconAttributes(state)}
								css={itemIconStyles(state)}
							/>
						)}
						<ItemText state={state} {...itemTextAttributes(state)} css={itemTextStyles(state)}>
							{item.text}
						</ItemText>
					</ItemLink>
				</ContactListItem>
			))}
		</ContactList>
	);
};

FormPodContactList.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Array of contact detail data (objects)
	 */
	items: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.func.isRequired,
			iconColor: PropTypes.string,
			onClick: PropTypes.func,
			text: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
		})
	),
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ContactList: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		ContactListItem: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		ItemIcon: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		ItemLink: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		ItemText: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
