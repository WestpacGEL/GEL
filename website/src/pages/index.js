export default function GEL() {
	return null;
}

export const getServerSideProps = async ({ res }) => {
	if (process.env.NODE_ENV === 'production') {
		return { redirect: { statusCode: 301, destination: 'https://gel.westpacgroup.com.au' } };
	} else {
		return { redirect: { statusCode: 301, destination: '/design-system' } };
	}
};
