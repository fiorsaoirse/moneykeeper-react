import { BaseModel } from '../classes/BaseModel';
import { Purchase } from '../classes/Purchase';

// Base entity state for store
interface IStandartEntity<T extends BaseModel> {
    // AppData state: creating, reading, updating, deleting etc states for rendering
    app: {
        [ key: string ]: string,
    };
    // DomainData state: all entites, contained as map of entities by ids, and array of ids
    data: {
        byId: {
            [ key: string ]: T
        }
        allIds: string[]
    };
}

export interface IState {
    purchases: IStandartEntity<Purchase>;
}