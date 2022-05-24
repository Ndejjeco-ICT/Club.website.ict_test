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
                </div>
    
                <div class="section-content-2">
                    <div class="mini-divider">
                        <div class="content-a">
                            <p>1987</p>
                        </div>
                        <div class="content-b">
                            Lorem ipsum dolor, sit amet
                            suscipit quam praesentium ab mollitia aspernatur dicta.
                        </div>
                        <div class="content-a">
                            <p>1987</p>
                        </div>
                        <div class="content-b">
                            Lorem ipsum dolor, sit amet
                            suscipit quam praesentium ab mollitia aspernatur dicta.
                        </div>
                        <div class="content-a">
                            <p>1987</p>
                        </div>
                        <div class="content-b">
                            Lorem ipsum dolor, sit amet
                            suscipit quam praesentium ab mollitia aspernatur dicta.
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