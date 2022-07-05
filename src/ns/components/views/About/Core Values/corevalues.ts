import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";
import { IWebComponents } from "ns/typings/schw";

export class CoreValuesSectionComponent extends HTMLElement implements IWebComponents {

    private _coreValuesSection: HTMLDivElement | null;
    private _coreValuecrComponent:HTMLDivElement|null = null;
    private _coreValuecrComponents:NodeListOf<HTMLDivElement>|null = null;

    constructor() {
        super();
        this._coreValuesSection = null;
        this.innerHTML = `
        <div class="corevalues-main-section-component">
        <div class="intro-section">
            <h2>Our Core Values...</h2>
            <p>The core values are the guiding principles that dictate the
                behavior and action of the Ndejje S.S.S community. Living those
                core values helps us to determine whether we are on the right
                path and fulfilling our goals as a school. The core values
                make us a community and a people with a difference,
                a distinct culture, behavior and personality
            </p>
            <div class="colium-banner-2 clb"></div>
        </div>
        <div class="main-content-container">
            <div class="wrapper">
                <div class="split-section-1">
                    <div class="title-holder">
                        <h2>Excellence</h2>
                        <div class="arithmetic">
                            <h2>1</h2>
                        </div>
                    </div>
        
                    <p>Inculcation of a culture of always demanding the very best in all spheres that govern the school. All key
                        Stakeholders should strive for high strive for high standards and quality performance, whatever the
                        circumstances.
                    </p>
                </div>
                <div class="split-section-1">
                    <div class="title-holder">
                        <h2>Integrity and Time management</h2>
                        <div class="arithmetic">
                            <h2>2</h2>
                        </div>
                    </div>
        
                    <p>Conducting ourselves in an irreproachable manner and utilizing limited time efficiently</p>
                </div>
                <div class="split-section-1">
                    <div class="title-holder">
                        <h2>Innovativeness</h2>
                        <div class="arithmetic">
                            <h2>3</h2>
                        </div>
                    </div>
        
                    <p>We embraced a dynamic technology-based culture that constantly questions the status quo and welcomes
                        changes to improve and value to existing programs.
                    </p>
                </div>
                <div class="split-section-1">
                    <div class="title-holder">
                        <h2>Godliness</h2>
                        <div class="arithmetic">
                            <h2>4</h2>
                        </div>
                    </div>
        
                    <p>Leading a life of faith in God and understanding the importance of living a virtuous and reverent life,
                        which is rooted in the Bible.
                    </p>
                </div>
                <div class="split-section-1">
                    <div class="title-holder">
                        <h2>Hard Work</h2>
                        <div class="arithmetic">
                            <h2>6</h2>
                        </div>
                    </div>
                
                    <p>Make every effort to fulfill our potential to the best. Be productive even when faced with challenges.
                    </p>
                </div>
                
                <div class="split-section-1">
                    <div class="title-holder">
                        <h2>Patriotism</h2>
                        <div class="arithmetic">
                            <h2>5</h2>
                        </div>
                    </div>
                
                    <p>Attaching ourselves to the country, driven by a national pride to accommodate the community’s
                        diversities.
                    </p>
                </div>
                
             
            </div>
           
        </div>
    </div>
    `
    };
    connectedCallback() {
        this._initializeComponent()
    };
    private _initializeComponent(){
        this._createComponentAttachment();
        this._createAnimationFacilityFunction()
    }
    private _createComponentAttachment(){
        this._coreValuecrComponent = this.querySelector(".corevalues-main-section-component .intro-section");
        this._coreValuecrComponents = this.querySelectorAll(".corevalues-main-section-component .main-content-container .wrapper .split-section-1")
    }
    _createAnimationFacilityFunction(){
        if(this._coreValuecrComponent){
            createViewLinkerManger({
                element : this._coreValuecrComponent,
                linkPosition : 150,
                LinkerCallbacks : {
                    inset : ()=>{
                        this._coreValuecrComponent!.style.animation = "welcomeNoteAnimation_1 1s forwards"
                    },
                    outset : ()=>{

                    }
                }
            })
        }

        if(this._coreValuecrComponents){
            this._coreValuecrComponents.forEach((e)=>{
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

customElements.define("ns-x-corevalues", CoreValuesSectionComponent);