import { IWebComponents } from "ns/typings/schw";
import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";

const Template_ = document.createElement("template");
Template_.innerHTML = `

<div class="xtr-component">
    <div class="subo">
        <div class="tl1"></div>
        <div class="tl2"></div>
    </div>
    <div class="xtr-wrapper">
        <div class="ctr-content">
            <div class="xtr-title-provider">
                <div class="wrapper">
                   ...Our Mission...
                </div>
            </div>
            <div class="xtr-content-mgr">
                <div class="wrapper">
                <span class="cl1">T</span>o nurture highly knowledgeable and productive <span>citizens</span> through holistic education based on <span>Christ</span>ian values for socio-economic transformation.
                </div>
            </div>
        </div>
    </div>
</div>
 `


export class MissionComponent extends HTMLElement implements IWebComponents {

    private _missionComponent:HTMLDivElement |null = null;

    constructor(){
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }
    connectedCallback(){
        this.initializeComponent()

    };
    initializeComponent(){
        this.__createComponentAttachment();
        this.__createAnimationFacilityFunction()
    }

    __createComponentAttachment(){
        this._missionComponent = this.querySelector(".xtr-content-mgr");
    };

    __viewLinkAnimationInset(){
        if(this._missionComponent){
            this._missionComponent.style.animation = " __ReviewsAnimation__ 1s forwards"
        }
    }
    __createAnimationFacilityFunction() {
        if (this._missionComponent) {
            createViewLinkerManger({
                element : this._missionComponent,
                linkPosition : 150,
                LinkerCallbacks : {
                    inset  : ()=>{
                        this.__viewLinkAnimationInset()
                    },
                    outset : () =>{
                         ///
                    }
                }
            })
        }
    }




}

customElements.define("ns-x-mission",MissionComponent)