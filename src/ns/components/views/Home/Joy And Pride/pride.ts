import { IWebComponents } from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<!---
    Joy and Pride Component
-->
<div class="ponaco-splitview-2">
    <div class="wrapper">
        <div class="grid-box-1 grid-x-box">
            <div class="content-area-1">The school of joy and pride</div>
        </div>
        <div class="grid-box-2 grid-x-box">
            <div class="content-area-2 content-box">
                <div class="content-image-item">
                <i class="fa-solid fa-school"></i>
                </div>
                <h2>Education</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam dolorem dolore
                    veniam qui nostrum provident possimus perferendis velit voluptatibus
                    tempora repellendus nobis soluta dolores facere vel in, iure debitis!
                </p>
            </div>
        </div>
        <div class="grid-box-3 grid-x-box">
            <div class="content-area-3 content-box">
                <div class="content-image-item">
                <i class="fa-solid fa-calendar-check"></i>
                </div>
                <h2> Simple Online enrolment </h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga labore vitae,
                    sequi doloribus adipisci enim obcaecati delectus autem corporis cumque aliquid eveniet recusandae id
                    aperiam! Impedit hic magnam doloribus suscipit!
                </p>
            </div>
        </div>
        <div class="grid-box-4 grid-x-box">
            <div class="content-area-4 content-box">
                <div class="content-image-item">
                    <i class="fa-solid fa-users"></i>
                </div>
                <h2> Professional Mentors </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Numquam odio doloremque expedita et. Enim, ab facere, deserunt
                    veritatis sunt hic cupiditate dolorum excepturi ipsa inventore fugiat optio neque, ullam voluptates?
                </p>
            </div>
        </div>
    </div>

</div>
`

export class PrideComponent extends HTMLElement implements IWebComponents {

    private _gridCommonComponent: HTMLDivElement|null;

    constructor() {
        super();
        this._gridCommonComponent = null;
        this.appendChild(Template_.content.cloneNode(true));

    }
    connectedCallback() {
        this.init();
    }
    private init() {
        this.createElementHandles()
        this._createFlowAnimation()
    }
    createElementHandles() {
        this._gridCommonComponent = this.querySelector(".grid-common-box")
    };
    _createFlowAnimation() {
        
    }
    
}
customElements.define("ns-x-pride", PrideComponent);