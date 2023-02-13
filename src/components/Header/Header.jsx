import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUserName } from 'redux/auth/selectors';
import css from './Header.module.css';

export const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <NavLink className={css.button} to="/">
        Home
      </NavLink>
      {!isLoggedIn ? (
        <div className={css.login}>
          <NavLink className={css.button} to="/register">
            Registration
          </NavLink>
          <NavLink className={css.button} to="/login">
            LogIn
          </NavLink>
        </div>
      ) : (
          <div className={css.nav}>
            <NavLink className={css.button} to="/contacts">MyContacts</NavLink>
          <div className={css.logOutWrapper}>
            <h3>Hi! {userName}</h3>
            <button
              className={css.button}
              type="button"
              onClick={() => dispatch(logOut())}
            >
              Log Out
            </button>
          </div>
          </div>
      )}
    </header>
  );
};
