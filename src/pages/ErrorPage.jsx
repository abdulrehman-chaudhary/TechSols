import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>ERROR!</h1>
      <p>Cant load the page..............</p>
      {error && <p></p>}
      {error.data}
      <NavLink to={"/"}>
        <button> ERROR </button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
