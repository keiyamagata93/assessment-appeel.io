import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button, Flex, Heading, Input, Icon } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Home = () => {
	const [username, setUsername] = useState('');
	const router = useRouter();

	const handleChange = e => {
		setUsername(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		router.push(`/user/${username}`);
	};

	return (
		<div>
			<Head>
				<title>Technische assessment | GitHub api</title>
			</Head>

			<Flex as="main" alignItems="center" flexDir="column" w="100vw">
				<Icon as={FaGithub} boxSize="60px" mt="200px" mb="5" />
				<Heading mb="5">Find your GitHub account</Heading>
				<Flex as="form" w="50%" onSubmit={handleSubmit}>
					<Input
						placeholder="GitHub Username"
						value={username}
						onChange={handleChange}
						mr={5}
					/>
					<Button type="submit">Search</Button>
				</Flex>
			</Flex>
		</div>
	);
};

export default Home;
