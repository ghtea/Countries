import { html, Component, render } from 'https://ghtea.github.io/Countries/common/standalone.module.js';

/*루트 컴포넌트가 함수형이면 안되는듯?*/

class App extends Component {
      makeName() {
        let randomName = arrayFront[Math.floor(Math.random() * arrayFront.length)]['word'] + arrayBack[Math.floor(Math.random() * arrayBack.length)]['word'];
        
        const { nicknames = [] } = this.state;
        this.setState({ nicknames: nicknames.concat(`${randomName}`) });
        console.log(nicknames);
      }
      
      
      render({ version }, { nicknames = [] }) {
        return html`
          <div class="app">
            <${Header} name="combiname v${version}" />
            <button onClick=${() => this.makeName()} >Make Random Nickname</button>
            
            <ul>
              ${nicknames.map(nickname => html`
                <li>${nickname}</li>
              `)}
            </ul>
           </div>
        `;
        
      }
    }

    const Header = ({ name }) => html`<h1>${name}</h1>`

    render(html`<${App} version="0.1" />`, document.body);


/*
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="chart" width="400" height="400" role="img">

  <g class="bar">
    <rect width="${Math.round(33.4}" height="40"></rect>
    <text x="5" y="50" dy=".35em">4 apples</text>
  </g>
   
<svg>

console.log(Math.round(objCountryPop['4']['2019']))
*/