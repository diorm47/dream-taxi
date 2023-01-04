import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "./components/error404/error404";
import Loader from "./components/loader/loader";
import NavBar from "./components/nav-bar/nav-bar";

const MainPage = React.lazy(() => import("./pages/main-page/main-page"));
const TaxiesPage = React.lazy(() => import("./pages/taxies-page/taxies-page"));
const InfoPage = React.lazy(() => import("./pages/info-page/info-page"));

const AuthPage = React.lazy(() => import("./pages/login-auth-page/auth"));
const LoginPage = React.lazy(() => import("./pages/login-auth-page/login"));

function App() {
  return (
    <div className="main_wrapper">
      <NavBar />

      <div className="content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/drivers" element={<TaxiesPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/auth" element={<AuthPage />} />

            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
