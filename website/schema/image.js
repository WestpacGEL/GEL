const { Text } = require('@keystonejs/fields');
const { ImageService, Image } = require('@keystonejs/images');

const imageService = new ImageService({
	path: './images',
	port: 4008,
	host: 'localhost',
});

const imageSchema = {
	fields: {
		image: {
			type: Image,
			service: imageService,
			// hooks: {
			// 	beforeChange: async ({ existingItem }) => {
			// 		if (existingItem && existingItem.image) {
			// 			await fileAdapter.delete(existingItem.image);
			// 		}
			// 	},
			// },
		},
		caption: { type: Text },
	},
	// hooks: {
	// 	// afterDelete: async ({ existingItem }) => {
	// 	// 	if (existingItem.image) {
	// 	// 		await fileAdapter.delete(existingItem.image);
	// 	// 	}
	// 	// },
	// },
};

module.exports = { imageSchema };
