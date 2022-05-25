import { addDisposableEventListener } from "ns/common/domListener";
import { IWebComponents } from "ns/typings/schw";


const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="ponaco-splitview-3">
    <div class="wx-component-3">
        <div class="split-view">
            <div class="ctr-component-container">
                <div class="ctr-component-wrapper rx-component">
                    <div class="conic-section-1">
                        <div class="ctx-pictures-wrapper">
                            <div class="ctx-pic-1 cn-pic-box">
                                <div class="cn-picture-container cn-1"></div>
                                <div class="cn-info-container">
                                    <div class="cn-info-wrapper">
                                        <div class="cn-short-title">Practice</div>
                                        <div class="cn-short-title-2">Technology</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ctx-additive-pics">
                                <div class="ctx-pic-2 cn-pic-box">
                                    <div class="cn-picture-container cn-2"></div>
                                    <div class="cn-info-container">
                                        <div class="cn-info-wrapper">
                                            <div class="cn-short-title">Practice</div>
                                            <div class="cn-short-title-2">Technology</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ctx-pic-3 cn-pic-box">
                                    <div class="cn-picture-container cn-3"></div>
                                    <div class="cn-info-container">
                                        <div class="cn-info-wrapper">
                                            <div class="cn-short-title">Practice</div>
                                            <div class="cn-short-title-2">Technology</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="conic-section-2">
                        <div class="wrapper">
                        <div class="content-wrapper benefits-content-holder">
                            <div class="cr-title">Building Effective Students</div>
                            <div class="cr-description">

                            Our faculty lead students to reach further, to achieve their goals and to effect change in the professions and passions they pursue.

                            </div>
                            <div class="cr-xmore">Read More</div>
                        </div>
                        </div>
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
