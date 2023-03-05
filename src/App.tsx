import { AppWrapper } from "./components/AppWrapper";
import { CurrencyConverter } from "./components/CurrencyConverter";
import { ExchangeRate } from "./components/ExchangeRate";

export function App() {
	return (
		<AppWrapper>
			<CurrencyConverter />

			<ExchangeRate />
		</AppWrapper>
	);
}
