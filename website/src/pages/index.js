export default function GEL() {
	return null;
}

export const getServerSideProps = async (context) => {
	const { res } = context;
	res.writeHead(301, { location: 'https://gel.westpacgroup.com.au' });
	res.end();
};
