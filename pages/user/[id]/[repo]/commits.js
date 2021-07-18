import Head from 'next/head';
import Commits from '../../../../components/Commits';

const commits = ({ repo, commits }) => {
	return (
		<>
			<Head>
				<title>{repo} | commits</title>
			</Head>
			<Commits commits={commits} />
		</>
	);
};

// Server side rendering
export const getServerSideProps = async context => {
	// Selecteer id vanuit context (github username)
	const id = context.query.id;
	const repo = context.query.repo;

	// Datafetching van juiste data
	const res = await fetch(`https://api.github.com/repos/${id}/${repo}/commits?per_page=20`, {
		headers: { Authorization: process.env.GITHUB_TOKEN },
	});
	const commits = await res.json();

	return { props: { repo, commits } };
};

export default commits;
