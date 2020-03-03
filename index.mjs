/* https://github.com/developit/htm */

import { html, Component, render } from 'https://ghtea.github.io/Countries/common/standalone.module.js';




  const Test = ({ name }) => html`<h1>${name}</h1>`;


  const TestSvg = () => html`
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="chart" width="400" height="200">

    <g class="bar">
      <rect width="${objCountryPop['4']['2019']*1000/1000000*5}" height="19"></rect>
      <text x="45" y="9.5" dy=".35em">4 ${objCountryBasic['4']['Country']}</text>
      <text x="45" y="${9.5+19}" dy=".35em"> ${objCountryBasic['4']['Alpha2']}</text>
    </g>
  </svg>
`;

const TestFlag = () => html`  <img class="imgFlag" src="flagsPng/kr.png"/>`;

    
    
   render(html`<${TestFlag}   />`, document.body);
  
   render(html`<${TestSvg}   />`, document.body);
  
  render(html`<${Test}  name="TestTest" />`, document.body);
