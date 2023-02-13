const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { selectIsLoggedIn } = require('redux/auth/selectors');

export const PrivateRoute = ({ component: Component }) => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return !loggedIn ? <Navigate to="/login" /> : Component;
};

export const PublickRoute = ({ component: Component }) => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return loggedIn ? <Navigate to="/contacts" /> : Component;
};
