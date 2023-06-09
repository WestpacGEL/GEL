# Review of FlexCell component PRs

This review includes FlexiCell + supporting component and Circle component.

## Circle

### Circle.types.ts

- [ ] The JSDoc for the `tag` prop references `flexicell` - need to change to `circle`.
      `background` should be of type CSSProperties['backgroundColor'].
- [ ] `IntrinsicElementsCustom` isn't being used, this can be deleted.
- [ ] The props type should be a discriminated union where the `href` is `string` when `tag` is `a` and `never` the rest of the time. This will prevent `href` from being applied to a tag that doesn't support it and help guide our consumers. Something like this:

```typescript
type BaseCircleProps = {
	/**
	 * Adds a background color
	 */
	background?: CSSProperties['backgroundColor'];
	/**
	 * JSX element to be render inside of circle
	 */
	children?: ReactNode;
	/**
	 * Size of the circle
	 */
	size?: CSSProperties['width'] | CSSProperties['height'];
} & HTMLAttributes<HTMLOrSVGElement>;

type CircleAsLinkProps = {
	/**
	 * The native tag that the circle will be rendered as
	 */
	tag: 'a';
	/**
	 * The href for the link
	 */
	href: string;
};

type CircleAsAllOtherTagsProps<Tag> = {
	tag?: Tag;
	href?: never;
};

export type CircleProps<
	Tag extends keyof Omit<JSX.IntrinsicElements, 'a'> = keyof Omit<JSX.IntrinsicElements, 'a'>
> = (CircleAsLinkProps | CircleAsAllOtherTagsProps<Tag>) & BaseCircleProps;
```

### Circle.spec.tsx

- [ ] We should add tests for `tag` and `href` being applied when defined. I would avoid testing props that relate only to styles since these stray into the land of implementation, though if you want to, you can add tests for `size` and `background`.

### Circle.tsx

- [ ] The default size of `30px` should be `1.875rem`. Always go for `rem`s over `px` unless it's `1px` or in media queries max/min condition check (i.e. not the body). This helps accessibility. If a user has a zoom level set in their OS then rem values will follow this but `px` won't and there will be inconsistent zoom levels across the UI. Note: zooming in manually with `ctrl/cmd` + `+` doesn't have the same issue.

---

## FlexiCell

### General

- [ ] Can we change the `export * from` in `index.ts` to named exports for each subcomponent that is exported. In turn can we remove the subcomponent assignments in the `FlexiCell` component (lines 77 to 83) and change each of the usages, e.g. `<FlexiCell.Hint />` to be `<FlexCellHint />` across the repo. Just looking for consistency across the codebase here.

### Examples and demos

#### Foreign currency list

- [ ] In the recently paid list, the clickable link part wraps the flag but not in the alphabetised list
- [ ] In the alphabetised list, each item is a `div` with a `href` then there is a nested `a` with `href` - I'm not sure what the ultimate goal is here but we won't be able to have nested links within links - to solve this, we'll need to use `position: absolute` or similar and change the nested link to be a sibling, then move it across to float above the other link with css.
- [ ] Assuming you don't want a `href` on a `div` we can solve this with a discriminated union like the one suggested for the circle component where `tag: 'a'` and `href: string` are separated in their own type.
- [ ] Tabbing through the list shows an outline around the whole component in the "Recently paid" section but nothing in the alphabetised list when you tab onto the component, only the encircled `i` icon. I think this would be fixed by applying the above suggested discriminated union and then removing the `href` when it's `div` in the example file.

#### Countries list

- [ ] Can we change the Label's `tag` to `span` rather than a heading. There's no subtext for them to be a heading for so I think this works better from a screen reader UX point of view.

#### Promo tiles

- [ ] If you put a full stop after all of sections of text in the `MOCK_PROMOS` object then the screen reader will pause at these points rather than try to read it in one go. This is more of a FYI, I wouldn't worry too much now but I'm raising it because examples tend to get copy/pasted into real apps.

### Components

#### FlexiCell.tsx

