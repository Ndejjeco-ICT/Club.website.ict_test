import { IWebComponents } from "ns/typings/schw";
import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";
import { _navigateToAcademicsPage } from "ns/components/common/Header/header";
import { GlBLoader } from "./goalsBLoader";


const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="ponaco-splitview-3">
    <div class="wx-component-3">
        <div class="split-view">
            <div class="ctr-component-container">
                <div class="ctr-component-wrapper rx-component">
                    <div class="conic-section-1">
                        <div class="ctx-pictures-wrapper">

                            <div class="ctx-additive-pics">
                            </div>
                        </div>
                    </div>

                    <div class="conic-section-2">
                        <div class="wrapper">
                            <div class="content-wrapper benefits-content-holder">
                                <div class="cr-title">Building Effective Students</div>
                                <div class="cr-description">

                                    Our faculty lead students to reach further, to achieve their goals and to effect
                                    change in the professions and passions they pursue.

                                </div>
                                <div class="cr-xmore" title="Read More about the interesting facts about Ndejje">Read
                                    More</div>
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
    private _controlButton:HTMLDivElement|null = null;

    private _gl1Container:HTMLDivElement|null = null;
    private _gl2Container:HTMLDivElement|null = null;


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
        this._preloadGoalCards()
        this._createEventListenerForControlButton()
    }
    _preloadGoalCards(){
        if(this._gl1Container && this._gl2Container){
            new GlBLoader(this._gl1Container,this._gl2Container);
        }
    }

    _createElementHandles() {
        this._gl1Container = this.querySelector(".ctx-pictures-wrapper");
        this._gl2Container = this.querySelector(".ctx-additive-pics");
        this._contentDataElementHandle = this.querySelector(".conic-section-2 .wrapper")
        this._controlButton = this.querySelector(".conic-section-2 .wrapper .cr-xmore")
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

    _createEventListenerForControlButton(){
        if(this._controlButton){
            this._controlButton.addEventListener("click",()=>{
                _navigateToAcademicsPage()
            })
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
                        this.__viewLinkAnimationOutset()
                    }
                }
            })
        }
    }






};

customElements.define("ns-x-benefits", GoalsBenefitsComponent)
