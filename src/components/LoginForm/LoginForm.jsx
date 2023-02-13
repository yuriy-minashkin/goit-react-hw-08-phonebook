import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const submitHandler = event => {
    event.preventDefault();
    const { elements } = event.currentTarget;

    const email = elements.email.value;
    const password = elements.password.value;
    const user = { email, password };

    dispatch(logIn(user));

    event.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={submitHandler}>
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
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
