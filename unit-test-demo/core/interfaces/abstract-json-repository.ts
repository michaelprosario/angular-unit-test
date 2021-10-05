export abstract class AbstractJsonRepository
{
    constructor(){


    }

    public add(aObject: any, collection:string): string;
    public delete(id: string, collection: string): void;
    public get(id: string, collection: string): any;
    public recordExists(id: string, collection: string): boolean;
    public getAll(collection:string);
