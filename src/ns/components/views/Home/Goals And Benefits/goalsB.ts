import { addDisposableEventListener } from "ns/common/domListener";
import { IWebComponents } from "ns/typings/schw";


const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="ponaco-splitview-3">
<div class="wx-component-3">
    <div class="splitview">
            <div class="splitview1">
                <div class="split-view-contents">
                    <div class="content-section-title">Our Goals And Benefits</div>
                    <div class="content-section-area">Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vel debitis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
                        optio iure natus non ducimus minus laudantium tenetur et eos quidem! Officiis
                        voluptate illo nulla harum laudantium ipsam, aliquam officia ex.</div>
                </div>
            </div>
            <div class="splitview2">
                <div class="split-view-contents">
                    <div class="major-content">
                        <div class="note-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                            ratione corporis totam minima iusto velit laudantium neque quaerat ex natus
                            itaque alias vero facere vitae animi repellat tempore, expedita dignissimos.
                        </div>
                        <div class="note-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                            eum ea sint error maxime eos, quis nihil laudantium atque illo veniam delectus
                            sunt ut maiores perspiciatis saepe obcaecati laboriosam voluptate.</div>
                        <div class="content-redirect">Read More</div>
                    </div>
                </div>
            </div>
    </div>
</div>
</div>

`

export class GoalsBenefitsComponent extends HTMLElement implements IWebComponents {

    private _contentRedirect: HTMLDivElement | null;

    constructor() {
        super();
        this._contentRedirect = null;
        this.appendChild(Template_.content.cloneNode(true))
    };
    connectedCallback() {
        this.init()
     };

    init() {
        this.createElementHandles();
        this.registerEventListener()
    }
    createElementHandles() {
        this._contentRedirect = this.querySelector(".content-redirect");
    };
    registerEventListener() {
        if (this._contentRedirect) {
            addDisposableEventListener(this._contentRedirect, "click", this._redirectContent.bind(this));
        }
    };
    _redirectContent() {
        
    }

};

customElements.define("ns-x-benefits",GoalsBenefitsComponent)
