import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from 'src/app/constants/coin-market-cap-endpoints.constant';
import { CoinMarketCapCrypto } from 'src/app/models/coin-market-cap-crypto.model';
import { CoinMarketCapPage } from 'src/app/models/coin-market-cap-page.model';
import { CoinMarketCapRestService } from 'src/app/services/coin-market-cap-rest-service.service';

@Component({
    selector: 'app-all-crypto',
    templateUrl: './all-crypto.component.html',
    styleUrls: ['./all-crypto.component.scss'],
})
export class AllCryptoComponent implements OnInit {

    coinMarketCapCryptos: CoinMarketCapCrypto[] = [];
    start = 1;
    limit = 25;
    convert = 'USD';
    loadingCryptos = false;

    constructor(
        private coinMarketCapRestService: CoinMarketCapRestService,
    ) { }

    ngOnInit(): void {
        this.loadingCryptos = true;

        this.getCryptos().subscribe((coinMarketCapPage: CoinMarketCapPage) => {
            this.coinMarketCapCryptos = coinMarketCapPage.data;
            this.loadingCryptos = false;
        }, () => this.loadingCryptos = false);
    }

    getCryptos(): Observable<any> {
        this.loadingCryptos = true;

        const queryParameters = new Map<string, string>([
            ['start', this.start.toString()],
            ['limit', this.limit.toString()],
            ['convert', this.convert],
        ]);

        return this.coinMarketCapRestService.get([Endpoints.cryptocurrency, Endpoints.listings, Endpoints.latest], queryParameters);
    }

    getInfinitelyMoreCryptos(): void {
        this.start = this.start + this.limit;

        this.getCryptos().subscribe((coinMarketCapPage: CoinMarketCapPage) => {
            this.coinMarketCapCryptos = [...this.coinMarketCapCryptos, ...coinMarketCapPage.data];
            this.loadingCryptos = false;
        }, () => this.loadingCryptos = false);
    }
}
