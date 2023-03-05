import { Flex } from "@chakra-ui/react";

type AppWrapperProps = {
	children: React.ReactNode;
};

export function AppWrapper({ children }: AppWrapperProps) {
	return (
		<Flex
			direction="column"
			bg="#FFFFFF"
			w="80rem"
			h="68.2rem"
			borderRadius="1.6rem"
			boxShadow="0px 4px 32px rgba(15, 23, 42, 0.15)"
			gap="6.4rem"
			p="6.4rem 8rem"
		>
			{children}
		</Flex>
	);
}
