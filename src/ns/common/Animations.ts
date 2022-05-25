import {createInstance} from "ns/base/instanceCreators/instanceCreators"
//@ts-ignore
import anime from "animejs";


type Intefaces = "WELCOME_COMPONENT"| "PRIDE_COMPONENT"| "BENEFITS_COMPONENT" | "INSIGHTS_COMPONENT"| "FAQ_COMPONENT" | "EDU_COMPONENT";
export interface INSANimationsRun {

    executeInterfaceAnimation(interfaceComponent:Intefaces) : void;


};


export class AnimationsRun implements INSANimationsRun{

    constructor() { };


    //welcome not animation
    private __welcomeComponentAnimationResource(){
        anime({
            targets : ".welcome-note-section",
            opacity : [0,1],
            translateX : [-100,0],
            duration : 3,
            easing: 'easeInOutSine'
        });
    };

    //Pride Component Animation
    private __prideComponentAnimationResource(){
        anime({
            targets : ".pride-x-component .container",
            opacity : [0,1],
            translateY : [100,0],
            duration : 3,
        });
    };

    //benefits content manager.
    private _benefitsComponentAnimationResource(){
        anime({
            targets : ".benefits-content-holder",
            opacity : [0,1],
            translateY : [100,0],
            duration : 3,
            easing: 'easeInOutSine'
        });
    }

    //INSIGHTS CARD
    private __insightsCardAnimation(){
        anime({
            targets : ".card-x-component",
            opacity : [0,1],
            translateY : [100,0],
            duration : 3.5,
            easing: 'easeInOutSine'
        });
    }

    //FAQ
    private __faqSlideAnimation(){
        anime({
            targets : ".info-slider-1",
            opacity : [0,1],
            translateY : [100,0],
            duration : 1,
            easing: 'easeInOutSine'
        });
    };

    //EDU
    private  _eduSlideAnimation(){
        anime({
            targets : ".ponaco-component-edu .wrappe",
            opacity : [0,1],
            translateY : [100,0],
            duration : 3.5,
            delay : anime.stagger(100),
            easing: 'easeInOutSine'
        });
    }


    executeInterfaceAnimation(interfaceComponent: Intefaces): void {
        switch (interfaceComponent) {
            case "WELCOME_COMPONENT":
                this.__welcomeComponentAnimationResource();
                
            break;
            case "BENEFITS_COMPONENT": 
                this._benefitsComponentAnimationResource();
            break;
            case "INSIGHTS_COMPONENT" :
                this.__insightsCardAnimation();
            break;
            case "EDU_COMPONENT":
                this._eduSlideAnimation();
            break;
            case "PRIDE_COMPONENT":
                this.__prideComponentAnimationResource();
            break;
            case "FAQ_COMPONENT" :
                this.__faqSlideAnimation();
            break;
        
            default:
                break;
        }
    };

}

export const AnimationProvider = createInstance<INSANimationsRun>(AnimationsRun)