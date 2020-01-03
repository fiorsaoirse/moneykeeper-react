import { BaseModel } from './BaseModel';
import { Category } from './Category';

export class Purchase extends BaseModel {
    public name: string;
    public cost: number;
    public categoryID?: number;
    public category?: Category;

    constructor(id: string, created: Date, name: string,
         cost: number, categoryID?: number, category?: Category) {
             super(id, created);
             this.name = name;
             this.cost = cost;
             this.category = category;
             this.categoryID = categoryID;
         }
}