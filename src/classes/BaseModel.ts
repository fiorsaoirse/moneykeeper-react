export class BaseModel {
    public id: string;
    public created: Date;

    public constructor(id: string, created: Date) {
        this.id = id;
        this.created = created;
    }
}