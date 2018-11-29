import { Card } from './card';

export interface Cardable {
    flip(): void;
    toCard(): Card;
}
