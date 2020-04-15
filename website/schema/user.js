const { Text, Password } = require('@keystonejs/fields');

const userSchema = {
	fields: {
		email: { type: Text },
		password: { type: Password },
	},
};

module.exports = { userSchema };
