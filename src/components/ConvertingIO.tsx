import { Flex, Input, Image, Text } from "@chakra-ui/react";

import { CurrencySelect } from "./CurrencySelect";
import { Divider } from "./Divider";
import { downArrow, flags } from "../utils/Images";

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
			<Flex w="16.2rem" align="center" gap="0.8rem">
				<Text ml="1.6rem">R$</Text>
				<Input border="none" fontSize="1.6rem" borderRadius="0" p="0" />
			</Flex>
			<Flex
				w="13rem"
				h="100%"
				bg="" //#EDE9FE
				borderRadius="0 0.8rem 0.8rem 0"
				justify="center"
				align="center"
				pos="relative"
				cursor="pointer"
				gap="0.8rem"
			>
				<Divider />

				<Image src={flags.USD} alt="usd flag" />

				<CurrencySelect />

				<Image src={downArrow} alt="downArrow" />
			</Flex>
		</Flex>
	);
}
