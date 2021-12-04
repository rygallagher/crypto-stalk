import { CoinMarketCapQuote } from './coin-market-cap-quote.model';

/* eslint-disable @typescript-eslint/naming-convention */
interface ICoinMarketCapCrypto {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    date_added: Date;
    tags: string[];
    max_supply: number;
    circulating_supply: number;
    total_supply: number;
    cmc_rank: number;
    last_updated: Date;
    quote: CoinMarketCapQuote;
}

export class CoinMarketCapCrypto {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    date_added: Date;
    tags: string[];
    max_supply: number;
    circulating_supply: number;
    total_supply: number;
    cmc_rank: number;
    last_updated: Date;
    quote: CoinMarketCapQuote;

    constructor(crypto: ICoinMarketCapCrypto) {
        this.id = crypto.id;
        this.name = crypto.name;
        this.symbol = crypto.symbol;
        this.slug = crypto.slug;
        this.date_added = crypto.date_added;
        this.tags = crypto.tags;
        this.max_supply = crypto.max_supply;
        this.circulating_supply = crypto.circulating_supply;
        this.total_supply = crypto.total_supply;
        this.cmc_rank = crypto.cmc_rank;
        this.last_updated = crypto.last_updated;
        this.quote = crypto.quote;
    }
}
