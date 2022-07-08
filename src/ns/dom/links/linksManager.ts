import {createInstance} from "ns/base/instanceCreators/instanceCreators"


export interface ILinkMnanager {

    LinkToFaceBook():void;
    LinkToInstagram():void;
    LinkToTwitter():void;
}

/**
 * The Links Manager System Creates sublinks that are opened as tabs to the request locatios.
 */



export class LinkManager implements ILinkMnanager {
    constructor() { };

    /**
     * Link to Facebook with no target
     */
    LinkToFaceBook(): void {
    
        window.open("https://web.facebook.com/NdejjeSSS/","","");
    }

    /**
     * Link to Instagram with no target
     */
    LinkToInstagram(): void {
        window.open("https://www.instagram.com/ndejjesss/","","")

    }
     /**
     * Link to Twitter with no target
     */
    LinkToTwitter(): void {
        window.open("https://twitter.com/ndejjess","","");
    }

}


export const LinksManagerSystem = createInstance<ILinkMnanager>(LinkManager);
