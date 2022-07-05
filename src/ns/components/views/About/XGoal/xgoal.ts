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
                   ...Our Vision...
                </div>
            </div>
            <div class="xtr-content-mgr">
                <div class="wrapper">
                    <span class="cl1">A</span> Christ – centered school nurturing holistically <span>component</span> citizens for <span>development</span> and prosperity.
                </div>
            </div>
        </div>
    </div>
</div>

`;

class OurGoal extends HTMLElement implements IWebComponents {
    private _visionComponent:HTMLDivElement |null = null;

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
        this._visionComponent = this.querySelector(".xtr-content-mgr");
    };

    __viewLinkAnimationInset(){
        if(this._visionComponent){
            this._visionComponent.style.animation = " __ReviewsAnimation__ 1s forwards"
        }
    }
    __createAnimationFacilityFunction() {
        if (this._visionComponent) {
            createViewLinkerManger({
                element : this._visionComponent,
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

customElements.define("ns-x-xgoal",OurGoal)