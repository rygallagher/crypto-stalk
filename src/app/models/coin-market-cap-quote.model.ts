import { CoinMarketCapCurrency } from './coin-market-cap-currency.model';

/* eslint-disable @typescript-eslint/naming-convention */
interface ICoinMarketCapQuote {
    currency: CoinMarketCapCurrency;
}

export class CoinMarketCapQuote {
    currency: CoinMarketCapCurrency;

    constructor(crypto: ICoinMarketCapQuote) {
        this.currency = crypto.currency;
    }
}
