// import { useState } from "react";

// export default function Login() {

// const initialState = {
//     email: '',
//     password: '',
//   };

//   const [formData, setFormData] = useState(initialState);
//   const [password, setPassword] = useState (initialState);
//   const [error, setError]= useState (initialState);
//   const MIN_LENGTH = 6;

//   const handlePassword = (event) => {
//     const newPassword = event.target.value;
//     setPassword(newPassword);
    
//     if (newPassword.length < MIN_LENGTH) {
//       setError(`La contraseña debe tener al menos ${MIN_LENGTH} caracteres.`);
//     } else {
//       setError('');
//     }
//   };

//   const handleChange = (event) => {
//     // console.log('Elemento que causa el evento', event.target.name);
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (
//       formData.email.trim() === '' ||
//       formData.password.trim() === ''
//     ) {
//       alert('Por favor complete todos los campos del formulario.');
//     console.log('los datos a enviar son: ', formData)}
//     if (
//         password.length < MIN_LENGTH) {
//       setError(`La contraseña debe tener al menos ${MIN_LENGTH} caracteres.`);
//       console.log('Validación fallida. No se envía el formulario.');
//       return;} 
// }

//   return (
//     <form onSubmit={(event) => handleSubmit(event)}>
//     <h2>Log in</h2>
//       <div>
//         <label htmlFor={'email'}>E-mail</label>
//         <input
//           type='email'
//           name={'email'}
//           onChange={(event) => {
//             handleChange(event);
//           }}
//         />
//       </div>

//       <div>
//         <label htmlFor={'password'}>Contraseña</label>
//         <input
//           type='password'
//           name={'password'}
//           onChange={(event) => handlePassword(event)}
//           placeholder={`Mínimo ${MIN_LENGTH} caracteres`}
//         />
//       </div>
//       <div>
//          <button type="submit"> Enviar </button>
//       </div>
//     </form>
//   );
// }

import { useState } from "react";

export default function Login() {

  const initialState = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const MIN_LENGTH = 6;

  const handlePassword = (event) => {
    const newPassword = event.target.value;
    
    setPassword(newPassword);
    setFormData({ ...formData, password: newPassword });

    if (newPassword.length < MIN_LENGTH) {
      setError(`La contraseña debe tener al menos ${MIN_LENGTH} caracteres.`);
    } else {
      setError('');
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formData.email.trim() === '' ||
      formData.password.trim() === ''
    ) {
      alert('Por favor complete todos los campos del formulario.');
      return;
    }

    if (password.length < MIN_LENGTH) {
      setError(`La contraseña debe tener al menos ${MIN_LENGTH} caracteres.`);
      return;
    }

    console.log('Datos a enviar:', formData);
  };

  return (
    <form 
      className="form-container"
      onSubmit={handleSubmit}>
      <h2>Log in</h2>

      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          onChange={handlePassword}
          placeholder={`Mínimo ${MIN_LENGTH} caracteres`}
        />
        {error && <p 
              className="error-message"
              style={{color: 'red'}}>{error}</p>}
      </div>

      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}