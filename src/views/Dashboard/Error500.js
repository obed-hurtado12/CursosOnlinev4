import React, { Component } from "react";
import "./error404.css";
import error from "../../assets/img/Error/500.png";

export default class Error500 extends Component {
  render() {
    return (
      <div id="notfound">
        <img id="error" src={error} />
        <div class="notfound">
          <div class="notfound-404">
            <h1>
              5<span>0</span>0
            </h1>
          </div>
          <p>
            Woops! ¡Algo salió mal!
          </p>
          <p  id="texto">
          ¿Has probado a apagarlo y encenderlo de nuevo?
          </p>
          <a href="#">Volver</a>
        </div>
      </div>
    );
  }
}