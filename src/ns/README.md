# Components structure

The Ndejje Website is built upon the technology of webcomponents. Webcomponents are reusable components that have isolated tags.

Putting aside the Normal way of developing it with individual html files, components are different Javascripts Files(Typescript) divided into various components that in the end are rendered onto the Page.

Components can be written in both typescript and Javascript. Which Ever suits you

For Example;

## Sample  `element.js`

```js

    class MyCoolButton extends HTMLElement {

        constructor(){
            super();
            this.innerHTML = `
                <div id="common">
                    <h1>Hello</h1>
                </div>
            `
        }
        connectedCallback(){
            //Called whenever the element is attached to the dom
            console.log("Element adddddded!")

        };
        disConnectedCallback(){
            //called whenever the element is removed from the dom
        }
        attributeChangedCallback(){
            //listener for any attribute on the elemen
            
        }
    }

    //Register element is must have hyphens!!!!.
    customeElements.define("my-cool-button",MyCoolButton)
```

## Add Script `element.js` to HTML


```html
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>  
            <!--Attach element to html document--->
            <my-cool-button></my-cool-button>

            <!--Add Script to html document--->
            <script src="element.js"></script>
        </body>
        </html>
```