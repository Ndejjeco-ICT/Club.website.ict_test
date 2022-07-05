import   {IWebComponents} from "ns/typings/schw";





const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-sub-image-component">
    <div class="xb-wrapper">
        <div class="xb-image-holder-component">
            <figure class="x-image-fig">
                <img src="" aria-placeholder="none"/>
            </figure>
        </div>
    </div>
</div>
`;


class GalleryImageContainer extends HTMLElement implements IWebComponents {

    constructor(){
        super();
        this.appendChild(Template_.content.cloneNode(true))
    }

    connectedCallback() {

    }
}

customElements.define("ns-x-gimage",GalleryImageContainer)