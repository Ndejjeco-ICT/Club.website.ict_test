import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";
import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-awards-component">
    <div class="xb-title-area-component">
        <div class="xb-title-container">Awards</div>
    </div>
    <div class="xb-wrapper">
        <div class="xb-main-container">
            <ns-x-awarditem></ns-x-awarditem>
            <ns-x-awarditem></ns-x-awarditem>
            <ns-x-awarditem></ns-x-awarditem>
            <ns-x-awarditem></ns-x-awarditem>
            <ns-x-awarditem></ns-x-awarditem>
            <ns-x-awarditem></ns-x-awarditem>
            <ns-x-awarditem></ns-x-awarditem>
            <ns-x-awarditem></ns-x-awarditem>
        </div>
    </div>
</div>
`;


export class Awards extends HTMLElement implements IWebComponents {
    private _itm1:NodeListOf<HTMLDivElement>|null = null;

    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true));
    }


    connectedCallback() {
        this._initializeComponent();
    }

    private _initializeComponent() {
        this._createComponentAttachment();
    }

    private _createComponentAttachment() {
        this._itm1 = this.querySelectorAll(".xb-awards-component .xb-wrapper .xb-main-container ns-x-awarditem");

    }

    _viewLinkerAnimationInset(e:HTMLDivElement) {
        if(this._itm1) {
           e.style.animation = "welcomeNoteAnimation_1 2s forwards"
        }
    }

    __viewLinkerAnimationOutset() {
        if (this._itm1) {
        //   this._itm1.style.opacity ="0";
        //   this._itm1.style.transform ="translateX(-100px)";
        //   this._itm1.style.animation ="";
        }
    }

    _createAnimationHolder() {
        if(this._itm1) {
            this._itm1.forEach((e)=> {
                createViewLinkerManger({
                    element: e,
                    linkPosition: 150,
                    LinkerCallbacks: {
                        inset: () => {
                            this._viewLinkerAnimationInset(e);
                        },
                        outset: () => {
                            // this.__viewLinkerAnimationOutset();
                        }
                    }
                });
            })
        }
    }

};


customElements.define("ns-x-awards",Awards)