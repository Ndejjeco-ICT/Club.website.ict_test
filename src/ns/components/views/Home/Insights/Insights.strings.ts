

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
        title: "Interact Club",
        componentPictureSrc: "",
        mainDescription : "Service above self.",
        shortDescription : "Serving others beyond self, from an idea introduced during a fellowship, ideas exchanged and ideas turned to reality",
        onClickCallback: () => {
            
        },
        key : "cr1"
    },
    {
        title: "Junior Achievement Club",
        mainDescription : "Business and Skills.",
        componentPictureSrc: "",
        shortDescription : "Developing business skills in young people and strengthening the existing and coming generation through making job creators and not seekers ",
        onClickCallback: () => {
            
        },
        key : "cr2"

    },
    {
        title: "The Student's Council",
        componentPictureSrc: "https://github.com/Ndejjeco-ICT/Club.website.ict/blob/main/public/img/Home/insights/sc.JPG",
        mainDescription : "To prepare and produce disciplined, patriotic and self reliant citizens for National Development.",
        shortDescription : "The struggle for liberation",
        onClickCallback: () => {
            
        },
        key : "cr3"
    },
    {
        title: "Genuine Writers",
        mainDescription : "Bringing information and all you need to know close to you.",
        componentPictureSrc: "",
        shortDescription : "From Ink Came Power",
        onClickCallback: () => {
            
        },
        key : "cr4"
    },
    {
        title  : "ICT club",
        mainDescription : "",
        shortDescription : "We Code the Future",
        componentPictureSrc : "A future where all we see, do and love , technology has solved.",
        onClickCallback : ()=>{

        },
        key : "cr5"
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
                <div class="card-content-image"></div>
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
        const __hostInfoElement = __holdingElement.querySelector<HTMLDivElement>(".card-content-info");
        const __hostImageElment = __holdingElement.querySelector<HTMLDivElement>(".card-content-image")

        __hostInfoElement!.addEventListener("click",()=>{
            __element.onClickCallback();
        })
        __hostImageElment!.style.backgroundImage = `url(${__element.componentPictureSrc})`

    }



}