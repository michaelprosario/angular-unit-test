import { AbstractJsonRepository } from "src/app/core/interfaces/abstract-json-repository";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

export class JsonDataService
{
    constructor(private repository: AbstractJsonRepository){

    }

    public add(aObject: any, collection: string): string {
        return this.repository.add(aObject, collection);
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