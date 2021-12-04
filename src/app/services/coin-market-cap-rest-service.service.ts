import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CoinMarketCapRestService {
    baseUrl = environment.apiUrl;
    apiKey = environment.apiKey;

    constructor(
        private http: HttpClient,
    ) {}

    get(pathSegments: any[], queryParameters: Map<string, any>): Observable<any> {
        const pathSegmentString = this.buildPathSegments(pathSegments);
        const queryParameterString = this.buildQueryParameters(queryParameters);
        const headers = new HttpHeaders()
            .set('X-CMC_PRO_API_KEY', this.apiKey)
            .set('Access-Control-Allow-Origin', '*')
            .set('Accept', 'application/json');

        return this.http.get<any>(
            `${this.baseUrl}${pathSegmentString}${queryParameterString}`,
            { headers },
        );
      }

    getAll(pathSegments: string[], queryParameters: Map<string, any>): Observable<any[]> {
        const pathSegmentString = this.buildPathSegments(pathSegments);
        const queryParameterString = this.buildQueryParameters(queryParameters);
        const headers = new HttpHeaders()
            .set('X-CMC_PRO_API_KEY', this.apiKey)
            .set('Access-Control-Allow-Origin', '*')
            .set('Accept', 'application/json');

        return this.http.get<any[]>(
            `${this.baseUrl}${pathSegmentString}${queryParameterString}`,
            { headers },
        );
    }

    private buildPathSegments(pathSegments: string[]): string {
        if (pathSegments != null && pathSegments.length > 0) {
            return `/${pathSegments.join('/')}`;
        } else {
            return '';
        }
    }

    private buildQueryParameters(queryParameters: Map<string, any>): string {
        if (queryParameters != null && (queryParameters.size > 0)) {
            return `?${Array.from(queryParameters.keys()).map(key => `${key}=${queryParameters.get(key)}`).join('&')}`;
        } else {
            return '';
        }
    }
}
