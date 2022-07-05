interface IGoalsBLoader {
    xl1: string;
    xl2: string;
    key: string;
    pictureSource: string;
}




const GoalsMainData: IGoalsBLoader = {

    xl1: "Research And Discover",
    xl2: "Biology",
    pictureSource: "./img/Home/pride/biology.jpg",
    key: "1"

}



const GoalsSubData: IGoalsBLoader[] = [
    {
        xl1: "Discuss And Renew",
        xl2: "Debate",
        pictureSource: "./img/Home/pride/debate.jpg",
        key: "ty1"
    },
    {
        xl1: "Creative Talent",
        xl2: "Music and Drama",
        key: "3",
        pictureSource: "./img/Home/pride/talent.jpg"
    }
]

const template = `
<div class="ctx-pic-1 cn-pic-box">
<div class="cn-picture-container cn-1"></div>
<div class="cn-info-container">
    <div class="cn-info-wrapper">
        <div class="cn-short-title">Practice</div>
        <div class="cn-short-title-2">Technology</div>
    </div>
</div>
</div>
`



export class GlBLoader {

    private _gl1Container:HTMLDivElement;
    private _gl2Container:HTMLDivElement;

    constructor(el1:HTMLDivElement,el2:HTMLDivElement){
        this._gl1Container = el1;
        this._gl2Container = el2
        this.__attachMainData();
    }

    __attachMainData(){
        this. __createTemplateForMainGoalData(GoalsMainData);




        GoalsSubData.forEach((d)=>{
            this.__createTemplateForGoalsSubData(d)
        })
    }
    __createTemplateForMainGoalData(data:IGoalsBLoader){
        const __template =  `
        <div class="ctx-pic-1 cn-pic-box">
        <div class="cn-picture-container cn-1"></div>
        <div class="cn-info-container">
            <div class="cn-info-wrapper">
                    <div class="cn-short-title">${data.xl1}</div>
                <div class="cn-short-title-2">${data.xl2}</div>
            </div>
        </div>
        </div>
        `

        //attach template
        this._gl1Container.insertAdjacentHTML("afterbegin",__template);
        const __pictureContainer = this._gl1Container.querySelector<HTMLDivElement>(".cn-picture-container");

        __pictureContainer!.style.backgroundImage = `linear-gradient(
            to top,
            #000,
            #00000056,
            #80808000,
            #80808000
          ),url(${data.pictureSource})`

    }

    __createTemplateForGoalsSubData(data:IGoalsBLoader){
        const __template =  `
        <div class="ctx-pic-1 cn-pic-box ${data.key}">
        <div class="cn-picture-container cn-1"></div>
        <div class="cn-info-container">
            <div class="cn-info-wrapper">
                    <div class="cn-short-title">${data.xl1}</div>
                <div class="cn-short-title-2">${data.xl2}</div>
            </div>
        </div>
        </div>
        `

        //attach template
        this._gl2Container.insertAdjacentHTML("afterbegin",__template);
        const __pictureContainer = this._gl2Container.querySelector<HTMLDivElement>(".cn-picture-container");

        __pictureContainer!.style.backgroundImage = `linear-gradient(
            to top,
            #000,
            #00000056,
            #80808000,
            #80808000
          ),url(${data.pictureSource})`
    }

}