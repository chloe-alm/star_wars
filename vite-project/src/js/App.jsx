import React from "react";
import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

//auth
import { RequireAuth } from "./features/auth/requireAuth";
import { useIsAuth } from "./hooks/useIsAuth";

//Public
import { LoginPage } from "./features/login/loginPage";
import { UsersManager } from "./features/users/usersManager";
import { RegisterPage } from "./features/register/RegisterPage";

//Protected
import { PeopleManager } from "./features/people/PeopleManager";
import { StarshipsManager } from "./features/starships/StarshipsManager";

import "../css/App.css";
import { Layout } from "./features/layout/Layout";

function App() {
  const isInitialized = useSelector((state) => state.auth.isInitialized);

  useIsAuth();

  if (!isInitialized) return <p>App is Loading</p>;

  return (
    <div className="App">
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <RequireAuth>
                <UsersManager />
              </RequireAuth>
            }
          />
          <Route
            path="/people"
            element={
              <RequireAuth>
                <PeopleManager />
              </RequireAuth>
            }
          />
          <Route
            path="/starships"
            element={
              <RequireAuth>
                <StarshipsManager />
              </RequireAuth>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
