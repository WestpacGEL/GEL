const major = Array.from({ length: 21 }, (_, i) => i * 6);
const minor = Array.from({ length: 40 }).reduce(
	(acc, _, i) => {
		if (i % 2) acc.push(i * 3);
		return acc;
	},
	[0]
);

module.exports = {
	SPACING: {
		major,
		minor,
	},
};
