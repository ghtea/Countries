import { html, Component, render } from 'https://ghtea.github.io/Countries/common/standalone.module.js';


const Root = ({ name }) => html`<h1>${name}</h1>`

render(html`<${Root} name= "hahaha" version="0.1" />`, document.body);

/*
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="chart" width="400" height="400" role="img">

  <g class="bar">
    <rect width="${Math.round(33.4}" height="40"></rect>
    <text x="5" y="50" dy=".35em">4 apples</text>
  </g>
   
<svg>

console.log(Math.round(objCountryPop['4']['2019']))
*/