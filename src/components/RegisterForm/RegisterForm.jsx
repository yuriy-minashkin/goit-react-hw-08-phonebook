import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const submitHandler = event => {
    event.preventDefault();
    const { elements } = event.currentTarget;

    const name = elements.name.value;
    const email = elements.email.value;
    const password = elements.password.value;
    const newUser = { name, email, password };

    dispatch(register(newUser))
      
    //   ? dispatch(register(newUser))
    //   : alert('Enter your Name.');

    // password.length > 6
    //   ? dispatch(register(newUser))
    //   : alert('Password must be at least 7 digits in length.');
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
        <input className={css.input} name="password" type="password"></input>
      </label>

      <button className={css.button} type="submit">
        Register now
      </button>
    </form>
  );
};

export default RegisterForm;