- [ ] Hardcoding the `zIndex` of `9` for the `Badge` will lock us into this position and may cause issues for consumers if, for example, they have a modal within the same stacking context at a higher `zIndex`. I think you can just remove the `zIndex` here and let consumers add their own if they need to.
- [ ] Tests: we need to add tests for `before`, `after`, `body`, `tag`, `badge`, `withArrow`

#### FlexiCellHint.tsx

- [ ] Curious why this is a `small` tag by default - small is usually used for fine print and things of that nature whereas the hint is used in the examples as a paragraph directly below a heading. This probably should be a `p` by default, IMO.
- [ ] `FlexiCellHintProps` need to complete the JSDocs and `children` should be required, i.e. need to remove the `?`.
- [ ] Tests: need to add tests for `tag`, `truncateText`.

#### FlexiCellButton.tsx

- [ ] Lines 19 and 20, can you change `24px` to `1.5rem`
- [ ] The types can be updated as follows (might even be worth making these changes in the `Button` component and then just importing the button props for this since they're the same):
  - [ ] This should also be a discriminated union for the `href` and `a` `tag`, similar to the `Circle` - we should probably limit this to `button`, `a` and maybe `input` but I'll leave that up to you if you think that has value. It would make it easier to type the `onClick` more strictly which would help consumers WRT autocomplete.
  - [ ] `tag?: keyof JSX.IntrinsicElements`
  - [ ] `iconAfter?: (props: IconProps) => JSX.Element`
  - [ ] `iconBefore?: (props: IconProps) => JSX.Element`
  - [ ] `onClick?: MouseEventHandler`
- [ ] Tests: need to add a new test file called `flexi-cell-button.spec.tsx` and add a test for `children`

#### FlexiCellFooter.tsx

- [ ] `useMemo` and `useMediaQuery` imports aren't used and can be removed
      JSDoc on line 6 refers to `Labek` but I think this can be removed or at least changed to `Footer`
- [ ] `FlexiCellFooterProps` needs JSDocs completed and `children` should be required, i.e. remove the `?`
- [ ] Tests: need to add a new test file called `flexi-cell-footer.spec.tsx` and add tests for `children`, `tag`

#### FlexiCellLabel.tsx

- [ ] JSDoc on line 6 refers to `Labek` but I think this can be removed or at least changed to `Label`
- [ ] Need to complete the JSDocs for `FlexiCellLabelProps` and `children` should be required, i.e. need to remove the `?`
- [ ] Tests: need to add tests for `tag`, `truncateText`

#### FlexiCellCircle.tsx

- [ ] Lines 13 and 14, can you change `['30px', '36px']` to `['1.875rem', '2.25rem']`
- [ ] The types can probably just be imported from `Circle` since it's rendering that?
- [ ] Tests: need to add a new test file called `flexi-cell-circle.spec.tsx` and add tests for `children`, `tag`, `href`

#### FlexiCellBody.tsx

- [ ] `FlexiCellBodyProps` would also benefit from the discriminated union for `tag` and `href` similar to `Circle`
- [ ] Need to complete the JSDocs for `FlexiCellBodyProps` and `children` should be required, i.e. need to remove the `?`
- [ ] Tests: need to add a new test file called `flexi-cell-body.spec.tsx` and add tests for `children`, `tag`, `href`

#### FlexiCellAdornment.tsx

- [ ] Need to complete the JSDocs for `FlexiCellAdornmentProps` and `children` should be required, i.e. need to remove the `?`
- [ ] Tests: need to add a `test` for `tag`

#### TypeScript

- [ ] Let's remove all of the `ts-ignore` comments. I don't think we need to hide the TS breakages, we will come back and fix the ones outside these components properly when we have time. We now have the benefit of exported types and these new components are type-safe, so we're not adding tech-debt going forward. My plan is to remove the repeated `tsconfig.json` files, upgrade to TS 5.1, fix all errors, narrow every `all` and `unknown` type, remove any type-casting and add type-checking to CI.
