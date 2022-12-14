import React, { useEffect } from "react";
import UserService from "../services/user/user.service";

export const AuthContext = React.createContext();

export const AuthContextProvider = function ({ children }) {
  const [Token, setToken] = React.useState(false);

  useEffect(() => {
    if (!Token) {
      async function RefreshToken() {
        const response = await UserService.refreshToken();

        setToken(response.token);
      }

      RefreshToken();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ Token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
