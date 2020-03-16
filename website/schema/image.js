const { Text, File } = require('@keystonejs/fields');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');

const fileAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET,
});

const imageSchema = {
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
};

module.exports = { imageSchema };
