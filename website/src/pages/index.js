export default function GEL() {
	return null;
}

export const getServerSideProps = async ({ res }) => {
	res.setHeader('location', 'https://gel.westpacgroup.com.au');
	res.statusCode = 301;
	res.end();
	return { props: {} };
};
