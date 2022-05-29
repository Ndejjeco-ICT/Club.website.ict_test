import {IWebComponents} from "ns/typings/schw";

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-life-component">
    <div class="xb-component-wrapper">
        <div class="xb-title-area-wrapper">
            <div class="xb-title-container">Student's Life</div>
        </div>
        <div class="xb-split-view">
            <div class="xb-split-view-wrapper">
                <div class="xb-split-view-1 split-component">
                    <div class="xb-split-component xb-picture-container">
                        <div class="split-wrapper"></div>
                    </div>
                    <div class="xb-split-component xb-content">
                        <div class="split-wrapper">
                            The discipline of the students continues to improve. It has been observed that most of the indiscipline cases have a link with home related challenges spilling over to the school
                        </div>
                    </div>
                </div>
                <div class="xb-split-view-2 split-component">
                    <div class="xb-split-component xb-content">
                        <div class="split-wrapper">
                            At breakfast, students are served with milk tea along with eats on Tuesday (Doughnuts), Thursday (chapattis), and Saturday (Buns) Sunday (chapattis/Eggs/Maize
                        </div>
                    </div>
                    <div class="xb-split-component xb-picture-container">
                        <div class="split-wrapper"></div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</div>
`;


export class Life extends HTMLElement implements IWebComponents {
    constructor() {
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
};


customElements.define("ns-x-life",Life)