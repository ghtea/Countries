import { html, Component, render, useState} from 'https://beforestorm.avantwing.com/0/common/standalone.module.js';


let listIndex = Object.keys(objCountryCodes);

function All() {


return html`
<div>
    hahaha ${objCountryCodes[listIndex[0]]['Name']}
<div/>

`;   
}

render(html`<${All}/>`, document.body);


