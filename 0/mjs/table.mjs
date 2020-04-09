import { html, Component, render, useState} from 'https://beforestorm.avantwing.com/0/common/standalone.module.js';

/* 베이직테이블에 있는 국가들이 모두 gnp 데이터가 있지는 않다! */
let listIndex = Object.keys(objGdp);


function Country({cAlpha2, cAlpha3}) {
   let listYear = ['1960', '1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015','2018']
   
return html`

<div class="divCountry">

<div class="divFlag">
   <img src="0/images/flagsPng/${cAlpha2.toLowerCase()}.png" />
</div>

<div class="divGraph">

   ${listYear.map((cYear)=> html`
   <div data-stage="${objGdpStage[cAlpha3][cYear]}">
   </div>
  `)}
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
   ${listIndex.map((cAlpha3)=> html`
   <${Country}
      cAlpha3=${cAlpha3}
      cAlpha2=${objAlpha3Codes[cAlpha3]['Alpha2']}
   />
  `)}
</div>

`;   
}

render(html`<${All}/>`, document.body);


