import React, { Fragment } from "react";
import Breadcrumb from "./common/breadcrumb";
import { Navigation, Box } from "react-feather";
import CountUp from "react-countup";
import axios from "axios";
import { Card, CardBody, Col, Container, Media, Row } from "reactstrap";

const Dashboard = () => {

  const [Products, setProducts] = React.useState(0);
  axios({
    method: "get",
    url: `http://65.108.217.99:3333/products`,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => {
      const { data } = res;
      setProducts(data.length)
    })
    .catch((error) => {
      console.log(error);
      console.log("error");
    });



  return (
    <Fragment>
      <Breadcrumb title="Dashboard" parent="Dashboard" />
      <Container fluid={true}>
        <Row>
          <Col xl="3 xl-50" md="6">
            <Card className=" o-hidden widget-cards">
              <CardBody className="bg-warning">
                <Media className="static-top-widget row">
                  <div className="icons-widgets col-4">
                    <div className="align-self-center text-center">
                      <Navigation className="font-warning" />
                    </div>
                  </div>
                  <Media body className="col-8">
                    <span className="m-0">Earnings</span>
                    <h3 className="mb-0">
                      $ <CountUp className="counter" end={0} />
                      <small> This Month</small>
                    </h3>
                  </Media>
                </Media>
              </CardBody>
            </Card>
          </Col>
          <Col xl="3 xl-50" md="6">
            <Card className=" o-hidden  widget-cards">
              <CardBody className="bg-secondary ">
                <Media className="static-top-widget row">
                  <div className="icons-widgets col-4">
                    <div className="align-self-center text-center">
                      <Box className="font-secondary" />
                    </div>
                  </div>
                  <Media body className="col-8">
                    <span className="m-0">Products</span>
                    <h3 className="mb-0">
                      $ <CountUp className="counter" end={Products} />
                      <small> This Month</small>
                    </h3>
                  </Media>
                </Media>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

// javascript:void(0)

export default Dashboard;
