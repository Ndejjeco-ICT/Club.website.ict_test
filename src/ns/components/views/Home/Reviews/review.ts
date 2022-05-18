import { IWebComponents } from "ns/typings/schw";

export class ReviewSection extends HTMLElement implements IWebComponents {

    private _reviews: HTMLDivElement | null;

    constructor() {
        super();
        this._reviews = null;
        this.innerHTML = `   
        <div class="review-main-component">
        <div class="main-review-container">
            <div class="split-layout-containers">
                <div class="split-container-1">
                    
                </div>
                <div class="split-container-2">
                    <h2> -Student Reviews</h2>
    
                    <div class="student-quote">
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Beatae obcaecati, alias at ut vel quaerat amet minima velit minus iusto
                            quisquam pariatur perspiciatis natus nostrum vitae officia possimus 
                            nulla suscipit".
                        </p>
                    </div>
    
                    <div class="carosell-navigation">
                        <div class="carosell-1"></div>
                        <div class="carosell-1 carosell-2"></div>
                        <div class="carosell-1 carosell-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    `
    };
    connectedCallback() {
        this.init();
    };
    init() {
        this.createClickAnimation();
    }
    createClickAnimation() {
        this._reviews= this.querySelector("Review")
    }
}

customElements.define("ns-x-reviews", ReviewSection);