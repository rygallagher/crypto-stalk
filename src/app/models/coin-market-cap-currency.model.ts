/* eslint-disable @typescript-eslint/naming-convention */
interface ICoinMarketCapCurrency {
    price: number;
    volume_24h: number;
    volume_change_24h: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    percent_change_30d: number;
    percent_change_60d: number;
    percent_change_90d: number;
    market_cap: number;
    market_cap_dominance: number;
    fully_diluted_market_cap: number;
    last_updated: Date;
}

export class CoinMarketCapCurrency {
    price: number;
    volume_24h: number;
    volume_change_24h: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    percent_change_30d: number;
    percent_change_60d: number;
    percent_change_90d: number;
    market_cap: number;
    market_cap_dominance: number;
    fully_diluted_market_cap: number;
    last_updated: Date;

    constructor(crypto: ICoinMarketCapCurrency) {
        this.price = crypto.price;
        this.volume_24h = crypto.volume_24h;
        this.volume_change_24h = crypto.volume_change_24h;
        this.percent_change_1h = crypto.percent_change_1h;
        this.percent_change_24h = crypto.percent_change_24h;
        this.percent_change_7d = crypto.percent_change_7d;
        this.percent_change_30d = crypto.percent_change_30d;
        this.percent_change_60d = crypto.percent_change_60d;
        this.percent_change_90d = crypto.percent_change_90d;
        this.market_cap = crypto.market_cap;
        this.market_cap_dominance = crypto.market_cap_dominance;
        this.fully_diluted_market_cap = crypto.fully_diluted_market_cap;
        this.last_updated = crypto.last_updated;
    }
}
