import { IWebComponents } from "ns/typings/schw";
import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";


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
                            <div class="cr-xmore" title="Read More about the interesting facts about Ndejje">Read More</div>
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

    private _contentDataElementHandle: HTMLDivElement | null;

    constructor() {
        super();
        this._contentDataElementHandle = null;
        this.appendChild(Template_.content.cloneNode(true))
    };
    connectedCallback() {
        this.initializeComponent()
    };
    initializeComponent() {
        this._createElementHandles()
        this.__createAnimationFacilityFunction();
    }

    _createElementHandles() {
        this._contentDataElementHandle = this.querySelector(".conic-section-2 .wrapper")
    }

        /**
     * Animations inset and outsets
     */

    __viewLinkAnimationInset() {
        if (this._contentDataElementHandle) {
            this._contentDataElementHandle.style.animation = "__GoalsAnimation__  .5s forwards"
        }
    }
    __viewLinkAnimationOutset() {
        if (this._contentDataElementHandle) {
            this._contentDataElementHandle.style.opacity = "0";
            this._contentDataElementHandle.style.transform = "translateX(-50px)";
        }
    }

    __createAnimationFacilityFunction() {
        if (this._contentDataElementHandle) {
            createViewLinkerManger({
                element : this._contentDataElementHandle,
                linkPosition : 78,
                LinkerCallbacks : {
                    inset  : ()=>{
                        this.__viewLinkAnimationInset()
                    },
                    outset : () =>{
                        // this.__viewLinkAnimationOutset()
                    }
                }
            })
        }
    }






};

customElements.define("ns-x-benefits", GoalsBenefitsComponent)
