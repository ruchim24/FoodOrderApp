import React from "react";
import { useRouteError } from "react-router-dom";
import { ERROR_URL } from "../utils/constants";

const Error = () => {
    const error = useRouteError();
    return(
        <div className="error">
            <h1>Oops!!!</h1>
            <h2>Something went wrong</h2>
            <h2>{error.status}:{error.statusText}</h2>
            <img src={ERROR_URL} alt="error_img" />
        </div>
    )
}

export default Error;