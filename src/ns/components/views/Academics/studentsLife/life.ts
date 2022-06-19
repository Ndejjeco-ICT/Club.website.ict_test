import { createViewLinkerManger } from "ns/dom/view_linkers/view_linker";
import { IWebComponents } from "ns/typings/schw";

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
  private _controlElement: HTMLDivElement | null = null;
  constructor() {
    super();
    this.appendChild(Template_.content.cloneNode(true));
  }

  connectedCallback() {
    this.initalizeComponent();
  }
  initalizeComponent() {
    this._createComponentAttachment();
    this._createAnimationFacility();
  }
  _createComponentAttachment() {
    this._controlElement = this.querySelector(
      ".xb-life-component .xb-component-wrapper"
    );
  }
  _viewInsetAnimation() {
    if (this._controlElement) {
      this._controlElement.style.animation = "__studentsLife 1.5s forwards";
    }
  }
  _viewOutsetAnimation() {
    if (this._controlElement) {
      this._controlElement.style.opacity = "0";
      this._controlElement.style.transform = "translateY(-100px)";
      this._controlElement.style.animation = "";
    }
  }

  _createAnimationFacility() {
    if (this._controlElement) {
      createViewLinkerManger({
        element: this._controlElement,
        linkPosition: 150,
        LinkerCallbacks: {
          inset: () => {
            this._viewInsetAnimation();
          },
          outset: () => {},
        },
      });
    }
  }
}

customElements.define("ns-x-life", Life);
