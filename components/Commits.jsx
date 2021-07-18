import { useState } from 'react';
import { Avatar, Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import style from '../styles/Commits.module.scss';

const Commits = ({ commits }) => {
	const [keyword, setKeyword] = useState('');
	const [inputValue, setInputValue] = useState('');

	const handleChange = e => {
		setInputValue(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setKeyword(inputValue.toLowerCase());
	};

	return (
		<div>
			<Box w="80%" m="0 auto">
				<Heading mt="10">Laatste 20 commits</Heading>
				<form onSubmit={handleSubmit}>
					<Input
						value={inputValue}
						onChange={handleChange}
						placeholder="filter commits"
						mt="10"
						w="300px"
					/>
					<Button type="submit" ml={3}>
						Search
					</Button>
				</form>
				<Box mt="10" mb="10" borderWidth="1px" borderRadius="lg">
					{commits
						.filter(commit => commit.commit.message.toLowerCase().includes(keyword))
						.map(commit => (
							<Box
								key={commit.node_id}
								p="10px 20px"
								borderBottomWidth="1px"
								className={style.commits}>
								<Text w="60%">{commit.commit.message}</Text>
								<Flex mt={1}>
									<Avatar
										size="xs"
										src={commit.author ? commit.author.avatar_url : null}
										mr={2}
									/>
									<Text mr={2}>{commit.author ? commit.author.login : null}</Text>
									<Text fontSize="xs" lineHeight="2">
										{commit.commit.committer.date.slice(0, 10)}
									</Text>
								</Flex>
							</Box>
						))}
				</Box>
			</Box>
		</div>
	);
};

export default Commits;
