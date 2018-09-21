import * as React from 'react';

import AcademicCalendar from './AcademicCalendar';
import ButtonCounter from './ButtonCounter';
import ExampleCard from './ExampleCard';

import './home.css';

class Home extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>

        <div className="myuw-ticker">
          <div className="myuw-ticker-left">
            <div className="myuw-ticker-card">
              <a href="#"><i className="far fa-grimace" /> make a <span>tickker component</span></a>
            </div>
          </div>
          <div className="myuw-ticker-right">
            <div className="myuw-ticker-card">
              <a href="#">make a <span>component</span></a>
            </div>
            <div className="myuw-ticker-card">
              <a href="#">make a <span>component</span></a>
            </div>
            <div className="myuw-ticker-card">
              <a href="#">make a <span>component</span></a>
            </div>
            <div className="myuw-ticker-card">
              <a href="#">make a <span>component</span></a>
            </div>
          </div>
        </div>

        <div className="myuw-home">


          <div className="row no-gutters">
            <div className="col-md-8 pr-2">
              <ExampleCard wait={1000} />
              <ButtonCounter title="Button Counter" subtitle="Click the Button for stuff!" />
              <ExampleCard wait={1300} />
            </div>
            <div className="col-md-4 pl-2">
              <AcademicCalendar compiler="TypeScript" framework="React" />
            </div>
          </div>
  

        </div>

      </div>
    );
  }
}

export default Home
