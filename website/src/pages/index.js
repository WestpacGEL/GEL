export default function GEL() {
	return null;
}

export const getServerSideProps = async ({ res }) => {
	return { redirect: { statusCode: 301, destination: '/articles' } };
};
