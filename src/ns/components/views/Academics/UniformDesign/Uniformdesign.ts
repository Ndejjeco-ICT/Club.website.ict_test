import {IWebComponents} from "ns/typings/schw"

const Template_ = document.createElement("template");
Template_.innerHTML = `
<div class="xb-uniform-design-component">
    <div class="xb-title container">
        <div class="xb-title-area-wrapper">Our Uniform design</div>
    </div>
    <div class="xb-wrapper">
        <div class="xb-main-container">
            <div class="xb-container-area">
                <div class="xb-content-manager">
                    <div class="xb-split-view">
                        <div class="xb-split-view-1 view-area">
                            <div class="xb-content-1 xb-pic xbr-content">
                                <div class="xb-picture-container"></div>
                            </div>
                            <div class="xb-content-2 xbr-content xtr-info">
                                <div class="wrapper">
                                    <div class="title-component">
                                        <div class="title-wrapper">A-Level </div>
                                    </div>
                                    <div class="content-container">
                                        <div class="content-wrapper">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iusto veritatis quae eos, magni aliquam ab quasi ea excepturi esse voluptate obcaecati consequuntur accusamus. Eius optio consequuntur laboriosam voluptate hic.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="xb-split-view-2 view-area">
                            <div class="xb-content-1 xbr-content xtr-info">
                                <div class="wrapper">
                                    <div class="title-component">
                                        <div class="title-wrapper">O-Level </div>
                                    </div>
                                    <div class="content-container">
                                        <div class="content-wrapper">
                                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellendus molestiae suscipit dolore ratione. Repellat consequatur nisi reiciendis voluptates, magnam cum molestias error sapiente officiis sed ratione assumenda, autem facere!
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="xb-content-2 xb-pic xbr-content">
                                <div class="xb-picture-container"></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`

class uniformdesign extends HTMLElement implements IWebComponents{
    constructor(){
        super()
        this.appendChild(Template_.content.cloneNode(true))
    }
    connectedCallback(){

    }
}
customElements.define("ns-x-uniformdesign",uniformdesign)