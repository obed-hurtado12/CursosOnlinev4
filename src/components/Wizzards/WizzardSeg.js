import React, { Component } from "react";
import Select from "components/Forms/Select.js";
import "./wizzard.css";

export default class Wizzdos extends Component {
  render() {
    return (
      <div>
        <Select />

        <p className="main__boton">
          <button onClick={this.props.previousStep}>Paso anterior</button>
        </p>
        <br />
        <p className="main__boton">
          <button onClick={this.props.nextStep}>Siguiente paso</button>
        </p>
      </div>
    );
  }
}
