import Head from 'next/head';
import Userinfo from '../../../components/UserInfo';
import Repos from '../../../components/Repos';

const user = ({ id, userData, reposData }) => {
	return (
		<>
			<Head>
				<title>GitHub api | {userData.login}</title>
			</Head>
			<Userinfo user={userData} />
			<Repos id={id} repos={reposData} />
		</>
	);
};

// Server side rendering
export const getServerSideProps = async context => {
	// Selecteer id vanuit context (github username)
	const id = context.query.id;

	// Datafetching van juiste data
	const res1 = await fetch(`https://api.github.com/users/${id}`, {
		headers: { Authorization: process.env.GITHUB_TOKEN },
	});
	const userData = await res1.json();

	const res2 = await fetch(`https://api.github.com/users/${id}/repos`);
	const reposData = await res2.json();

	return { props: { id, userData, reposData } };
};

export default user;
