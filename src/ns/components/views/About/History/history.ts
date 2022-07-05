import { IWebComponents } from "ns/typings/schw";
import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";

export class HistorySectionComponent extends HTMLElement implements IWebComponents {

    private _historySection: HTMLDivElement | null;
    private _sec1:HTMLDivElement|null  = null;
    private _sec2:HTMLDivElement|null  = null;

    constructor() {
        super();
        this._historySection = null;
        this.innerHTML = `
        <div class="historyComponent">
        <div class="main-historysection-container">
            <div class="split-layout-divider">
                <div class="section-content-1">
                    <h2>...Years Back...</h2>
                    <div class="container-data-elements">
                        We are makers of history, We are made by history
                    </div>
                </div>
                <div class="section-content-2">
                    <div class="content-container left">
                        <div class="content">
                            <h2>1963</h2>
                            <p>Tito Ssesanga Walusimbi, the headteacher of Ndejje JUnior school  started a fundraising to build
                                a secondary school on the vast land on which the Junior school sat.
                            </p>
                        </div>
                    </div>
                    <div class="content-container right">
                        <div class="content">
                            <h2>1963</h2>
                            <p>
                                Ndejje SS was born as a mixed O-level secondary school with Walusimbi as its first headteacher
                            </p>
                        </div>
                    </div>
                    <div class="content-container left">
                        <div class="content">
                            <h2>1986</h2>
                            <p>Ndejje SS was the first school to experience free education currently enjoyed by Universal Secondary Schools in the country. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="xr-button">Read More</div>
        </div>
        </div>
    
    `
    };
    connectedCallback() {
        this.initializeComponent()
    };

    initializeComponent(){
        this.createComponentAttachment();
        this.__createAnimationFacilityFunction()
    };
    createComponentAttachment(){
        this._historySection = this.querySelector(".historyComponent")
        this._sec1 = this.querySelector(".historyComponent .section-content-1");
        this._sec2 = this.querySelector(".historyComponent .section-content-2");
    }
    __viewLinkAnimationInset() {
        if (this._sec1 && this._sec2) {
          this._sec1.style.animation ="welcomeNoteAnimation_1 1.5s forwards";
          this._sec2.style.animation ="welcomeNoteAnimation_1 1.5s forwards";
        }
    }
    __createAnimationFacilityFunction(){
        createViewLinkerManger({
            element :this._historySection!,
            linkPosition : 150,
            LinkerCallbacks : {
                inset : ()=>{
                    this.__viewLinkAnimationInset()
                },
                outset : ()=>{

                }
            }
        })
    }

    
}

customElements.define("ns-x-history", HistorySectionComponent);