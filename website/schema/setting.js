const { Text } = require('@keystonejs/fields');

const settingSchema = {
	adminDoc: 'The navigation object. It allows us to manage the navigation of the site.',
	fields: {
		name: { type: Text },
		value: { type: Text },
	},
};

module.exports = { settingSchema };
