import { Flex, Input, Text, Image } from "@chakra-ui/react";

import { downArrow, flags } from "../utils/Images";
import { Divider } from "./Divider";

export function ConvertingIO() {
	return (
		<Flex
			h="5.6rem"
			w="fit-content"
			border=" 0.1rem solid #94A3B8"
			borderRadius="0.8rem"
			align="center"
			_focusWithin={{
				border: "0.15rem solid #7C3AED",
			}}
		>
			<Input
				w="16.2rem"
				h="100%"
				border="none"
				fontSize="1.6rem"
				borderRadius="0.8rem 0 0 0.8rem"
			/>
			<Flex
				w="13rem"
				h="100%"
				bg="" //#EDE9FE
				borderRadius="0 0.8rem 0.8rem 0"
				justify="center"
				align="center"
				gap="0.8rem"
				pos="relative"
				cursor="pointer"
			>
				<Divider />
				<Image src={flags.USD} alt="usd flag" />
				<Text>USD</Text>
				{downArrow && <Image src={downArrow} alt="downArrow" />}
			</Flex>
		</Flex>
	);
}
