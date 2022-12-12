import { useForm } from "react-hook-form";
import React, { Component } from "react";
import Card from "components/Card/Card";
import "./form.css";

export default class Select extends Component {
  render() {
    return (
      <div className="main__select">
        <p>
          <span class="">•</span>
          <span className="active">•</span>
          <span class="">•</span>
        </p>
        <br />

        <Card>
          <h1 className="main__title">Àrea de comentarios</h1>
          <textarea className="textarea">
            Hola,¿Qué tal?, ESTA ES UN AREA DONDE PUEDES ESCRIBIR TUS
            COMENTARIOS
          </textarea>
        </Card>
      </div>
    );
  }
}
