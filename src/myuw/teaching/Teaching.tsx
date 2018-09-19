import * as React from 'react';
import FirstComponent from './FirstComponent';

import './teaching.css';

class Teaching extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="myuw-teaching">
        <h1>Hello, Welcome to the first page</h1>
        <FirstComponent />
      </div>
    );
  }
}
export default Teaching
