import { useForm } from "react-hook-form";
import React, { Component } from "react";
import Card from "components/Card/Card";
import "./form.css";

export default class Forms extends Component {
  render() {
    return (
      <div className="main__form">
        <p>
          <span className="active">•</span>
          <span class="">•</span>
          <span class="">•</span>
        </p>

        <br />

        <Card>
          <h1 className="main__title">Formulario de registro</h1>

          <form className="main__form">
            <div>
              <label>
                Nombre completo:
                <input className="input" type="text" name="name" />
              </label>
            </div>

            <br />
            <div>
              <label>
                Correo electrónico:
                <input className="input" type="text" name="name" />
              </label>
            </div>
            <br />
            <input className="main__boton" type="submit" value="Validar" />
          </form>
        </Card>
      </div>
    );
  }
}
