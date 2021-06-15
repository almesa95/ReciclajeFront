import React, { useEffect, useState } from "react";
import { Datos } from "./Datos";

export const About = () => {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const fetchSearch = async () => {
      const urlRoot = `http://localhost:4000`;
      const res = await fetch(urlRoot);
      const result = await res.json();
      setDatos(result);
      console.log(result);
    };
    fetchSearch();
  }, []);
  return (
    <div>
      <div className="container bg-recicly rounded mt-5">
        <div className="row">
          <div className="col-12  pt-1">
            <h2 className="text-center fw-bold py-3">Tips para reciclar</h2>
          </div>
        </div>
        <div className="row">
          {datos.map((dato) => {
            // console.log(news.titulo);
            return (
              <>
                <div className="col-12 col-md-6 ">
                  <Datos datos={dato} key={dato.id} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
