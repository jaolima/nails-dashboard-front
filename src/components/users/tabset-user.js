import React, { Fragment } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const TabsetUser = () => {
	return (
		<Fragment>
			<Tabs>
				<TabList className="nav nav-tabs tab-coupon">
					<Tab className="nav-link">Account</Tab>
					<Tab className="nav-link">Permission</Tab>
				</TabList>
				<TabPanel>
					<Form className="needs-validation user-add" noValidate="">
						<h4>Account Details</h4>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> First Name
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom0"
								type="text"
								required=""
							/>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Last Name
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom1"
								type="text"
								required=""
							/>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Email
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom2"
								type="text"
								required=""
							/>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Password
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom3"
								type="password"
								required=""
							/>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Confirm Password
							</Label>
							<Input
								className="form-control col-xl-8 col-md-7"
								id="validationCustom4"
								type="password"
								required=""
							/>
						</FormGroup>
					</Form>
				</TabPanel>
				<TabPanel>
					<Form className="needs-validation user-add" noValidate="">
						<div className="permission-block">
							<div className="attribute-blocks">
								<h5 className="f-w-600 mb-3">Product Related Permission </h5>
								<Row>
									<Col xl="3" sm="4">
										<label>Add Product</label>
									</Col>
									<Col xl="9" sm="8">
										<FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani1"
													type="radio"
													name="rdo-ani"
												/>
												Allow
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani2"
													type="radio"
													name="rdo-ani"
													defaultChecked
												/>
												Deny
											</Label>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xl="3" sm="4">
										<Label>Update Product</Label>
									</Col>
									<Col xl="9" sm="8">
										<FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani3"
													type="radio"
													name="rdo-ani1"
													defaultChecked
												/>
												Allow
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani4"
													type="radio"
													name="rdo-ani1"
												/>
												Deny
											</Label>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xl="3" sm="4">
										<Label>Delete Product</Label>
									</Col>
									<Col xl="9" sm="8">
										<FormGroup className=" m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani5"
													type="radio"
													name="rdo-ani2"
												/>
												Allow
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani6"
													type="radio"
													name="rdo-ani2"
													defaultChecked
												/>
												Deny
											</Label>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xl="3" sm="4">
										<Label className="mb-0 sm-label-radio">
											Apply Discount
										</Label>
									</Col>
									<Col xl="9" sm="8">
										<FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated pb-0">
											<Label className="d-block mb-0">
												<Input
													className="radio_animated"
													id="edo-ani7"
													type="radio"
													name="rdo-ani3"
												/>
												Allow
											</Label>
											<Label className="d-block mb-0">
												<Input
													className="radio_animated"
													id="edo-ani8"
													type="radio"
													name="rdo-ani3"
													defaultChecked
												/>
												Deny
											</Label>
										</FormGroup>
									</Col>
								</Row>
							</div>
							<div className="attribute-blocks">
								<h5 className="f-w-600 mb-3">Category Related Permission </h5>
								<Row>
									<Col xl="3" sm="4">
										<label>Add Category</label>
									</Col>
									<Col xl="9" sm="8">
										<FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani9"
													type="radio"
													name="rdo-ani4"
												/>
												Allow
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani10"
													type="radio"
													name="rdo-ani4"
													defaultChecked
												/>
												Deny
											</Label>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xl="3" sm="4">
										<Label>Update Category</Label>
									</Col>
									<Col xl="9" sm="8">
										<FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani11"
													type="radio"
													name="rdo-ani5"
												/>
												Allow
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani12"
													type="radio"
													name="rdo-ani5"
													defaultChecked
												/>
												Deny
											</Label>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xl="3" sm="4">
										<Label>Delete Category</Label>
									</Col>
									<Col xl="9" sm="8">
										<FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani13"
													type="radio"
													name="rdo-ani6"
												/>
												Allow
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani14"
													type="radio"
													name="rdo-ani6"
													defaultChecked
												/>
												Deny
											</Label>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xl="3" sm="4">
										<Label className="mb-0 sm-label-radio">
											Apply Discount
										</Label>
									</Col>
									<Col xl="9" sm="8">
										<FormGroup className="m-checkbox-inline custom-radio-ml d-flex radio-animated pb-0">
											<Label className="d-block mb-0">
												<Input
													className="radio_animated"
													id="edo-ani15"
													type="radio"
													name="rdo-ani7"
												/>
												Allow
											</Label>
											<Label className="d-block mb-0">
												<Input
													className="radio_animated"
													id="edo-ani16"
													type="radio"
													name="rdo-ani7"
													defaultChecked
												/>
												Deny
											</Label>
										</FormGroup>
									</Col>
								</Row>
							</div>
						</div>
					</Form>
				</TabPanel>
			</Tabs>
			<div className="pull-right">
				<Button type="button" color="primary">
					Save
				</Button>
			</div>
		</Fragment>
	);
};

export default TabsetUser;
