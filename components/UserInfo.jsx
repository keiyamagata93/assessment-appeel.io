import { Avatar, Box, Center, Heading, Text } from '@chakra-ui/react';

const UserInfo = ({ user }) => {
	return (
		<Box w="80%" m="0 auto" mb="10">
			<Box w="100%" textAlign="center" p="10">
				<Avatar size="2xl" name={user.name} src={user.avatar_url} />
				<Heading m={5}>{user.name}</Heading>
				<Text>@{user.login}</Text>
			</Box>
			<Center>
				<Box w="150px" bg="gray.100" p={5} textAlign="center" borderRadius="10" mr={5}>
					<Text fontSize="2rem" color="gray.700">
						{user.public_repos}
					</Text>
					<Text color="gray.700">Repositories</Text>
				</Box>
				<Box w="150px" bg="gray.100" p={5} textAlign="center" borderRadius="10" mr={5}>
					<Text fontSize="2rem" color="gray.700">
						{user.followers}
					</Text>
					<Text color="gray.700">Followers</Text>
				</Box>
				<Box w="150px" bg="gray.100" p={5} textAlign="center" borderRadius="10">
					<Text fontSize="2rem" color="gray.700">
						{user.following}
					</Text>
					<Text color="gray.700">Following</Text>
				</Box>
			</Center>
		</Box>
	);
};

export default UserInfo;
