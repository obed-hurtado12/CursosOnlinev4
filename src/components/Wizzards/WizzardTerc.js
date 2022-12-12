import React, { Component } from "react";
import Datos from "components/Forms/Datos.js";
import "./wizzard.css";
export default class Wizztres extends Component {
  render() {
    return (
      <div>
        <Datos />

        <br />
        <p className="main__boton">
          <button onClick={this.props.previousStep}>Paso anterior</button>
        </p>
      </div>
    );
  }
}
