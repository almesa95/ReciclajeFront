import React from "react";
import imagen from "../images/reciclajeimagen_4.jpg";
export const Recicle = () => {
  return (
    <>
      <div className="container-fluid bg-recicly">
        <div className="container">
          <div class="row pt-md-5">
            <h2 class="mb-4 fw-bold text-center">Conocimientos de Reciclaje</h2>
          </div>
          <div class="row d-flex no-gutters">
            <div class="col-md-5 d-none d-md-block ">
              <div class="img  d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0 ">
                <img
                  className=" img-fluid vh-100 mb-5 pb-5 "
                  src={imagen}
                ></img>
              </div>
            </div>
            <div class="col-md-7 ">
              <div class="row ">
                <div class="col-md-6 col-12  mb-1 border rounded b- p-3 bg-white">
                  <div class="text-center pl-3">
                    <h4>Qué hace un camión de reciclaje</h4>
                    <img
                      className="w-100"
                      src="https://images-na.ssl-images-amazon.com/images/I/815mkJ2jWqL._AC_SX425_.jpg"
                    />
                    <p className="colorText w-100 pt-2">
                      Es un vehículo diseñado para recoger la basura que los
                      ciudadanos separan y tiran en los contenedores, y
                      transportarla a plantas de reciclaje o vertederos.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-12  mb-1 border rounded b- p-3 bg-white">
                  <div class="text-center pl-3">
                    <h4>Que significa ECO</h4>
                    <img
                      className="w-100"
                      src="https://2.bp.blogspot.com/-5QWOVeEXFok/Vv7IfN75y_I/AAAAAAAAA54/K8_oktuIdmI69w0I-Rcj3b72D-fVpgs0w/s1600/bigstock_Eco_Friendly_Icon_13554686-1024x682.jpg"
                    />
                    <p className="colorText w-100 pt-2">
                      Eco es un medio de comunicación de carácter divulgativo y
                      veraz. Creado con el firme propósito de cuidar y procurar
                      la conservación del medio ambiente, transmitiendo
                      conocimientos que ayuden al lector a poder formar parte de
                      esta conciencia ambiental.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-12   border rounded mb-1 p-3 bg-white">
                  <div class="text-center pl-3">
                    <h4>Centros de Reciclaje</h4>
                    <img
                      className="w-100"
                      src="https://images.squarespace-cdn.com/content/v1/58597a19e58c62ba7fa48bf9/1566937278737-D7SQX9NGJH375JUUWZ4H/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/1-3.jpg?format=2500w"
                    />
                    <p className="colorText w-100 pt-2">
                      Tiene como propósito brindar soluciones integrales a la
                      industria y centros de acopio para la compra y el manejo
                      de acero, chatarra, metales y otros residuos industriales
                      hasta el destino final más apropiado, con un trato
                      profesional y un servicio efectivo.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-12   border rounded mb-1 p-3 bg-white">
                  <div class="text-center pl-3">
                    <h4>Incentivos para reciclar</h4>
                    <img
                      className="w-100"
                      src="https://img.microsiervos.com/eco/envirobank.jpg"
                    />
                    <p className="colorText w-100 pt-2">
                      Para las personas con conciencia ecológica, donde además
                      en algunos puedes recibir beneficios, como dinero$$, de
                      acuerdo al peso de los materiales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
