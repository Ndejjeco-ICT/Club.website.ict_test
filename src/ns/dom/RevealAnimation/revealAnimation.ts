

interface IRevealElementSettings {
    element : HTMLElement;
    revealHeight: number;
    __animationCallback__ : Function;
}

export class RevealAnimationElement {

    private _element:HTMLElement;
    private  _revealHeight:number
    private _animationCallback:Function;
    constructor(options:IRevealElementSettings){
        this._element = options.element;
        this._revealHeight  = options.revealHeight;
        this._animationCallback = options.__animationCallback__;
        this.__init_();
    };
    private __runFlowAnimation(){
        if(this.__checkWhetherElementPossesAttribute()){
            this.__executeApparentAnimation()
        }
    }
    private __executeApparentAnimation(){
        if(this._element){
            setTimeout(()=>{
                this._animationCallback()
            },9)
        }else{
            //do nothing
        }
    }
    private __checkWhetherElementPossesAttribute(){
        return this._element.hasAttribute("will-animate")  ? true : false;
    }

    //creates animation reveal basis
    private __init_(){
        let _currentWindowHeight  = window.innerHeight;
        let _elementdistanceFromTop = this._element.getBoundingClientRect().top;
        if(_elementdistanceFromTop < _currentWindowHeight - this._revealHeight){
            console.log("didReachCondition",this._element)
            this._element.setAttribute("will-animate","")
            this.__runFlowAnimation()
        }else{
            this._element.removeAttribute("will-animate")
            this.__runFlowAnimation()
        }

    }

}