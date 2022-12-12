import React, { Component } from "react";
import "./error404.css";
import error from "../../assets/img/Error/502.png";
export default class Error502 extends Component {
  render() {
    return (
      <div id="notfound">
        <img id="error" src={error} />
        <div class="notfound">
          <div class="notfound-404">
            <h1>
              5<span>0</span>2
            </h1>
          </div>
          <p>Woops! ¡Bad Gateway!</p>
          <p id="texto">
            El servidor encontró un error temporal y no pudo completar su
            solicitud.
          </p>
          <a href="#">Volver</a>
        </div>
      </div>
    );
  }
}