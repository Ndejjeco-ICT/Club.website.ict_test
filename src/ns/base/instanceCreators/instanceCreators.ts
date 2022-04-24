export interface IIInstance<T> {

    new(...args: any): T;
    
};


export function createInstance<T>(constructor:IIInstance<T>) {
    return new constructor();
};