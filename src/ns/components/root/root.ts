import { IWebComponents } from "ns/typings/schw";
import { LifeCycleEvents,Lifecycle} from "ns/common/lifecycle";
import { WebMain} from "ns/base/Web/web.main";
import { dialogHost ,IIDialogHost} from "ns/dom/dialogHost/dialogHost";

/**
 * The root main file and startup web componenent of the whole HTML
 */


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
 * Startup of the web main instance that connects all instances
 */
export const WebMainInstance = new WebMain();
export class UIRoot extends HTMLElement implements IWebComponents {
    private _dialogHost:IIDialogHost|null;
    private _staffdialogwrapper:HTMLDivElement|null = null;

    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
        this._dialogHost = null;
    }
    connectedCallback() {
        LifeCycleEvents.phase = Lifecycle.Started;
        /**
         * We Can Connect WebMain
         */
        //Create Instance To Have It stay for a longtime;
        WebMainInstance.initResources();   
        this.____connectectDialogSubscribers__()

    };
    ____connectectDialogSubscribers__(){
        this._staffdialogwrapper = this.querySelector(".staff-dialog-wrapper");
        this._dialogHost = new dialogHost({
            subscribers : [
                {
                    element : this._staffdialogwrapper!,
                    key : "staff-view"
                }
            ]
        });
        this._dialogHost!.initializeDialogHost()
    }

}
customElements.define("ns-root", UIRoot);
