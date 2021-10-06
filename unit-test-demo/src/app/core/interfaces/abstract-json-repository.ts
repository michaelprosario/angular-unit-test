export abstract class AbstractJsonRepository
{
    constructor(){


    }

    abstract add(aObject: any, collection:string): string;
    abstract delete(id: string, collection: string): void;
    abstract get(id: string, collection: string): any;
    abstract recordExists(id: string, collection: string): boolean;
    abstract getAll(collection:string): [];
}