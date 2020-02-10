import Dashboard from './pages';

export default {
	pages: () => [
		{
			label: 'Dashboard',
			path: '',
			component: Dashboard,
		},
		{
			listKey: 'Page',
		},
		{
			listKey: 'User',
		},
	],
};
