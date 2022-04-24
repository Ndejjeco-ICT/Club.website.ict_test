import { ServiceIdentifier } from "./decoratorServer";

/**
 * The Service collection is a collection of created instances ;
 */

export class ServiceCollection {

    private _entries = new Map<ServiceIdentifier<any>,any>();

    set<T>(id:ServiceIdentifier<T>,instance:T){
        if(!this._entries.has(id)){
            this._entries.set(id,instance);
        }
    };

    has(id:ServiceIdentifier<any>):boolean {
        return this._entries.has(id);
    };

    get<T>(id:ServiceIdentifier<T>){
        return this._entries.get(id);
    }

};