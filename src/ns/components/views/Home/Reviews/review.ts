import { IWebComponents } from "ns/typings/schw";
import { addDisposableEventListener } from "ns/common/domListener"
import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";
import { ReviewsData } from "./reviews.data";

export class ReviewSection extends HTMLElement implements IWebComponents {

    private  _studentReviewsQuotecc:HTMLDivElement|null = null;
    private _studentReviewsQuote: HTMLParagraphElement | null = null;
    private _carosoellNavigationComponents: NodeListOf<HTMLDivElement> | null = null;
    private _studentReviewsImageManager:HTMLDivElement|null = null;

    constructor() {
        super();
        this.innerHTML = `   
        <div class="review-main-component">
        <div class="main-review-container">
            <div class="split-layout-containers">
             
                <div class="split-container-2">
                    <div class="split-wrapper">
                        <h2>Student's Thoughts?.</h2>
    
                        <div class="student-quote">
                            <p>
                            Silence and Smile are two powerfull tools. Simile is the best wat to solve many probles and Silence is the best way to Avoid many problems".
                            </p>
                        </div>
    
                        <div class="carosell-navigation">
                            <div class="carosell-1 cr-active" carosell-x="0"></div>
                            <div class="carosell-1 cr-off" carosell-x="1"></div>
                            <div class="carosell-1 cr-off" carosell-x="2"></div>
                        </div>
                    </div>
                </div>
                <div class="split-container-1">
                    <div class="split-image-container"></div>
                </div>
            </div>
        </div>
    </div>
    `
    };
    connectedCallback() {
        this.initializeComponent();
      
    };

    initializeComponent() {
        this.__createComponentAttachments()
        this.__createAnimationFacilityFunction()
        this._createEventListenersForCarousellNavigation()
    }

    __createComponentAttachments() {
        this._studentReviewsQuote = this.querySelector(".split-container-2 .student-quote p");
        this._studentReviewsQuotecc = this.querySelector(".split-container-2 .student-quote");
        this._carosoellNavigationComponents = this.querySelectorAll<HTMLDivElement>(".carosell-navigation .carosell-1")
    };


    __viewLinkAnimationInset(){
        if(this._studentReviewsQuotecc){
            this._studentReviewsQuotecc.style.animation = " __ReviewsAnimation__ 1s forwards"
        }
    }
    __createAnimationFacilityFunction() {
        if (this._studentReviewsQuotecc) {
            createViewLinkerManger({
                element : this._studentReviewsQuotecc,
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


    private async __changeElementContent__(__number_:number){
        this._removeActivityFromCarouselle();
        this._clearCurrentDataAvailabilty()
        this._updateCarousellDisplay(__number_);
        this._fillDataInQuote(__number_);
    }

    //first make the data seem to be empty
    private _clearCurrentDataAvailabilty() {
        if (this._studentReviewsQuote) {
            this._studentReviewsQuote.innerHTML = ``
        }
    };

    //fill quote with data;
    private _fillDataInQuote(_number_: number) {
        if (this._studentReviewsQuote) {
            let _getPreviewDataContent = ReviewsData[_number_];
            this._studentReviewsQuote.innerHTML = _getPreviewDataContent.data;
        }
    };
    //remove activity from any carousell 
    private _removeActivityFromCarouselle() {
        if (this._carosoellNavigationComponents) {
            this._carosoellNavigationComponents.forEach((_E_) => {
                if (_E_.classList.contains("cr-active")) {
                    _E_.classList.replace("cr-active", "cr-off");
                }
            })
        }
    }
    //update current carousell;
    private _updateCarousellDisplay(_number_: number) {
        if (this._carosoellNavigationComponents) {
            let _getPrviewedCarousellElement = this._carosoellNavigationComponents[_number_];
            _getPrviewedCarousellElement.classList.replace("cr-off", "cr-active")
        }
    }

    _createEventListenersForCarousellNavigation() {
        let that = this;
        if (this._carosoellNavigationComponents) {
            this._carosoellNavigationComponents.forEach((__e__) => {
                __e__.addEventListener("click", function (e) {
                    let _ccNumber = this.getAttribute("carosell-x")!;
                    that.__changeElementContent__(parseInt(_ccNumber))
                })
            })
        }
    }

}
customElements.define("ns-x-reviews", ReviewSection);