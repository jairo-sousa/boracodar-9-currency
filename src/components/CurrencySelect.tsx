import { Flex, Text, Image } from "@chakra-ui/react";

import { flags } from "../utils/Images";

type CurrencySelectProps = {
	isOpen?: boolean;
};

export function CurrencySelect({ isOpen }: CurrencySelectProps) {
	return (
		<Flex pos="relative">
			<Text>USD</Text>
			{isOpen && (
				<Flex
					pos="absolute"
					direction="column"
					padding="1.2rem 1.6rem"
					bg="#FFFFFF"
					w="16rem"
					h="17rem"
					gap="2.4rem"
					borderRadius="0.8rem"
					overflowY="scroll"
					top="5rem"
					left="-5rem"
					css={{
						"&::-webkit-scrollbar": {
							width: "0.2rem",
							height: "2.4rem",
						},
						"&::-webkit-scrollbar-track": {
							width: "0.2rem",
							height: "2.4rem",
						},
						"&::-webkit-scrollbar-thumb": {
							background: "#94A3B8",
							borderRadius: "2rem",
						},
					}}
				>
					{Object.keys(flags).map((flag, i) => {
						const flagImage = () => {
							try {
								return flags[`${flag}`];
							} catch {
								return "";
							}
						};
						return (
							<Flex gap="0.8rem" key={`${flag} - ${i}`}>
								<Image src={flagImage()} alt={`${flag} flag`} />
								<Text>{flag}</Text>
							</Flex>
						);
					})}
				</Flex>
			)}
		</Flex>
	);
}
