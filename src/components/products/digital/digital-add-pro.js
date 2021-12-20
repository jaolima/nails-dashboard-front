import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import CKEditors from "react-ckeditor-component";
import MyDropzone from "../../common/dropzone";
import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Label, Row } from "reactstrap";

const Digital_add_pro = ({ onBlur, onChange, afterPaste }) => {
	const [content] = useState("hello world");

	return (
		<Fragment>
			<Breadcrumb title="Add Products" parent="Digital" />
			<Container fluid={true}>
				<Row className="product-adding">
					<Col xl="6">
						<Card>
							<CardHeader>
								<h5>General</h5>
							</CardHeader>
							<CardBody>
								<div className="digital-add needs-validation">
									<FormGroup>
										<Label className="col-form-label pt-0">
											<span>*</span> Title
										</Label>
										<Input
											className="form-control"
											id="validationCustom01"
											type="text"
											required=""
										/>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label pt-0">
											<span>*</span> SKU
										</Label>
										<Input
											className="form-control"
											id="validationCustom02"
											type="text"
											required=""
										/>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label">
											<span>*</span> Categories
										</Label>
										<select className="custom-select" required="">
											<option value="">--Select--</option>
											<option value="1">eBooks</option>
											<option value="2">Graphic Design</option>
											<option value="3">3D Impact</option>
											<option value="4">Application</option>
											<option value="5">Websites</option>
										</select>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label">Sort Summary</Label>
										<textarea rows="4" cols="12"></textarea>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label">
											<span>*</span> Product Price
										</Label>
										<Input
											className="form-control"
											id="validationCustom02"
											type="text"
											required=""
										/>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label">
											<span>*</span> Status
										</Label>
										<div className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani"
													type="radio"
													name="rdo-ani"
												/>
												Enable
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani1"
													type="radio"
													name="rdo-ani"
												/>
												Disable
											</Label>
										</div>
									</FormGroup>
									<Label className="col-form-label pt-0"> Product Upload</Label>
									<MyDropzone />
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col xl="6">
						<Card>
							<CardHeader>
								<h5>Add Description</h5>
							</CardHeader>
							<CardBody>
								<div className="digital-add needs-validation">
									<FormGroup className=" mb-0">
										<div className="description-sm">
											<CKEditors
												activeclassName="p10"
												content={content}
												events={{
													blur: onBlur,
													afterPaste: afterPaste,
													change: onChange,
												}}
											/>
										</div>
									</FormGroup>
								</div>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<h5>Meta Data</h5>
							</CardHeader>
							<CardBody>
								<div className="digital-add needs-validation">
									<FormGroup>
										<Label className="col-form-label pt-0"> Meta Title</Label>
										<Input
											className="form-control"
											id="validationCustom05"
											type="text"
											required=""
										/>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label">Meta Description</Label>
										<textarea rows="4" cols="12"></textarea>
									</FormGroup>
									<FormGroup className="mb-0">
										<div className="product-buttons text-center">
											<Button type="button" color="primary">
												Add
											</Button>
											<Button type="button" color="light">
												Discard
											</Button>
										</div>
									</FormGroup>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Digital_add_pro;
