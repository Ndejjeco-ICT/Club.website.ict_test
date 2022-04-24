import { addDisposableEventListener } from "ns/common/domListener";
import { IWebComponents } from "ns/typings/schw";
import { InsightsStrings, IInsightsString } from "ns/components/views/Home/Insights/Insights.strings"

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="ponaco-splitview-5">
<div class="vw-1">
    <div class="vw-1-wrapper">
        <div class="sec-1">
            <h1>Insights</h1>
        </div>
        <div class="vw-content">
            <div class="vw-content-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit.</p>
            </div>
            <div class="content-view-redirect">View More</div>
        </div>
    </div>  
   

    <!--the grid cards-->
    <div class="vw-content-2-cards">
        <div class="vw-content-cards-wrapper">
            <div class="wrapper-2">
                <div class="vw-card">
                    <div class="content-wrapper">
                        <div class="v-picture-container"></div>
                        <div class="v-label-container">The Glamour</div>
                        <div class="v-description-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit</div>
                        <div class="v-insight-like">
                            <div class="wrapper">
                                <div class="icon-container">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <div class="like-rank">16</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="vw-card">
                <div class="content-wrapper">
                    <div class="v-picture-container"></div>
                    <div class="v-label-container">ICT Club</div>
                    <div class="v-description-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit</div>
                    <div class="v-insight-like">
                        <div class="wrapper">
                            <div class="icon-container">
                                <i class="fa-regular fa-circle-heart"></i>
                            </div>
                            <div class="like-rank"> 16</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="vw-card">
            <div class="content-wrapper">
                <div class="v-picture-container"></div>
                <div class="v-label-container">Bussiness Club</div>
                <div class="v-description-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit</div>
                <div class="v-insight-like">
                    <div class="wrapper">
                        <div class="icon-container">
                            <i class="fa-regular fa-circle-heart"></i>
                        </div>
                        <div class="like-rank"> 16</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="vw-card">
        <div class="content-wrapper">
            <div class="v-picture-container"></div>
            <div class="v-label-container">Wildlife club</div>
            <div class="v-description-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit</div>
            <div class="v-insight-like">
                <div class="wrapper">
                    <div class="icon-container">
                        <i class="fa-regular fa-circle-heart"></i>
                    </div>
                    <div class="like-rank"> 16</div>
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
    private _contentRedirect: HTMLDivElement | null = null;
    private _cardComponents: Node[] = [];
    private _cardsMainWrapper: HTMLDivElement | null = null;
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true));
        this._contentRedirect = null;
        this.nsConnected()
    }

    nsConnected() {
        // this._readSourceStringCards()
    }

    attachStoredCards() {
        if (this._cardsMainWrapper) {
            this._cardsMainWrapper.append(...this._cardComponents)
        }

    }
    _readSourceStringCards() {
        for (let i = 0; i < InsightsStrings.length; i++) {
            this._createCardComponentAndStoreIt(InsightsStrings[i], i);
        }
    };
    _createCardComponentAndStoreIt(sourceData: IInsightsString, sourceNumber: Number) {
        let _cardWrapper = document.createElement("div");
        let _cardSourcePicture = document.createElement("div");
        let _cardTitle = document.createElement("div");
        let _cardDescription = document.createElement("div");
        let _cardinker = document.createElement("div");
        _cardWrapper.className += `vw-card card-${sourceNumber}`;
        _cardSourcePicture.style.backgroundImage = sourceData.componentPictureSrc;
        _cardSourcePicture.className += "card-component-picture";
        _cardTitle.innerHTML = sourceData.title;
        _cardTitle.className += "card-component-title";
        _cardDescription.className += "card-componentn-short-descrpt";
        _cardDescription.innerHTML = sourceData.shortDescription
        _cardinker.className += "check-out-comp";
        _cardinker.innerHTML = "Check it Out!"
        _cardWrapper.append(_cardinker);
        _cardWrapper.appendChild(_cardSourcePicture);
        _cardWrapper.appendChild(_cardTitle)
        _cardWrapper.appendChild(_cardDescription);
        addDisposableEventListener(_cardinker, "click", sourceData.onClickCallback)
        this._cardComponents.push(_cardWrapper);
    }

    connectedCallback() {
        this._init()
    };

    private _init() {
        this.registerElementHandle();
        this.registerEventListener();
        this.attachStoredCards();
    }

    registerElementHandle() {
        this._cardsMainWrapper = this.querySelector(".wrapper-2")
        this._contentRedirect = this.querySelector(".content-view-redirect")
    };
    registerEventListener() {
        if (this._contentRedirect) {
            addDisposableEventListener(this._contentRedirect, "click", this._redirectContent.bind(this))
        }
    }
    _redirectContent() {

    }
}
customElements.define("ns-x-insights", InsightsComponent);