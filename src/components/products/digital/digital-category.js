import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import data from "../../../assets/data/digital-category";
import Datatable from "../../common/datatable";
// import Modal from "react-responsive-modal";
import {Modal, Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

const Digital_category = () => {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => {
		setOpen(true);
	};

	const onCloseModal = () => {
		setOpen(false);
	};
	return (
		<Fragment>
			<Breadcrumb title="Category" parent="Digital" />
			{/* <!-- Container-fluid starts--> */}
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Digital Category</h5>
							</CardHeader>
							<CardBody>
								<div className="btn-popup pull-right">
									<Button
										type="button"
										color="secondary"
										onClick={onOpenModal}
										data-toggle="modal"
										data-original-title="test"
										data-target="#exampleModal"
									>
										Add Category
									</Button>
									<Modal isOpen={open} toggle={onCloseModal}>
										<ModalHeader toggle={onCloseModal}>
											<h5
												className="modal-title f-w-600"
												id="exampleModalLabel2"
											>
												Add Digital Product
											</h5>
										</ModalHeader>
										<ModalBody>
											<Form>
												<FormGroup>
													<Label
														htmlFor="recipient-name"
														className="col-form-label"
													>
														Name :
													</Label>
													<Input type="text" className="form-control" />
												</FormGroup>
												<FormGroup>
													<Label
														htmlFor="message-text"
														className="col-form-label"
													>
														Category Image :
													</Label>
													<Input
														className="form-control"
														id="validationCustom02"
														type="file"
													/>
												</FormGroup>
											</Form>
										</ModalBody>
										<ModalFooter>
											<Button
												type="button"
												color="primary"
												onClick={onCloseModal}
											>
												Save
											</Button>
											<Button
												type="button"
												color="secondary"
												onClick={onCloseModal}
											>
												Close
											</Button>
										</ModalFooter>
									</Modal>
								</div>
								<div className="clearfix"></div>
								<div id="basicScenario" className="product-physical">
									<Datatable
										multiSelectOption={false}
										myData={data}
										pageSize={5}
										pagination={false}
										class="-striped -highlight"
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
			{/* <!-- Container-fluid Ends--> */}
		</Fragment>
	);
};

export default Digital_category;
