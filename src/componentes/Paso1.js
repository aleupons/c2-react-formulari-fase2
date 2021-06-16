import PropTypes from "prop-types";
import { useState } from "react";
import { useFormulario } from "../hooks/useFormulario";

export const Paso1 = (props) => {
  const { datosPersonales, avanzaPaso, setDatosPersonales } = props;
  const {
    datos: { nombre, apellidos, fechaNacimiento, email },
    setDato,
    datos,
  } = useFormulario(datosPersonales);
  const enviaPaso = (e) => {
    e.preventDefault();
    setDatosPersonales({ nombre, apellidos, fechaNacimiento, email });
    avanzaPaso();
  };
  const [anyos, setAnyos] = useState(0);
  const calcularEdad = (fechaNacimiento) => {
    const fecha = new Date(Date.now());
    const diferencia = new Date(fecha.getTime() - Date.parse(fechaNacimiento));
    return Math.abs(diferencia.getFullYear() - 1970);
  };
  return (
    <>
      <h2>Paso 1: Datos personales</h2>
      <form noValidate onSubmit={enviaPaso}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={setDato}
            className="form-control"
            id="nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            value={apellidos}
            onChange={setDato}
            id="apellidos"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
          <input
            type="date"
            value={fechaNacimiento}
            onChange={(e) => {
              setDato(e);
              setAnyos(calcularEdad(fechaNacimiento)); // S'ha de clicar 2 cops perquè canviï l'edat
            }}
            id="fechaNacimiento"
            className="form-control"
          />
          <span>Edad: {anyos} años</span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={setDato}
            id="email"
            className="form-control"
          />
        </div>
        <button
          type="submit"
          className="btn btn-info"
          disabled={Object.values(datos).some(
            (prop) => prop === null || prop === ""
          )}
        >
          Siguiente
        </button>
      </form>
    </>
  );
};

Paso1.propTypes = {
  datosPersonales: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    fechaNacimiento: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  avanzaPaso: PropTypes.func.isRequired,
  setDatosPersonales: PropTypes.func.isRequired,
};
