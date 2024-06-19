import React from "react";
import Navbar from "../components/Navbar";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imageOne from "../assets/imgs/0a6cbfa32f908f7209a5053b0b9f1966.jpg";
import imageTwo from "../assets/imgs/2db53c8d739a786753482cfe7233e661.jpg";
import imageTree from "../assets/imgs/f83dc877e65528f56070180da937a940.jpg";
import imageFour from "../assets/imgs/824afbd7df7a35bb3aabcb14b6f639dd.jpg";
import Carousel from "react-bootstrap/Carousel";

const Menu = () => {
  return (
    <div className="h-screen bg-black ">
      <Navbar />

      <Carousel className=" py-[50px] ">
        <Carousel.Item >
          <Container className=" mt-[150px]">
            <Row>
              <Col>
                {" "}
                <Card style={{ width: "16rem" }} className=" rounded-3xl">
                  <Card.Img
                    variant="top"
                    src={imageOne}
                    className="w-[260px] h-[260px] object-cover  rounded-3xl p-2"
                  />
                  <Card.Body>
                    <Card.Title>Lungo Coffee</Card.Title>
                    <Card.Text>an aspesso coffee drink</Card.Text>
                    <div className=" flex justify-around mt-4">
                      <Card.Text>RS.199</Card.Text>
                      <button className=" bg-stone-800 text-white p-2 rounded-xl ">
                        Order Now
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                {" "}
                <Card style={{ width: "16rem" }} className=" rounded-3xl">
                  <Card.Img
                    variant="top"
                    src={imageTwo}
                    className="w-[260px] h-[260px] object-cover  rounded-3xl p-2"
                  />
                  <Card.Body>
                    <Card.Title>Lungo Coffee</Card.Title>
                    <Card.Text>an aspesso coffee drink</Card.Text>
                    <div className=" flex justify-around mt-4">
                      <Card.Text>RS.199</Card.Text>
                      <button className=" bg-stone-800 text-white p-2 rounded-xl ">
                        Order Now
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                {" "}
                <Card style={{ width: "16rem" }} className=" rounded-3xl">
                  <Card.Img
                    variant="top"
                    src={imageTree}
                    className="w-[260px] h-[260px] object-cover  rounded-3xl p-2"
                  />
                  <Card.Body>
                    <Card.Title>Lungo Coffee</Card.Title>
                    <Card.Text>an aspesso coffee drink</Card.Text>
                    <div className=" flex justify-around mt-4">
                      <Card.Text>RS.199</Card.Text>
                      <button className=" bg-stone-800 text-white p-2 rounded-xl ">
                        Order Now
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                {" "}
                <Card style={{ width: "16rem" }} className=" rounded-3xl">
                  <Card.Img
                    variant="top"
                    src={imageFour}
                    className="w-[260px] h-[260px] object-cover  rounded-3xl p-2"
                  />
                  <Card.Body>
                    <Card.Title>Lungo Coffee</Card.Title>
                    <Card.Text>an aspesso coffee drink</Card.Text>
                    <div className=" flex justify-around mt-4">
                      <Card.Text>RS.199</Card.Text>
                      <button className=" bg-stone-800 text-white p-2 rounded-xl ">
                        Order Now
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        
        <Carousel.Item>
          <Container className="mt-5">
            <Row>
              <Col>
                {" "}
                <Card style={{ width: "16rem" }} className=" rounded-3xl">
                  <Card.Img
                    variant="top"
                    src={imageOne}
                    className="w-[260px] h-[260px] object-cover  rounded-3xl p-2"
                  />
                  <Card.Body>
                    <Card.Title>Lungo Coffee</Card.Title>
                    <Card.Text>an aspesso coffee drink</Card.Text>
                    <div className=" flex justify-around mt-4">
                      <Card.Text>RS.199</Card.Text>
                      <button className=" bg-stone-800 text-white p-2 rounded-xl ">
                        Order Now
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                {" "}
                <Card style={{ width: "16rem" }} className=" rounded-3xl">
                  <Card.Img
                    variant="top"
                    src={imageTwo}
                    className="w-[260px] h-[260px] object-cover  rounded-3xl p-2"
                  />
                  <Card.Body>
                    <Card.Title>Lungo Coffee</Card.Title>
                    <Card.Text>an aspesso coffee drink</Card.Text>
                    <div className=" flex justify-around mt-4">
                      <Card.Text>RS.199</Card.Text>
                      <button className=" bg-stone-800 text-white p-2 rounded-xl ">
                        Order Now
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                {" "}
                <Card style={{ width: "16rem" }} className=" rounded-3xl">
                  <Card.Img
                    variant="top"
                    src={imageTree}
                    className="w-[260px] h-[260px] object-cover  rounded-3xl p-2"
                  />
                  <Card.Body>
                    <Card.Title>Lungo Coffee</Card.Title>
                    <Card.Text>an aspesso coffee drink</Card.Text>
                    <div className=" flex justify-around mt-4">
                      <Card.Text>RS.199</Card.Text>
                      <button className=" bg-stone-800 text-white p-2 rounded-xl ">
                        Order Now
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                {" "}
                <Card style={{ width: "16rem" }} className=" rounded-3xl">
                  <Card.Img
                    variant="top"
                    src={imageFour}
                    className="w-[260px] h-[260px] object-cover  rounded-3xl p-2"
                  />
                  <Card.Body>
                    <Card.Title>Lungo Coffee</Card.Title>
                    <Card.Text>an aspesso coffee drink</Card.Text>
                    <div className=" flex justify-around mt-4">
                      <Card.Text>RS.199</Card.Text>
                      <button className=" bg-stone-800 text-white p-2 rounded-xl ">
                        Order Now
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Menu;
