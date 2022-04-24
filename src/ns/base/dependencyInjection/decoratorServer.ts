
/**
 * The Decorator Server creates a interface decorator that stores the dependency according to a key
 * using a decorator hence getting full metadata about the dependency
 */

export interface ServiceIdentifier<T> {
    (...args:any[]):void
}

interface ServiceDependencies {
    id: ServiceIdentifier<any>
    index:  any;
}

export namespace util {

    export const serviceIds = new Map<string,ServiceIdentifier<any>>();

    export const DI_TARGET = "$di#target";
    export const DI_DEPENDENCIES = "$di$dependencies"

    export function getServiceDepenencies(ctor:any):ServiceDependencies[]{
        return ctor[DI_DEPENDENCIES] || []
    }
};


function storeServiceDependency(id:Function,target:Function,index:number){
    if((target as any)[util.DI_TARGET] === target){
        (target as any)[util.DI_DEPENDENCIES].push({id,index});
    }else{

        (target as any)[util.DI_DEPENDENCIES] = [{id,index}];
        (target as any)[util.DI_TARGET]  = target;
    }

}


export function createDecorator<T>(serviceId:string):ServiceIdentifier<T>{
    if (util.serviceIds.has(serviceId)) {
        //@ts-ignore;
        return util.serviceIds.get(serviceId);
    };

    const id = <any>function (target:Function,key:string,index:number):any{
        if(arguments.length !== 3){
            throw new Error("Service Decorator should be used to decorate a parameter")
        }
        storeServiceDependency(id,target,index);
    };
    id.toString = () => serviceId;

    util.serviceIds.set(serviceId,id);

    return id;

}