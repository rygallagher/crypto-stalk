interface IStalk {
    type: string;
    value: string;
    frequency?: string;
}

export class Stalk {
    type: string;
    value: string;
    frequency: string;

    constructor(stalk: IStalk) {
        this.type = stalk.type || null;
        this.value = stalk.value || null;
        this.frequency = stalk.frequency || null;
    }
}
