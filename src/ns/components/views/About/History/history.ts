import { IWebComponents } from "ns/typings/schw";

export class HistorySectionComponent extends HTMLElement implements IWebComponents {

    private _historySection: HTMLDivElement | null;

    constructor() {
        super();
        this._historySection = null;
        this.innerHTML = `
        <div class="historyComponent">
        <div class="main-historysection-container">
            <div class="split-layout-divider">
                <div class="section-content-1">
                    <h2>History Of the School</h2>
                    <p>View the history of the school</p>
                    <button>Read more</button>
                    <img src="#" alt="#">
                </div>
                <div class="section-content-2">
                    <div class="content-container left">
                        <div class="content">
                            <h2>1963</h2>
                            <p>Tito Ssesanga Walusimbi, the headteacher of Ndejje JUnior school  started a fundraising to build
                                a secondary school on the vast land on which the Junior school sat.
                            </p>
                        </div>
                    </div>
                    <div class="content-container right">
                        <div class="content">
                            <h2>1963</h2>
                            <p>
                                Ndejje SS was born as a mixed O-level secondary school with Walusimbi as its first headteacher
                            </p>
                        </div>
                    </div>
                    <div class="content-container left">
                        <div class="content">
                            <h2>1986</h2>
                            <p>Ndejje SS was the first school to experience free education currently enjoyed by Universal Secondary Schools in the country. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    };
    connectedCallback() {
    };
}

customElements.define("ns-x-history", HistorySectionComponent);