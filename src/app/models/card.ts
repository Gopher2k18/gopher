import { Cardable } from './cardable';

export class Card implements Cardable {
    constructor(public header: String, public content: String, public link: String,
        public starred: Boolean, public footer: String, public time: String) { }

    toCard(): Card {
        return this;
    }

    flip() { }
}

