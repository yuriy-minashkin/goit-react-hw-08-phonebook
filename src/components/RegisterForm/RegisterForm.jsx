import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const [nameInput, setNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const dispatch = useDispatch();

  const submitHandler = event => {
    event.preventDefault();
    const { elements } = event.currentTarget;

    const name = elements.name.value;
    const email = elements.email.value;
    const password = elements.password.value;
    const newUser = { name, email, password };

    dispatch(register(newUser))
  };

  return (
    <form className={css.form} onSubmit={submitHandler}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          name="name"
          type="text"
          autoComplete="on"
          value={nameInput}
          onChange={event => setNameInput(event.target.value)}
        ></input>
      </label>
      <label className={css.label}>
        Email
        <input
          className={css.input}
          name="email"
          type="email"
          autoComplete="on"
        ></input>
      </label>

      <label className={css.label}>
        Password
        <input
          className={css.input}
          name="password"
          type="password"
          value={passwordInput}
          onChange={event => setPasswordInput(event.target.value)}
        ></input>
      </label>

      <button disabled={!nameInput || passwordInput.length < 7} className={css.button} type="submit">
        Register now
      </button>
    </form>
  );
};

export default RegisterForm;
