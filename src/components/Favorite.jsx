import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";



const fav = JSON.parse(localStorage.getItem("favorite"));
console.log(fav);

function Fav() {
  const [data, setDate] = useState("");

  useEffect(() => {
    setDate("test");
  }, []);
  const imgs = [
    "https://source.unsplash.com/collection/786665",
    "https://source.unsplash.com/collection/2483198",
    "https://source.unsplash.com/collection/hloHUoJHhrs",
    "https://source.unsplash.com/collection/3688141",
    "https://source.unsplash.com/collection/1290014",
    "https://source.unsplash.com/collection/3586578",
    "https://source.unsplash.com/collection/3763735",
    "https://source.unsplash.com/collection/AoECtaFaZC0",
    "https://source.unsplash.com/collection/839925",
  ]
  return (
    <>
      {/* <h>Hello</h/1> */}
      <Row xs={1} md={3} className="g-4">
        {fav?.map((e , index) => {
          return (
            <div className="container d-flex justify-content-center" >
              <div className="col-md-10 mt-5">
                <Col>
                  <Card border="success">

                          <Card.Img
                            variant="top"
                            src={imgs[index]}
                            style={{height:"25vh"}}
                          />
                
                    <Card.Body>
                      <Card.Title className="text-center">{e}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            </div>
          );
        })}
      </Row>
    </>
  );
}
export default Fav;
