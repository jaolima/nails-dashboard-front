import React, { Fragment } from "react";
import Breadcrumb from "./common/breadcrumb";
import { Navigation, Box } from "react-feather";
import CountUp from "react-countup";

import { Card, CardBody, Col, Container, Media, Row } from "reactstrap";

const Dashboard = () => {
 
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
                      $ <CountUp className="counter" end={2} />
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
