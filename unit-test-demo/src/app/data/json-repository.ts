import { AbstractJsonRepository } from "../core/interfaces/abstract-json-repository";

export class JsonRepository extends AbstractJsonRepository
{
  add(aObject: any, collection: string): string {
    throw new Error("Method not implemented.");
  }
  delete(id: string, collection: string): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: string, collection: string): any {
    throw new Error("Method not implemented.");
  }
  recordExists(id: string, collection: string): boolean {
    throw new Error("Method not implemented.");
  }

  getAll(collection:string): Array<any>
  {
    return [];
  }

}