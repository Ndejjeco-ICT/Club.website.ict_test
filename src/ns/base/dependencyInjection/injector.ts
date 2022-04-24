import { ServiceIdentifier, util } from "./decoratorServer";
import { ServiceCollection } from "./serviceCollectionManager";

/**
 * This is the Main Injector that injects all dependencies at runtime
 * and places them in;
 * 
 * The Injector takes a service collection(map) containing all required dependencies and colorates them
 * to the write module enabling the website depend on one dependency for all its lifetime;
 */

export class Injector {

    private readonly _services:ServiceCollection;

    constructor(services:ServiceCollection){
        this._services = services;
    }

    getOrCreateServiceInstance<T>(id:ServiceIdentifier<T>){
        let _instanceDesc = this._services.get(id);
        return _instanceDesc;
    }

    createInstance<T>(ctor:any):T{
        //organise dependencies relative to their position in the parameters
        let _serviceDependencies = util.getServiceDepenencies(ctor).sort((a,b)=>a.index  - b.index);

        let _servieArgs:any[] = [];

        for(const dependency of _serviceDependencies) {
            let service = this.getOrCreateServiceInstance(dependency.id);

            if(!service){
                throw new Error("Unknown Service");
            };
            _servieArgs.push(service);
        };

        return <T>new ctor(..._servieArgs);

    };
};