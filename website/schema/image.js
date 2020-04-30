const { Text, File } = require('@keystonejs/fields');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');

const fileAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
});

const imageSchema = {
	adminDoc: 'See below all images uploaded and hosted for you.',
	fields: {
		image: {
			type: File,
			adapter: fileAdapter,
			hooks: {
				beforeChange: async ({ existingItem }) => {
					if (existingItem && existingItem.image) {
						await fileAdapter.delete(existingItem.image);
					}
				},
			},
		},
		caption: { type: Text },
	},
	hooks: {
		afterDelete: async ({ existingItem }) => {
			if (existingItem.image) {
				await fileAdapter.delete(existingItem.image);
			}
		},
	},
	adminConfig: {
		defaultColumns: '',
		defaultSort: 'image',
	},
	labelField: 'image',
};

module.exports = { imageSchema };
