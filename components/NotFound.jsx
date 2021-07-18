import Link from 'next/link';
import { Flex, Heading } from '@chakra-ui/react';

const NotFound = () => {
	return (
		<Flex as="section" justify="center" align="center" flexDir="column" h="100vh">
			<Heading mb="5">User not found!</Heading>
			<Link href="/">
				<a>Back</a>
			</Link>
		</Flex>
	);
};

export default NotFound;
