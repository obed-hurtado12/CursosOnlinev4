import { useForm } from "react-hook-form";
import React, { Component } from "react";
import Card from "components/Card/Card";
import "./form.css";
import { useHistory } from "react-router-dom";

export default class Datos extends Component {
  render() {
    return (
      <div className="main__form">
        <p>
          <span class="">•</span>
          <span class="">•</span>
          <span className="active">•</span>
        </p>

        <br />

        <Card>
          <h1 className="main__title">
            Gracias por preferir nuestros servicios
          </h1>
          <p>
            Su registro ha sido exitoso, por medio del correo electronico
            llegará una confirmacion del mismo,
            <br></br> Si no ha sido usted favor de hacer caso omiso al mismo{" "}
          </p>
          <br></br>
          <p>
            <input
              type="checkbox"
              name="lang"
              value="esta es una casilla de verificacion"
            />
            <label for="lang">
              Desea recibir Notificaciones sobre nuestros nuevos cursos y
              promociones?
            </label>
          </p>
          <a href="#" className="main__boton">
            Finalizar
          </a>
        </Card>
      </div>
    );
  }
}
