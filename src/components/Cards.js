import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import logo1 from "../images/reciclajeimagen_1.jpg";
import logo2 from "../images/reciclajeimagen_3.jpg";
import logo3 from "../images/reciclajeimagen_5.jpg";
export const Cards = () => {
  return (
    <>
      <div className="container mt-4  ">
        <div className="row ">
          <div className="col-12 col-md-4 d-flex justify-content-center pb-3">
            <Card className="cardshover">
              <Card.Img className="h-50" variant="top" src={logo1} />
              <Card.Body className="text-center">
                <Card.Title className=" text-dark fw-bold">
                  Reciclar que significa
                </Card.Title>
                <Card.Text>
                  Reciclar es someter un material usado o un desperdicio a un
                  proceso en el cual se recupera, total o parcialmente, la
                  materia prima o los componentes que fueron utilizados para su
                  elaboración, de modo que puedan volver a ser aprovechados.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center pb-3">
            <Card className="cardshover">
              <Card.Img variant="top" className="h-50" src={logo3} />
              <Card.Body className="text-center">
                <Card.Title className=" text-dark fw-bold">
                  Por que debemos reciclar
                </Card.Title>
                <Card.Text>
                  <p>
                    1. Ahorramos energía y luchamos contra el cambio climáticos
                    del mundo. <p>2. Usamos menos materias primas</p>{" "}
                    3.Fabricamos nuevos productos,
                  </p>
                  <p>4.Preservamos el medio ambiente</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center pb-3">
            <Card className="cardshover">
              <Card.Img variant="top" className="h-50" src={logo2} />
              <Card.Body className="text-center">
                <Card.Title className=" text-dark fw-bold">
                  Campañas de reciclaje
                </Card.Title>
                <Card.Text>
                  <p>
                    1.Se debe realizar una buena comunicación en la zona donde
                    se planea realizar la campaña, hay que utilizar todo tipo de
                    medios como afiches, publicidad, redes sociales, puerta a
                    puerta, entre otros.
                  </p>
                  <p>
                    2.Dar información clara a la hora de difundir la campaña
                    para que todos entiendan el mensaje y como se realizara la
                    misma.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
