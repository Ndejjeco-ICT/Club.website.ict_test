import { dialogHostEventManager } from "ns/dom/dialogHost/dialogHost";
import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";
import { IWebComponents } from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-staffview">
    <div class="xb-wrapper">
        <div class="tr-title-area-wrapper">
            <div class="tr-title-container">Meet Our Staff Members</div>
        </div>
        <div class="tr-container-elements">
            <div class="tr-container-wrapper">
                <div class="tr-view-1">
                    <div class="tr-view-1-wrapper">
                        <div class="cl-view-1">
                            <div class="cl-picture-container">_image_</div>
                        </div>
                        <div class="cl-view-2">
                            <div class="cl-content-text-holder">
                                <div class="ty-1">The HeadTeacher</div>
                                <div class="ty-2">On behalf of the School Administration, I welcome you all to this platform in the name of our Lord Jesus Christ and Saviour. Ndejje Senior Secondary School is one of the top Church of Uganda schools whose success is a result of the visionary leadership it has had for the last thirty years.</div>
                                <div class="ty-3">Ndejje has distinguished itself in providing holistic Education that brings up a balanced person empowered with relevant knowledge, skills and values to be a successful National and Global citizen.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tr-view-2">
                    <div class="tr-view-2-wrapper">
                        <div class="tr-content">
                            <div class="tr-content-wrapper">
                                <div class="tr-members-wrapper">
                                    <ns-x-member></ns-x-member>
                                    <ns-x-member></ns-x-member>
                                    <ns-x-member></ns-x-member>
                                    <ns-x-member></ns-x-member>
                                    <ns-x-member></ns-x-member>
                                    <ns-x-member></ns-x-member>
                                    <ns-x-member></ns-x-member>
                                    <ns-x-member></ns-x-member>
                                </div>
                            </div>
                        </div>
                        <div class="tr-content-2">
                            <div class="selective-btn">View More</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

class StaffView extends HTMLElement implements IWebComponents {

    private _xrt1:HTMLDivElement|null = null;
    private _xrt2Main:HTMLDivElement|null = null;
    private _xrt2:NodeListOf<HTMLDivElement>|null = null;
    private _xrtControlBtn:HTMLDivElement|null = null;
    constructor(){
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }
    connectedCallback(){
        this._initializeComponent();
   
    }
    private _initializeComponent(){
        this._createComponentAttachment();
        this._createAnimationFacility1()
        this._applyGeneralEventListeners()
    }
    private _createComponentAttachment(){
        this._xrt1 = this.querySelector(".xb-staffview .xb-wrapper .tr-container-elements .tr-view-1");
        this._xrt2Main = this.querySelector(".xb-staffview .xb-wrapper .tr-container-elements .tr-view-2")
        this._xrt2 = this.querySelectorAll(".xb-staffview .xb-wrapper .tr-container-elements .tr-view-2 .tr-view-2-wrapper .tr-content .tr-members-wrapper ns-x-member");
        this._xrtControlBtn = this.querySelector(".xb-staffview .xb-wrapper .tr-container-elements .tr-view-2 .tr-view-2-wrapper .tr-content-2  .selective-btn")
    };

    private _applyGeneralEventListeners(){
        if(this._xrtControlBtn){
            this._xrtControlBtn.addEventListener("click",()=>{
                dialogHostEventManager.emit("invoke-dialog","staff-view")
            })
        }
    }

    private __viewAnimationInset1(){
        if(this._xrt1){
            this._xrt1.style.animation = "__uniqueCardAnimation__ 1.5s forwards"
        }
    }
    private _createAnimationFacility1(){
        if(this._xrt1){
            createViewLinkerManger({
                element : this._xrt1,
                linkPosition : 150,
                LinkerCallbacks : {
                    inset : ()=>{
                        this.__viewAnimationInset1();
                    },
                    outset : ()=>{

                    }
                }
            })
        }
        if(this._xrt2){
            this._xrt2.forEach((e)=>{
                createViewLinkerManger({
                    element : e,
                    linkPosition : 150,
                    LinkerCallbacks : {
                        inset : ()=>{
                            e.style.animation = "__uniqueCardAnimation__ 1s forwards"
                        },
                        outset : ()=>{

                        }
                    }
                })
            })
        }
    }
}

customElements.define("ns-x-staffview",StaffView)