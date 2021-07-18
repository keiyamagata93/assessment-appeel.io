import NextLink from 'next/link';
import { Box, Center, Grid, Heading } from '@chakra-ui/react';

const Repos = ({ id, repos }) => {
	return (
		<Box w="80%" m="0 auto" mb="10">
			<Heading m="3em 0 2em" textAlign="center">
				Repositories
			</Heading>
			<Grid templateColumns="repeat(3, 1fr)" gap={5}>
				{repos.message !== 'Not Found' &&
					repos.map(repo => (
						<NextLink key={repo.id} href={`/user/${id}/${repo.name}/commits`}>
							<a>
								<Center h="100px" borderRadius="10" bg="gray.100">
									<Heading fontSize="l" color="gray.700">
										{repo.name}
									</Heading>
								</Center>
							</a>
						</NextLink>
					))}
			</Grid>
		</Box>
	);
};

export default Repos;
