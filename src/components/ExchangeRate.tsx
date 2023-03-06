import { Flex, Image } from "@chakra-ui/react";
import { ContainerWrapper } from "./ContainerWrapper";
import { chart } from "../utils/Images";

export function ExchangeRate() {
	return (
		<Flex direction="column" gap="2.4rem">
			<ContainerWrapper title="Exchange rate">
				<Image src={chart} alt="chart" />
			</ContainerWrapper>
		</Flex>
	);
}
