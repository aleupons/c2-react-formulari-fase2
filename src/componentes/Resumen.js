import PropTypes from "prop-types";

export const Resumen = (props) => {
  const {
    retrocedePaso,
    datosPersonales: { nombre, apellidos, fechaNacimiento, email },
    datosRegistro: { username, password },
  } = props;
  return (
    <>
      <h2>Resumen</h2>
      <ul className="list-unstyled">
        <li>Nombre: {nombre}</li>
        <li>Apellidos: {apellidos}</li>
        <li>Fecha de nacimiento: {fechaNacimiento}</li>
        <li>Correo electrónico: {email}</li>
        <li>Nombre de usuario: {username}</li>
        <li>Contraseña: {password}</li>
      </ul>
      <button className="btn btn-info" onClick={retrocedePaso}>
        Anterior
      </button>
    </>
  );
};

Resumen.propTypes = {
  retrocedePaso: PropTypes.func.isRequired,
  datosPersonales: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    fechaNacimiento: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  datosRegistro: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    repitePassword: PropTypes.string.isRequired,
  }).isRequired,
};
