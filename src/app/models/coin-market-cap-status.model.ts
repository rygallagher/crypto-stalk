/* eslint-disable @typescript-eslint/naming-convention */
interface ICoinMarketCapStatus {
    timestamp: Date;
    error_code: number;
    error_message?: string;
    elapsed: number;
    credit_count: number;
    total_count: number;
}

export class CoinMarketCapStatus {
    timestamp: Date;
    error_code: number;
    error_message?: string;
    elapsed: number;
    credit_count: number;
    total_count: number;

    constructor(page: ICoinMarketCapStatus) {
        this.timestamp = page.timestamp;
        this.error_code = page.error_code;
        this.error_message = page.error_message;
        this.elapsed = page.elapsed;
        this.credit_count = page.credit_count;
        this.total_count = page.total_count;
    }
}
