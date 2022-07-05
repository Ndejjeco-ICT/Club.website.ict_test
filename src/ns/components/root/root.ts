/**
 *  
 * ----- THIS IS THE ROOT MAIN FILE AND ROOT ::MAIN-FRAME:: THIS INITIALIZES
 * EVRYTHING THE WHOLE WEBSITE HOLDS---;
 */



import { IWebComponents } from "ns/typings/schw";
import { LifeCycleEvents, Lifecycle } from "ns/common/lifecycle";
import { WebMain } from "ns/base/Web/web.main";
import { dialogHost, IIDialogHost } from "ns/dom/dialogHost/dialogHost";



const Template_ = document.createElement("template");
Template_.innerHTML = `
<div id="main-content">
    <ns-header></ns-header>
        <div id="basic-page">
            <div class="home-view page-view" ns-route="inactive" ns-view="home-view">
                <ns-home-view></ns-home-view>
            </div>
            <div class="about-view page-view" ns-route="inactive" ns-view="about-view">
                <ns-about-view></ns-about-view>
            </div>
            <div class="blog-view page-view" ns-route="inactive" ns-view="blog-view">
                <ns-blog-view></ns-blog-view>
            </div>
            <div class="academics-view page-view" ns-route="inactive" ns-view="academics-view">
                <ns-academics-view></ns-academics-view>
            </div>
            <div class="insights-view page-view" ns-route="inactive" ns-view="insights-view">
                <ns-insights-view></ns-insights-view>
            </div>
        </div>
    <ns-footer></ns-footer>
    <div class="ns-sub-components">
        <div class="dialog-host">
            <div class="staff-dialog-wrapper">
                <ns-d-staffdialog></ns-d-staffdialog>
            </div>
        </div>
    </div>
</div>
`


/**
 * 
 * AT THIS POINT WE CREATE A CONSTANT WEBMAININSTANCE TO ENABLE IT LAST FOR 
 * A LONG TIME AND PREVENT IT FOR EXPERIENCING GARBAGE COLLECTION.
 */


export const WebMainInstance = new WebMain();




/**
 * THE ROOT WEB-FRAME AND MAIN ROOT COMPONENT THAT CREATES AND INTIALIZES THE FRAME
 */
export class UIRoot extends HTMLElement implements IWebComponents {
    private _dialogHost: IIDialogHost | null;
    private _staffdialogwrapper: HTMLDivElement | null = null;

    constructor() {
        super();
        /**
         * Register for listener to ensured the main-frame has been connected and then load other independent
         * componenets
         */
        this.registerForLifecycleEventListener()
        this.appendChild(Template_.content.cloneNode(true))
        this._dialogHost = null;
    }
    connectedCallback() {
        /**
         * Announce that the root component has been connected 
         */
        LifeCycleEvents.phase = Lifecycle.Started;

    };
    registerForLifecycleEventListener() {
        LifeCycleEvents.onPhaseDidChange.subscribe(this.listenerForEventListenerActions.bind(this))
    }
    listenerForEventListenerActions(phase: Lifecycle) {
        if (phase == Lifecycle.Started) {
            this.initializeWebMainResources()
        }

        //Unsubscribe from the lifecycle events
        LifeCycleEvents.onPhaseDidChange.unsubscribe(this.listenerForEventListenerActions.bind(this))
    }
    initializeWebMainResources() {
        WebMainInstance.initResources();
        this.connectectDialogSubscribers()
    }
   connectectDialogSubscribers() {
        this._staffdialogwrapper = this.querySelector(".staff-dialog-wrapper");
        this._dialogHost = new dialogHost({subscribers: [{element: this._staffdialogwrapper!,key: "staff-view"}]});
        this._dialogHost!.initializeDialogHost()
    }

}
customElements.define("ns-root", UIRoot);
