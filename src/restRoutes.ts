export default class Router {
    private static _instance: Router;
    private baseUri = 'http://localhost:3000';

    private constructor () {
    }

    public static getInstance(): Router {
        if (!Router._instance) {
            Router._instance = new Router();
        }
        return Router._instance;
    }

    public purchasesUrl (id?: number): string {
        const url = `${this.baseUri}/purchases/`;
        return (id ? `${url}${id}` : url);
    }

    public categoriesUrl (id?: number): string {
        const url = `${this.baseUri}/categories/`;
        return (id ? `${url}id=${id}` : url);
    }
}