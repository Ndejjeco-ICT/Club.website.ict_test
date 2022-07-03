

export interface IInsightsString {
    title: string,
    key : string,
    componentPictureSrc: string,
    mainDescription : string
    shortDescription: string,
    onClickCallback: () => void;
}

const InsightDefaultTemplate = `
<div class="card-x-component">
<div class="card-content">
    <div class="card-content-wrapper">
        <div class="card-content-image cg-5"></div>
        <div class="card-content-info">
            <div class="x-title-1 ctrinfo">
                <div class="wrapper">
                    Relating And Knowing Other Students
                </div>
            </div>
            <div class="x-title-2 ctrinfo">
                <div class="wrapper">
                    Many Students have suffered a social boundary
                because of the
                great wall of school which destroys there social life.
                </div>
            </div>
            <div class="x-title-btn">
                <div class="x-btn-wrapper ctrinfo">
                    <div class="sl-button">&RightArrow;</div>
                    <div class="sl-text">Read More From Interact Club.</div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`

export const InsightsStrings:IInsightsString[] = [
    

    {
        title: "The Student's Council",
        componentPictureSrc: "./img/Home/insights/Clubs/council.jpg",
        mainDescription : "To prepare and produce disciplined, patriotic and self reliant citizens for National Development.",
        shortDescription : "The struggle for liberation",
        onClickCallback: () => {
            
        },
        key : "cg-3"
    },
    {
        title: "WOPI",
        componentPictureSrc: "./img/Home/insights/Clubs/becky.jpg",
        mainDescription : "To prepare and produce disciplined, Ladies",
        shortDescription : "Women of Purpose",
        onClickCallback: () => {
            
        },
        key : "cg-6"
    },
    {
        title: "Interact Club",
        componentPictureSrc: "./img/Home/insights/Clubs/Interact_Club.jpg",
        mainDescription : "Serving others beyond self, from an idea introduced during a fellowship, ideas exchanged and ideas turned to reality",
        shortDescription : "Service above self.",
        onClickCallback: () => {
            console.log("---main--interact")
        },
        key : "cg-1"
    },
    {
        title: "Genuine Writers",
        mainDescription : "Bringing information and all you need to know close to you.",
        componentPictureSrc: "./img/Home/insights/Clubs/writers1.jpg",
        shortDescription : "From Ink Came Power",
        onClickCallback: () => {
            
        },
        key : "cg-4"
    },
    {
        title: "Junior Achievement Club",
        mainDescription : "Developing business skills in young people. and strengthening the existing and coming generation.",
        componentPictureSrc: "./img/Home/insights/Clubs/Junior_AchievemenT1.JPG",
        shortDescription : "Business and Skills. ",
        onClickCallback: () => {
            
        },
        key : "cg-2"

    },
   
    {
        title  : "Clubs Forum",
        mainDescription : "",
        shortDescription : "With Great Power Comes Great Responsiblity.",
        componentPictureSrc : "./img/Home/insights/Clubs/Clubs_forum.jpg",
        onClickCallback : ()=>{

        },
        key : "cg-5"
    }
]


export class InsightsLoader  { 

    private _insightsContainer:HTMLDivElement;

    constructor(element:HTMLDivElement){ 
        this._insightsContainer = element; 
        this._initInsights(InsightsStrings)
    };


    private _initInsights(insightsDatabase:IInsightsString[]){
        insightsDatabase.forEach((_data)=>{
            this._createTemplateBasis(_data)
        });
        
    }

    private _createTemplateBasis(__element:IInsightsString){
        const _srTemplate = `
        <div class="card-x-component ${__element.key}">
        <div class="card-content">
            <div class="card-content-wrapper">
                <div class="card-content-image  "></div>
                <div class="card-content-info">
                    <div class="x-title-1 ctrinfo">
                        <div class="wrapper">
                            ${__element.shortDescription}
                        </div>
                    </div>
                    <div class="x-title-2 ctrinfo">
                        <div class="wrapper">
                            ${__element.mainDescription}
                        </div>
                    </div>
                    <div class="x-title-btn">
                        <div class="x-btn-wrapper ctrinfo">
                            <div class="sl-button">&RightArrow;</div>
                            <div class="sl-text">Read More From ${__element.title}.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `;

        //attach main element
        this._insightsContainer.insertAdjacentHTML("afterbegin",_srTemplate);


        const __holdingElement = document.querySelector<HTMLDivElement>(`.${__element.key}`)!;
        const __hostInfoElement = __holdingElement.querySelector<HTMLDivElement>(".card-content-info")
        const __hostImageElment = __holdingElement.querySelector<HTMLDivElement>(".card-content-image")
        __hostInfoElement!.addEventListener("click",()=>{
            __element.onClickCallback();
        })
        __hostImageElment!.style.backgroundImage = `linear-gradient(
            to top,
            #000,
            #00000056,
            #80808000,
            #80808000
          ),url(${__element.componentPictureSrc})`

    }



}