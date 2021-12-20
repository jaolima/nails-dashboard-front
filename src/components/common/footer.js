import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<Container fluid={true}>
					<Row>
						<Col md="6" className="footer-copyright">
						
						</Col>
						<Col md="6">
							<p className="pull-right mb-0">
								Hand crafted & made with<i className="fa fa-heart"> by João Lima</i>
							</p>
						</Col>
					</Row>
				</Container>
			</footer>
		</div>
	);
};

export default Footer;
