import * as React from 'react';
import { NavLink } from 'react-router-dom';

class NavMenu extends React.Component<{}> {

  public render() {
    return (
      <ul className="bp-menu">
        <li><NavLink to="/" exact={true} activeClassName="u-active"> <i className="fas fa-home" /> Home</NavLink></li>
        <li><NavLink to="/teaching" activeClassName="u-active"> <i className="fas fa-link" /> Teaching</NavLink></li>
        <li><a href="#"><i className="fas fa-link" /> Item</a></li>
        <li><a href="#"><i className="fas fa-link" /> Item</a></li>
        <li><hr /></li>
        <li><a href="#"><i className="fas fa-link" /> Item</a></li>
        <li><a href="#"><i className="fas fa-link" /> Item</a></li>

      </ul>
    );
  }

}

export default NavMenu;
