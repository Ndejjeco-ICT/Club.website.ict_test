import { IWebComponents } from "ns/typings/schw";
import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";
import {addDisposableEventListener } from "ns/common/domListener"

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="ponaco-splitview-5">
    <div class="wx-insights-component">
        <div class="main-wrapper">
            <div class="content-title">
                <div class="content-title-wrapper">
                    Uniqueness of Ndejje  S.S.S
                </div>
            </div>
            <div class="cards-container">
                <div class="card-wrapper-1">
                    <div class="card-wrapper-2">
                        <div class="card-x-component">
                            <div class="card-content">
                                <div class="card-content-wrapper">
                                    <div class="card-content-image cg-1"></div>
                                    <div class="card-content-info">
                                        <div class="x-title-1 ctrinfo">Relating And Knowing Other Students</div>
                                        <div class="x-title-2 ctrinfo">Many Students have suffered a social boundary
                                            because of the
                                            great wall of school which destroys there social life.</div>
                                        <div class="x-title-btn">
                                            <div class="x-btn-wrapper ctrinfo">
                                                <div class="sl-button">&RightArrow;</div>
                                                <div class="sl-text">Read More From Interact Club.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-x-component">
                            <div class="card-content">
                                <div class="card-content-wrapper">
                                    <div class="card-content-image cg-2"></div>
                                    <div class="card-content-info">
                                        <div class="x-title-1 ctrinfo">Relating And Knowing Other Students</div>
                                        <div class="x-title-2 ctrinfo">Many Students have suffered a social boundary
                                            because of the
                                            great wall of school which destroys there social life.</div>
                                        <div class="x-title-btn">
                                            <div class="x-btn-wrapper ctrinfo">
                                                <div class="sl-button">&RightArrow;</div>
                                                <div class="sl-text">Read More From Interact Club.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-x-component">
                            <div class="card-content">
                                <div class="card-content-wrapper">
                                    <div class="card-content-image cg-3"></div>
                                    <div class="card-content-info">
                                        <div class="x-title-1 ctrinfo">Relating And Knowing Other Students</div>
                                        <div class="x-title-2 ctrinfo">Many Students have suffered a social boundary
                                            because of the
                                            great wall of school which destroys there social life.</div>
                                        <div class="x-title-btn">
                                            <div class="x-btn-wrapper ctrinfo">
                                                <div class="sl-button">&RightArrow;</div>
                                                <div class="sl-text">Read More From Interact Club.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-x-component">
                            <div class="card-content">
                                <div class="card-content-wrapper">
                                    <div class="card-content-image cg-4"></div>
                                    <div class="card-content-info">
                                        <div class="x-title-1 ctrinfo">Relating And Knowing Other Students</div>
                                        <div class="x-title-2 ctrinfo">Many Students have suffered a social boundary
                                            because of the
                                            great wall of school which destroys there social life.</div>
                                        <div class="x-title-btn">
                                            <div class="x-btn-wrapper ctrinfo">
                                                <div class="sl-button">&RightArrow;</div>
                                                <div class="sl-text">Read More From Interact Club.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-x-component">
                        <div class="card-content">
                            <div class="card-content-wrapper">
                                <div class="card-content-image cg-5"></div>
                                <div class="card-content-info">
                                    <div class="x-title-1 ctrinfo">Relating And Knowing Other Students</div>
                                    <div class="x-title-2 ctrinfo">Many Students have suffered a social boundary
                                        because of the
                                        great wall of school which destroys there social life.</div>
                                    <div class="x-title-btn">
                                        <div class="x-btn-wrapper ctrinfo">
                                            <div class="sl-button">&RightArrow;</div>
                                            <div class="sl-text">Read More From Interact Club.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-x-component">
                    <div class="card-content">
                        <div class="card-content-wrapper">
                            <div class="card-content-image cg-6"></div>
                            <div class="card-content-info">
                                <div class="x-title-1 ctrinfo">Relating And Knowing Other Students</div>
                                <div class="x-title-2 ctrinfo">Many Students have suffered a social boundary
                                    because of the
                                    great wall of school which destroys there social life.</div>
                                <div class="x-title-btn">
                                    <div class="x-btn-wrapper ctrinfo">
                                        <div class="sl-button">&RightArrow;</div>
                                        <div class="sl-text">Read More From Interact Club.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`

export class InsightsComponent extends HTMLElement implements IWebComponents {

    private _cardElementHandlers:NodeListOf<HTMLDivElement>|null;
    private _cardDataMinorHandlers:NodeListOf<HTMLDivElement>|null;

    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
        this._cardElementHandlers = null;
        this._cardDataMinorHandlers = null;
    }
    connectedCallback(){
        this.initializeComponent()
    }

    initializeComponent(){
        this._createComponentAttachments();
        this._createAnimationFacilityFunction()
        this._assignCommonDataHoverActions()
    }
    _createComponentAttachments() {
        this._cardElementHandlers = this.querySelectorAll<HTMLDivElement>(".card-x-component");
        this._cardDataMinorHandlers = this.querySelectorAll<HTMLDivElement>(".card-x-component .x-title-2")
    };


    _assignCommonDataHoverActions(){
        if(this._cardDataMinorHandlers){
            this._cardDataMinorHandlers.forEach((e)=>{
                
                e.addEventListener("mouseleave",function(e){
                    this.style.display = "none"
                })
                e.addEventListener("mouseover",function(e){
                    this.style.display = "block";
                })
            });

        }


    }

    _createAnimationFacilityFunction() {
        if(this._cardElementHandlers){
            this._cardElementHandlers.forEach((_cardElement)=>{

                createViewLinkerManger({
                    element : _cardElement,
                    linkPosition : 250,
                    LinkerCallbacks : {
                        inset: () =>{
                            _cardElement.style.animation = "__uniqueCardAnimation__ 1s forwards"
                        },
                        outset : ()=>{
                            // _cardElement.style.opacity = "0";
                            // _cardElement.style.transform = "translateY(-50px)"
                            // _cardElement.style.animation = ""
                        }
                    }
                })



            });
        }
    }


}


customElements.define("ns-x-insights", InsightsComponent);