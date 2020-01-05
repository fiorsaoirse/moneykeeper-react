import { BaseModel } from './BaseModel';

export class Category extends BaseModel {
    public name: string;
    public description: string;
    public limit?: number;

    public constructor(id: string, created: Date, name: string,
                       description: string, limit?: number) {
            super(id, created);
            this.name = name;
            this.description = description;
            this.limit = limit;
        }
}