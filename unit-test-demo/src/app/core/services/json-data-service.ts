import { AbstractJsonRepository } from "src/app/core/interfaces/abstract-json-repository";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

export class JsonDataService
{
    constructor(private repository: AbstractJsonRepository){

    }

    public add(aObject: any, collection: string): string {
        if(!collection || collection === ""){
            throw new Error("collection is not defined");
        }

        return this.repository.add(aObject, collection);
    }

    public delete(id: string, collection: string): boolean{
        if(!collection || collection === ""){
            throw new Error("collection is not defined");
        }

        if(!id || id === ""){
            throw new Error("collection is not defined");
        }

        if(this.repository.recordExists(id, collection))
        {
            return false;
        }

        this.repository.delete(id, collection);
        return true;
    }

    public get(id: string, collection: string): any{
        if(!collection || collection === ""){
            throw new Error("collection is not defined");
        }

        if(!id || id === ""){
            throw new Error("collection is not defined");
        }

        if(this.repository.recordExists(id, collection))
        {
            return null;
        }


        return this.repository.get(id, collection);
    }

    public getAll(collection: string): Array<any>
    {
        return [];
    }

}