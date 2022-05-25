export interface IWebComponents {

    connectedCallback?(): void;
    disConnectedCallback?(): void;
    attributeChangedCallback?(name:string,newValue:string,oldValue:string): void;
    

}