import { html, Component, render, useState} from 'https://beforestorm.avantwing.com/0/common/standalone.module.js';


let listIndex = Object.keys(objCountryCodes);


function Country({cAlpha2}) {

return html`

<div class="divCountry">

<div class="divFlag">
   <img src="0/images/flagsPng/${cAlpha2.toLowerCase()}.png" />
</div>

<div class="divInfo">
</div>

</div>

`;
}


function All() {

return html`
<div >
   ${listIndex.length} Countries

</div>


<div id="divContent">
    
${listIndex.map((cAlpha2, index)=> html`
   <${Country} 
      cAlpha2=${cAlpha2} 
   />
`)}
</div>

`;   
}

render(html`<${All}/>`, document.body);


