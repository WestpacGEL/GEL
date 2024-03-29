import React from 'react';
import { component, fields, NotEditable } from '@keystone-6/fields-document/component-blocks';
import { ToolbarButton, ToolbarGroup } from '@keystone-6/fields-document/primitives';
import { Tooltip } from '@keystone-ui/tooltip';
import { Trash2Icon } from '@keystone-ui/icons/icons/Trash2Icon';
import { GEL } from '@westpac/core';
import brand from '@westpac/wbc';
import { image } from './image';
import { heading } from './heading';
import { introSection } from './intro-section';
import { doAndAvoid } from './do-and-avoid';
import { colorSwatch } from './color-swatch';
import { codeExample, visionFilters } from './code-example';
// @ts-ignore
import { Pictograms } from '../../../website/dynamic-blocks/pictograms';
// @ts-ignore
import { Icons } from '../../../website/dynamic-blocks/icons';
// @ts-ignore
import { Symbols } from '../../../website/dynamic-blocks/symbols';
// @ts-ignore
import { Logos } from '../../../website/dynamic-blocks/logos';

const removeOnlyToolbar = ({ onRemove }: { onRemove: () => void }) => {
	return (
		<div>
			<ToolbarGroup>
				<Tooltip content="Remove" weight="subtle">
					{(attrs) => (
						<ToolbarButton
							variant="destructive"
							onMouseDown={(event) => {
								event.preventDefault();
								onRemove();
							}}
							{...attrs}
						>
							<Trash2Icon size="small" />
						</ToolbarButton>
					)}
				</Tooltip>
			</ToolbarGroup>
		</div>
	);
};

export const componentBlocks = {
	heading,
	icons: component({
		preview: () => (
			<NotEditable>
				<GEL brand={brand}>
					<Icons.component />
				</GEL>
			</NotEditable>
		),
		schema: {},
		label: 'Icons',
		toolbar: removeOnlyToolbar,
	}),
	symbols: component({
		preview: () => (
			<NotEditable>
				<GEL brand={brand}>
					<Symbols.component />
				</GEL>
			</NotEditable>
		),
		schema: {},
		label: 'Symbols',
		toolbar: removeOnlyToolbar,
	}),
	logos: component({
		preview: () => (
			<NotEditable>
				<GEL brand={brand}>
					<Logos.component />
				</GEL>
			</NotEditable>
		),
		schema: {},
		label: 'Logos',
		toolbar: removeOnlyToolbar,
	}),
	pictograms: component({
		preview: () => (
			<NotEditable>
				<GEL brand={brand}>
					<Pictograms.component />
				</GEL>
			</NotEditable>
		),
		schema: {},
		label: 'Pictograms',
		toolbar: removeOnlyToolbar,
	}),
	propsTable: component({
		preview: () => <NotEditable>Preview not available</NotEditable>,
		schema: {},
		label: 'Props table',
		toolbar: removeOnlyToolbar,
	}),
	image,
	introSection,
	doAndAvoid,
	colorSwatch,
	codeExample,
	visionFilters,
};
