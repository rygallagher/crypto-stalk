import { Crypto } from './crypto.model';

interface ISettings {
    myList: Crypto[];
    myListSort: string;
    updatesOptInStatus: boolean;
    notificationsOptInStatus: boolean;
    updatesFrequency: number;
}

export class Settings {
    myList: Crypto[];
    myListSort: string;
    updatesOptInStatus: boolean;
    notificationsOptInStatus: boolean;
    updatesFrequency: number;

    constructor(settings: ISettings) {
        this.myList = settings.myList;
        this.myListSort = settings.myListSort;
        this.updatesOptInStatus = settings.updatesOptInStatus;
        this.notificationsOptInStatus = settings.notificationsOptInStatus;
        this.updatesFrequency = settings.updatesFrequency;
    }
}
