import { Cardable } from './cardable';

export class Card implements Cardable {
    constructor(public header: string, public content: String, public link: String,
        public starred: Boolean, public footer: String, public time: string,
        public source: string, public searchable: string[]) { }

    toCard() {
        return this;
    }

    flip() {
        this.starred = !this.starred;
    }
}

