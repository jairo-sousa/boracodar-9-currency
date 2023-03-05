import { Heading } from "@chakra-ui/react";

type ContainerWrapperProps = {
	children: React.ReactNode;
	title?: string;
};

export function ContainerWrapper({ children, title }: ContainerWrapperProps) {
	return (
		<>
			{title && (
				<Heading as="h2" fontSize="2rem" fontWeight={600}>
					{title}
				</Heading>
			)}
			{children}
		</>
	);
}
