import { WebMainInstance} from "ns/components/root/root";
import { createInstance } from "ns/base/instanceCreators/instanceCreators";
import { globalEventEmitter,IGlobalEventEmitter} from "ns/common/events"


export interface NavigationHookData {
    data : any;
}

export interface INavigationHook {

    didLocateToHomeRoute :IGlobalEventEmitter<NavigationHookData>;
    didLocateToBlogRoute : IGlobalEventEmitter<NavigationHookData>;
    didLocateToAcademicsRoute:IGlobalEventEmitter<NavigationHookData>;
    didLocateToAboutRoute:IGlobalEventEmitter<NavigationHookData>;


}


export class NavigationHooksManager implements INavigationHook {
    didLocateToHomeRoute: IGlobalEventEmitter<NavigationHookData>;
    didLocateToBlogRoute: IGlobalEventEmitter<NavigationHookData>;
    didLocateToAcademicsRoute: IGlobalEventEmitter<NavigationHookData>;
    didLocateToAboutRoute: IGlobalEventEmitter<NavigationHookData>;

    constructor () {

        this.didLocateToHomeRoute= new globalEventEmitter();
        this.didLocateToBlogRoute= new globalEventEmitter();
        this.didLocateToAcademicsRoute= new globalEventEmitter();
        this.didLocateToAboutRoute= new globalEventEmitter();
        this.registerCommonListeners();

    }

    private registerCommonListeners() {

        WebMainInstance.FrameRouter.RouterNavigationHook("home",(args)=>{
            this.didLocateToHomeRoute.raiseEvent({data : args.data})
        })
        WebMainInstance.FrameRouter.RouterNavigationHook("about",(args)=>{
            this.didLocateToAboutRoute.raiseEvent({data : args.data})
        })
        WebMainInstance.FrameRouter.RouterNavigationHook("academics",(args)=>{
            this.didLocateToAcademicsRoute.raiseEvent({data : args.data})
        })
        WebMainInstance.FrameRouter.RouterNavigationHook("blog",(args)=>{
            this.didLocateToBlogRoute.raiseEvent({data : args.data})
        })



    }

}


export const NavigationHooksManagerControl = createInstance<INavigationHook>(NavigationHooksManager)