import { Flex, Img } from "@chakra-ui/react";

import { ContainerWrapper } from "./ContainerWrapper";
import { ConvertingIO } from "./ConvertingIO";

import { direction } from "../utils/Images";

export function CurrencyConverter() {
	return (
		<Flex direction="column" gap="1.6rem">
			<ContainerWrapper title="Currency converter">
				<Flex justify="space-between">
					<ConvertingIO />
					<Img src={direction} w="1.8rem"></Img>
					<ConvertingIO />
				</Flex>
			</ContainerWrapper>
		</Flex>
	);
}
