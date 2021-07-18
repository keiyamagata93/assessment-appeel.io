import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Userinfo from '../../../components/UserInfo';
import Repos from '../../../components/Repos';
import NotFound from '../../../components/NotFound';

const user = ({ id, userData, reposData }) => {
	return (
		<>
			<Head>
				<title>
					GitHub | {userData.message !== 'Not Found' ? userData.login : 'User Not Found'}
				</title>
			</Head>
			<Box as="main">
				{userData.message === 'Not Found' && <NotFound />}
				{userData.message !== 'Not Found' && <Userinfo user={userData} />}
				{reposData.message !== 'Not Found' && <Repos id={id} repos={reposData} />}
			</Box>
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

	const res2 = await fetch(`https://api.github.com/users/${id}/repos`, {
		headers: { Authorization: process.env.GITHUB_TOKEN },
	});
	const reposData = await res2.json();
	// console.log(userData);
	// console.log(reposData);
	return { props: { id, userData, reposData } };
};

export default user;
