# Handover notes

## Keystone

- The Keystone stuff lives in `/website`. See `extend-schema.js`, which I think is currently not utilised in the `index.js` file

## NextJS site

- NextJS site lives in `/website/site`
- Apollo Provider set up in `/website/site/lib/withApollo.js`

## Brand Picker + storage in cookie

- The logic for picking/switching/selecting a brand lives in the `_app.js` file. It needs a bit of work

## Single component view

- The UI for the single component view is broken down in multiple components in the `/website/site/components/pages/single-component`
- The "intro section" doesn't have actual links, it's just a list of text items for now

## Site Navigation

- Navigation items are currently hardcoded in `/website/site/components/layout/navigation/navigation.js`
