import React, { Fragment } from "react";

import designer from "../../assets/images/dashboard/designer.jpg";
import TabsetProfile from "./tabset-profile";
import Breadcrumb from "../common/breadcrumb";
import { Card, CardBody, Col, Container, Row, Button } from "reactstrap";


const Profile = () => {
	return (
		<Fragment>
			<Breadcrumb title="Profile" parent="Settings" />
			<Container fluid={true}>
				<Row>
					<Col xl="4">
						<Card>
							<CardBody>
								<div className="profile-details text-center">
									<img
										src={designer}
										alt=""
										className="img-fluid img-90 rounded-circle blur-up lazyloaded"
									/>
									<h5 className="f-w-600 f-16 mb-0">John deo</h5>
									<span>johndeo@gmail.com</span>
									<div className="social">
										<div className="form-group btn-showcase">
											<Button color="btn social-btn btn-fb d-inline-block">
												{" "}
												<i className="fa fa-facebook"></i>
											</Button>
											<Button color="btn social-btn btn-twitter d-inline-block">
												<i className="fa fa-google"></i>
											</Button>
											<Button color="btn social-btn btn-google d-inline-block mr-0">
												<i className="fa fa-twitter"></i>
											</Button>
										</div>
									</div>
								</div>
								<hr />
						
							</CardBody>
						</Card>
					</Col>
					<Col xl="8">
						<Card className="profile-card">
							<CardBody>
								<TabsetProfile />
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Profile;
