import { IWebComponents } from "ns/typings/schw";

export class FaqComponent extends HTMLElement implements IWebComponents {

    private _faqSlideElementHandles: NodeListOf<HTMLDivElement> | null = null;
    private _faqSlideContentElementHandles: NodeListOf<HTMLDivElement> | null = null;
    private _didShowSlideData: boolean = false;

    constructor() {
        super();
        this.innerHTML = `
        <div class="main-faqcomponent">
        <div class="main-content-layout">
            <div class="content-title">
                <div class="content-title-wrapper">
                    Frequently Asked Questions
                </div>
            </div>
            
            <div class="content-slider">
                <div class="slider-wrapper">
    
                    <div class="ctr-slider-component">
                        <div class="ctr-label-container">
                            <div class="cl-wrapper">Where can I find the headquaters of Ndejje SSS?</div>
                            <div class="cl-icon-wrapper">
                                <i class="fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                        <div class="ctr-expand-section">
                            <div class="clx-wrapper">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda facilis,
                            pariatur soluta libero consequuntur modi autem velit quibusdam harum quod ipsam? 
                            </div>
                        </div>
                    </div>
    
                    <div class="ctr-slider-component">
                        <div class="ctr-label-container">
                            <div class="cl-wrapper">Where can I find the headquaters of Ndejje SSS?</div>
                            <div class="cl-icon-wrapper">
                                <i class="fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                        <div class="ctr-expand-section">
                            <div class="clx-wrapper">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda facilis,
                            pariatur soluta libero consequuntur modi autem velit quibusdam harum quod ipsam? 
                            </div>
                        </div>
                    </div>
    
                    <div class="ctr-slider-component">
                        <div class="ctr-label-container">
                            <div class="cl-wrapper">Where can I find the headquaters of Ndejje SSS?</div>
                            <div class="cl-icon-wrapper">
                                <i class="fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                        <div class="ctr-expand-section">
                            <div class="clx-wrapper">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda facilis,
                            pariatur soluta libero consequuntur modi autem velit quibusdam harum quod ipsam? 
                            </div>
                        </div>
                    </div>
    
    
                </div>
            </div>
        </div>
    </div>   
    `
    };
    connectedCallback() {
        this.initializeComponent()
    };
    initializeComponent() {
        this.__createComponentAttachements();
        this.__createManageableEventBase()
    }

    __createComponentAttachements() {
        this._faqSlideElementHandles = this.querySelectorAll<HTMLDivElement>(".main-faqcomponent .content-slider .info-slider-1");
        this._faqSlideContentElementHandles = this.querySelectorAll<HTMLDivElement>(".main-faqcomponent .content-slider .info-slider-1 .slider-expand-section")
    }

    __createManageableEventBase() {
        if (this._faqSlideElementHandles && this._faqSlideContentElementHandles) {
            let _that = this;
            this._faqSlideElementHandles.forEach((_E_, i) => {
                let didShowComponentData: boolean = false;

                _E_.addEventListener("mouseover", (e: MouseEvent) => {
                    setTimeout(()=>{
                        if (!didShowComponentData) {
                            _that._faqSlideContentElementHandles![i].style.animation = "__faqSliderAnimations .5s forwards";
                            didShowComponentData = true
                        }
                    },500)
                 
                    e.stopPropagation()
                    e.cancelBubble = true;
                    e.stopImmediatePropagation()
                });
                _E_.addEventListener("mouseleave", () => {
                    setTimeout(()=>{
                        if(didShowComponentData){
                        
                            _that._faqSlideContentElementHandles![i].style.animation = "";
                            _that._faqSlideContentElementHandles![i].style.opacity = "0";
                            _that._faqSlideContentElementHandles![i].style.transform = "translateY(50px)";
                            _that._faqSlideContentElementHandles![i].style.height = "0px"
                            didShowComponentData = false
                        }
                    },500)
                 
          

                    // _that._faqSlideContentElementHandles![i].style.display = "none";


                })
            });

        }
    }



}

customElements.define("ns-x-faq", FaqComponent);