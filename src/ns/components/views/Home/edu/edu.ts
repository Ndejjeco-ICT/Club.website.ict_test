import {IWebComponents} from "ns/typings/schw";
import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";
import anime, { AnimeInstance } from "animejs";

const Template_ = document.createElement("template");
Template_ .innerHTML = `
<div class="ponaco-component-edu">
    <div class="sudo-elements">
        <div class="ser ser1"></div>
        <div class="ser ser2"></div>
        <div class="ser ser3"></div>
        <div class="ser ser4"></div>
        <div class="ser ser5"></div>
        <div class="ser ser6"></div>
        <div class="ser ser7"></div>
    </div>
    <div class="wrapper">
        <div class="info"><span class="ctr"><span class="cl">J</span>oy </span>And <span class="ctr"><span class="cl">P</span>ride!</span></div>
    </div>
</div>
`

export class EduComponent extends HTMLElement implements IWebComponents {


    private _eduElementHandle:HTMLDivElement|null;
    private _bubles:NodeListOf<HTMLDivElement>|null = null;
    private _animeInstance:AnimeInstance|null = null;

    constructor() {  
        super()
        this.appendChild(Template_.content.cloneNode(true))
        this._eduElementHandle = null;
    }
    connectedCallback(){
        this.initializeComponent();
       
    };

    initializeComponent(){
        this.__createComponentAttachment();
        this.__createAnimationFacility()
    };
    __createComponentAttachment() {
        this._eduElementHandle= this.querySelector(".ponaco-component-edu");

        this._bubles = this.querySelectorAll(".sudo-elements .ser")
    };

    __createAnimationFacility(){
        if(this._eduElementHandle){
            createViewLinkerManger({
                element : this._eduElementHandle,
                linkPosition : 150,
                LinkerCallbacks : {
                    inset  : ()=>{
                        this.__createCommonAnimations()
                    },
                    outset : () =>{
                        if(this._animeInstance){
                            this._animeInstance.reverse()
                        }
                    }
                }
            })
        }
    }
    __createCommonAnimations(){
        if(this._bubles){
            this._animeInstance = anime({
                targets: this._bubles,
                translateX: function(el:HTMLDivElement) {
                    return 8 + (-20);
                  },
                  translateY: function(el:HTMLDivElement, i:number) {
                    return 8 + (-20 * i);
                  },
                  scale: function(el:HTMLDivElement, i:number, l:number) {
                    return (l - i) + .5;
                  },
                  rotate: function() { return anime.random(-360, 360); },
                  borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
                  duration: function() { return anime.random(1200, 1800); },
                  delay: function() { return anime.random(0, 400); },
                  direction: 'alternate',
                //   loop: true
              });
        }
    }
  



}
customElements.define("ns-x-edu",EduComponent)