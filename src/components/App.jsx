import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute, PublickRoute } from 'components/Navigation';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import css from './App.module.css';

const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Home = lazy(() => import('pages/Home/Home'));

const App = () => {
  const dispatch = useDispatch();

  const refresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return refresh ? ( <div className={css.loader}>Loading...</div>) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<Contacts />} />}
        />
        <Route
          path="/login"
          element={<PublickRoute component={<Login />} />}
        />
        <Route
          path="/register"
          element={<PublickRoute component={<Register />} />}
        />
      </Route>
    </Routes>
  );
};

export { App };