import { IWebComponents } from "ns/typings/schw";

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
                                    <div class="card-content-image"></div>
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
                                    <div class="card-content-image"></div>
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
                                    <div class="card-content-image"></div>
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
                                    <div class="card-content-image"></div>
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


    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }
    _createHoverOperation(){
        const _allXtitles = this.querySelectorAll(".x-title-1");
        _allXtitles.forEach((_elements)=>{
            
        })
    }
    connectedCallback(){



    }


}


customElements.define("ns-x-insights", InsightsComponent);