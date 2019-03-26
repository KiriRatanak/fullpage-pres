import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Slide1 from '../components/Slide1'
import Slide2 from '../components/Slide2'

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

const originalColors = ['#282c34', '#ff5f45', '#0798ec'];

class App extends React.Component {


  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="App">
        <ReactFullpage
          debug /* Debug logging */
          navigation          
          sectionSelector={SECTION_SEL}
          render={comp => (
            <div>
              <Slide1 SEL={SEL}/>
              <Slide2 SEL={SEL}/>
            </div>
          )}
        />
      </div>
    );
  }
}

// const rootElement = document.getElementById('react-root');
// ReactDOM.render(<App />, rootElement);
export default App;