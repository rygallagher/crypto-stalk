import { CoinMarketCapCrypto } from './coin-market-cap-crypto.model';
import { CoinMarketCapStatus } from './coin-market-cap-status.model';

interface ICoinMarketCapPage {
    status: CoinMarketCapStatus;
    data: CoinMarketCapCrypto[];
}

export class CoinMarketCapPage {
    status: CoinMarketCapStatus;
    data: CoinMarketCapCrypto[];

    constructor(page: ICoinMarketCapPage) {
        this.status = page.status;
        this.data = page.data;
    }
}
