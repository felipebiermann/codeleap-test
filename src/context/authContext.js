import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({ token: "", username: {} });

function AuthContextComponent(props) {
  const [loggedInUser, setLoggedInUser] = useState({ token: "", username: {} });

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");

    const parsedStoredUser = JSON.parse(storedUser || '""');
    console.log(parsedStoredUser);

    if (parsedStoredUser.token) {
      setLoggedInUser(parsedStoredUser);
    } else {
      setLoggedInUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextComponent };
