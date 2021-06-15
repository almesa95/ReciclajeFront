import React, { Fragment } from "react";
import { Link } from "react-router-dom";
export const Datos = ({ datos }) => {
  let { titulo, descripcion, uno, dos, tres, cuatro } = datos;

  return (
    <Fragment>
      <div className="card text-center mb-2 ">
        <div className="card-body ">
          <h2 className="card-title text-success pb-2 fw-bold">{titulo}</h2>
          <p className="card-text colorText">{descripcion}</p>
          <p className="card-text colorText">{uno}</p>
          <p className="card-text colorText">{dos}</p>
          <p className="card-text colorText">{tres}</p>
          <p className="card-text colorText">{cuatro}</p>
        </div>
      </div>
    </Fragment>
  );
};
