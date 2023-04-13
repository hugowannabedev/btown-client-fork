import React, { useState } from "react";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn] = useState(false);
  const [isLoading] = useState(true);
  const [user] = useState(null);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
