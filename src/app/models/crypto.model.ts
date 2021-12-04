
import { Stalk } from './stalk.model';

interface ICrypto {
    cmcId: number;
    stalks: Stalk[];
}

export class Crypto {
    cmcId: number;
    stalks: Stalk[];

    constructor(crypto: ICrypto) {
        this.cmcId = crypto.cmcId;
        this.stalks = crypto.stalks;
    }
}
