const { Text } = require('@keystonejs/fields');

const settingSchema = {
	fields: {
		name: { type: Text },
		value: { type: Text },
	},
};

module.exports = { settingSchema };
