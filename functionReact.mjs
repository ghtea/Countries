  import { html, Component, render } from 'https://ghtea.github.io/Countries/common/standalone.module.js';

  /*루트 컴포넌트가 함수형이면 안되는듯?*/


  const Test = ({ name }) => html`<h1>${name}</h1>`;


  render(html`<${Test}  name="TestTest" />`, document.body);


  const TestSvg = () => html`
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="chart" width="400" height="400">

    <g class="bar">
      <rect width="40" height="19"></rect>
      <text x="45" y="9.5" dy=".35em">4 apples</text>
    </g>
  </svg>
`
    
    
  render(html`<${TestSvg}  name="TestTest" />`, document.body);