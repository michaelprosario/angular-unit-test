import { AbstractJsonRepository } from "src/app/core/interfaces/abstract-json-repository";

export class JsonDataService
{
    constructor(private repository: AbstractJsonRepository){

    }

    public add(aObject: any, collection: string): string{
        return "";
    }

    public delete(id: string, collection: string): string{
        return "";
    }

    public get(id: string, collection: string): string{
        return "";
    }

    public getAll(collection: string): Array<any>
    {
        return [];
    }

}