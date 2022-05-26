import { IWebComponents } from "ns/typings/schw";

export class FaqComponent extends HTMLElement implements IWebComponents {

    private _frequentlyAskedQuestions: HTMLDivElement | null;

    constructor() {
        super();
        this._frequentlyAskedQuestions = null;
        this.innerHTML = `
        <div class="main-faqcomponent">
        <div class="main-content-layout">
            <h2>Frequently Asked Questions</h2>
    
            <div class="content-slider">
                <div class="info-slider-1">
                    <div class="initial-display-1">
                        <p>Where can I find the headquaters of Ndejje SSS?</p>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="slider-expand-section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda facilis,
                            pariatur soluta libero consequuntur modi autem velit quibusdam harum quod ipsam? 
                           </p>
                    </div>
                </div>
                <div class="info-slider-1">
                    <div class="initial-display-1">
                        <p>What is the school fees per term?</p>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
    
                    <div class="slider-expand-section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda facilis,
                            pariatur soluta libero consequuntur modi autem velit quibusdam harum quod ipsam? 
                        </p>
                    </div>
                </div>
                <div class="info-slider-1">
                    <div class="initial-display-1">
                        <p>How can I contact the school for any queries?</p>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="slider-expand-section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda facilis,
                            pariatur soluta libero consequuntur modi autem velit quibusdam harum quod ipsam? 
                        </p>
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
        this._frequentlyAskedQuestions = this.querySelector("FAQ")
    }
}

customElements.define("ns-x-faq", FaqComponent);