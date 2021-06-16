import PropTypes from "prop-types";
import { useState } from "react";
import { useFormulario } from "../hooks/useFormulario";

export const Paso3 = (props) => {
  const {
    datosAcceso,
    avanzaPaso,
    retrocedePaso,
    setDatosAcceso,
    datosRegistro,
    compararDatos,
  } = props;
  const {
    datos: { username, password, recordarPassword },
    setDato,
    datos,
  } = useFormulario(datosAcceso);
  const [ocultar, setOcultar] = useState(true);
  const enviaPaso = (e) => {
    e.preventDefault();
    if (compararDatos(datosRegistro, datos)) {
      setDatosAcceso({ username, password, recordarPassword });
      avanzaPaso();
    } else {
      setOcultar(false);
    }
  };
  return (
    <>
      <h2>Paso 3: Login</h2>
      <form noValidate onSubmit={enviaPaso}>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            value={username}
            onChange={setDato}
            className="form-control"
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={setDato}
            id="password"
            className="form-control"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            id="recordarPassword"
            className="form-check-input"
            checked={recordarPassword}
            onChange={setDato}
          />
          <label htmlFor="recordarPassword" className="form-check-label">
            Recordar contraseña
          </label>
        </div>
        <p className="alert alert-danger" hidden={ocultar}>
          El nombre de usuario o contraseña no estan en nuestra base de datos
        </p>
        <button className="btn btn-info" onClick={retrocedePaso}>
          Anterior
        </button>
        <button
          className="btn btn-info"
          type="submit"
          disabled={Object.values(datos).some(
            (prop) => prop === null || prop === ""
          )}
        >
          Acceder
        </button>
      </form>
    </>
  );
};

Paso3.propTypes = {
  avanzaPaso: PropTypes.func.isRequired,
  retrocedePaso: PropTypes.func.isRequired,
  datosAcceso: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    recordarPassword: PropTypes.bool.isRequired,
  }).isRequired,
  setDatosAcceso: PropTypes.func.isRequired,
  compararDatos: PropTypes.func.isRequired,
  datosRegistro: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    repitePassword: PropTypes.string.isRequired,
  }).isRequired,
};
