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
				<title>Technische assessment | Appeel.io</title>
			</Head>

			<Flex as="main" as="section" justify="center" align="center" flexDir="column" h="100vh">
				<Icon as={FaGithub} boxSize="60px" mb="5" />
				<Heading mb="10">Find your GitHub Profile</Heading>
				<Flex as="form" w="400px" onSubmit={handleSubmit}>
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
