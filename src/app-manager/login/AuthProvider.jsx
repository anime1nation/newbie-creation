import { createContext, useContext, useReducer } from "react";
import initialState from "./initialState";
import produce from "./reducer";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export const useAuthDispatch = () => useContext(AuthDispatchContext);
export const useAuth = () => useContext(AuthStateContext);

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(produce, initialState);

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={state}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
}
