import React, { Component } from "react";
import routes from "../../routes";
import { renderRoutes } from "../../common/routes";


export default class MainPanel extends Component {
 
  render() {
    return <div className="main-panel ">{renderRoutes(routes)}</div>;
  }
}
