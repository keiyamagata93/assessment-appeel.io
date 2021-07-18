import NextLink from 'next/link';
import { Box, Center, Grid, Heading, Link } from '@chakra-ui/react';

const Repos = ({ id, repos }) => {
	return (
		<Box w="80%" m="0 auto" mb="10">
			<Heading m="3em 0 2em" textAlign="center">
				Repositories
			</Heading>
			<Grid templateColumns="repeat(3, 1fr)" gap={5}>
				{repos.map(repo => (
					<NextLink key={repo.id} href={`/user/${id}/${repo.name}/commits`}>
						<a>
							<Center bg="gray.900" h="100px" borderRadius="10">
								<Heading fontSize="l">{repo.name}</Heading>
							</Center>
						</a>
					</NextLink>
				))}
			</Grid>
		</Box>
	);
};

export default Repos;
