import fs from 'fs';
import path from 'path';
// eslint-disable-next-line import/no-unresolved
import { Context } from '.keystone/types';

// 1
const seedUsers = async (context: Context) => {
	const { query } = context.sudo();
	const rawJSONData = fs.readFileSync(path.resolve(__dirname, './users.json'), 'utf-8');
	const seedUsers = JSON.parse(rawJSONData);

	for (const user of seedUsers) {
		try {
			const queriedUser = await query.User.findOne({
				where: {
					email: user.email,
				},
			});

			if (!queriedUser) {
				await query.User.createOne({
					data: {
						email: user.email,
						name: user.name,
						password: user.password,
					},
				});
			}
		} catch (e) {
			console.error('Seeding user failed: ', { user: user, message: (e as Error).message });
		}
	}
};

// 2
const seedArticles = async (context: Context) => {
	const { query } = context.sudo();
	const rawJSONData = fs.readFileSync(path.resolve(__dirname, './articles.json'), 'utf-8');
	const seedArticles = JSON.parse(rawJSONData);

	for (const article of seedArticles) {
		try {
			const queriedArticles = await query.Article.findMany({
				where: {
					pageTitle: { equals: article.pageTitle },
				},
			});

			if (!queriedArticles.length) {
				await query.Article.createOne({
					data: {
						pageTitle: article.pageTitle,
						url: article.url,
						content: article.content?.document || undefined,
						cardTitle: article.cardTitle,
						cardDescription: article.cardDescription,
						cardDescriptionSecondary: article.cardDescriptionSecondary,
						...(article.author?.connect?.email && {
							author: {
								connect: {
									email: article.author.connect.email,
								},
							},
						}),
					},
				});
			}
		} catch (e) {
			console.error('Seeding article failed: ', {
				article: article,
				message: (e as Error).message,
			});
		}
	}
};

const seedThousandArticles = async (context: Context) => {
	const { query } = context.sudo();

	for (let i = 0; i < 1000; ++i) {
		try {
			await query.Article.createOne({
				data: {
					pageTitle: 'title: ' + i,
					url: '/' + 'url' + i,
					cardTitle: 'cardTitle: ' + i,
					cardDescription: 'cardDescription: ' + i,
					author: {
						connect: {
							email: 'dev@yopmail.com',
						},
					},
				},
			});
		} catch (e) {
			console.error('something went wrong');
		}
	}
};

export const seedDatabase = async (context: Context) => {
	await seedUsers(context);
	await seedArticles(context);
	// await seedThousandArticles(context);
};
