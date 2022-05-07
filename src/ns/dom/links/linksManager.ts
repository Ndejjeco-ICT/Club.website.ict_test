import {createInstance} from "ns/base/instanceCreators/instanceCreators"


export interface ILinkMnanager {

    LinkToFaceBook():void;
    LinkToInstagram():void;
    LinkToTwitter():void;
}



export class LinkManager implements ILinkMnanager {
    private DOM:Document;
    constructor() { 
        this.DOM = document;
    };


    LinkToFaceBook(): void {
    
        window.open("https://web.facebook.com/NdejjeSSS/","","");

    }
    LinkToInstagram(): void {
        window.open("https://www.instagram.com/ndejjesss/","","")

    }
    LinkToTwitter(): void {
        window.open("https://twitter.com/ndejjess","","");
    }

}


export const LinksManagerSystem = createInstance<ILinkMnanager>(LinkManager);
