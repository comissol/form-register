import { useState } from "react";

export default function Register() {

const initialState = {
    email: '',
    contraseña: '',
    confirmarContraseña: '',
  };

const [formData, setFormData] = useState(initialState);
const [error, setError] = useState ('');

const handleChange = (event) => {
    // console.log('Elemento que causa el evento', event.target.name);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
const handleSubmit = (event) => {
    event.preventDefault();
    
    if (
      formData.email.trim() === '' ||
      formData.contraseña.trim() === '' ||
      formData.confirmarContraseña.trim() === ''
    ) {
      alert('Por favor complete todos los campos del formulario.');
      return;
   }
    
    if (formData.contraseña !== formData.confirmarContraseña) {
    setError("Las contraseñas no coinciden");
    return;
   } 
    alert('Los datos son correctos')
    console.log("Datos enviados", formData);
};

  return (
    <form 
    className="form-container"
    onSubmit={(event) => handleSubmit(event)}>
       <h2>Registrate aquí</h2>
      <div className="form-group">
        <label htmlFor={'email'}>E-mail</label>
        <input
          type='email'
          name={'email'}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </div>

      <div>
        <label htmlFor={'contraseña'}>Contraseña</label>
        <input
          type='password'
          name={'contraseña'}
          onChange={(event) => handleChange(event)}
        />
      </div>

      <div>
        <label htmlFor={'confirmarContraseña'}>Confirmar contraseña</label>
        <input
          type='password'
          name={'confirmarContraseña'}
          onChange={(event) => handleChange(event)}
        />
      </div>
      {error && <p 
          className="error-message"
          style={{ color: 'red' }}>{error}</p>}
      <div>
        <button type='submit'>Enviar</button>
      </div>
    </form>
  );
}