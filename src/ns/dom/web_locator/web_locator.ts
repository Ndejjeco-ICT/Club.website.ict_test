import { MainRoutes } from "ns/base/Router/Router";
import { WebMainInstance } from "ns/components/root/root";
import {createInstance} from "ns/base/instanceCreators/instanceCreators"


/**
 * The Weblocator helps to update the Window title evenly as navigation occurs...
 */

const RouteTitleLayouts = {

    "Home-view" : {
        title : "Ndejje Senior Secondary School | Home"
    },
    "About-view" : {
        title : "Ndejje Senior Secondary School | About us",
    },
    "blog-view" : {
        title : "Ndejje Senior Secondary School | Blog",
    },
    "Academics-view" : {
        title : "Ndejje Senior Secondary School | Academics",
    }
};

export class WebLocator {
    private __DOM__:Document = document;
    constructor() { 
        this._init()
    };
    private _init(){
        this._listenForLocationChanges()
    }


    private _listenForLocationChanges(){
        WebMainInstance.FrameRouter.didNavigateToRouteEventManager.subscribe(this._listenerForRoutes.bind(this))
    }
    private _listenerForRoutes(route:MainRoutes){
        switch (route) {
            case "about":
                this.__DOM__.title = RouteTitleLayouts["About-view"].title          
            break;

            case "home":
                this.__DOM__.title = RouteTitleLayouts["Home-view"].title          
                
            break;

            case "academics":
                this.__DOM__.title = RouteTitleLayouts["Academics-view"].title          
                
            break;

            case "blog":
                this.__DOM__.title = RouteTitleLayouts["blog-view"].title          
                
            break;
        }
    }
}


createInstance<any>(WebLocator);