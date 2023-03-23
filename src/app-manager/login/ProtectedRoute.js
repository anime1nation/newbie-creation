import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import AddImage from "../../component/AddImage";



export default function ProtectedRoute({ component: Component, ...rest }) {
    const auth = useAuth();
    function isAuthenticated() {
          if (auth.token) return true;
          return false;
          }
    return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <AddImage/>
        ) : (
          <Navigate
            to={{
              pathname: '/admin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}