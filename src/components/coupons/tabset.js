import React, { Fragment, useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Col, Form, Input, Label, Row } from "reactstrap";

const Tabset = () => {
	const [startDate, setstartDate] = useState(new Date());
	const [endDate, setendDate] = useState(new Date());

	const handleStartDate = (date) => {
		setstartDate(date);
	};

	const handleEndDate = (date) => {
		setendDate(date);
	};

	const clickActive = (event) => {
		document.querySelector(".nav-link").classList.remove("show");
		event.target.classList.add("show");
	};

	return (
		<Fragment>
			<Tabs>
				<TabList className="nav nav-tabs tab-coupon">
					<Tab className="nav-link" onClick={(e) => clickActive(e)}>
						General
					</Tab>
					<Tab className="nav-link" onClick={(e) => clickActive(e)}>
						Restriction
					</Tab>
					<Tab className="nav-link" onClick={(e) => clickActive(e)}>
						Usage
					</Tab>
				</TabList>

				<TabPanel>
					<div className="tab-pane fade active show">
						<Form className="needs-validation" noValidate="">
							<h4>General</h4>
							<Row>
								<Col sm="12">
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">
											<span>*</span> Name
										</Label>
										<Input
											className="form-control col-md-7"
											id="validationCustom0"
											type="text"
											required=""
										/>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">
											<span>*</span> Code
										</Label>
										<Input
											className="form-control col-md-7"
											id="validationCustom1"
											type="text"
											required=""
										/>
										<div className="valid-feedback">
											Please Provide a Valid Coupon Code.
										</div>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">Start Date</Label>
										<DatePicker
											selected={startDate}
											onChange={handleStartDate}
										/>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">End Date</Label>
										<DatePicker
											selected={endDate}
											endDate={endDate}
											onChange={handleEndDate}
										/>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">Free Shipping</Label>
										<div className="col-md-7 checkbox-space">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Allow Free Shipping
											</Label>
										</div>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">Quantity</Label>
										<Input
											className="form-control col-md-7"
											type="number"
											required=""
										/>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">Discount Type</Label>
										<select className="custom-select col-md-7" required="">
											<option value="">--Select--</option>
											<option value="1">Percent</option>
											<option value="2">Fixed</option>
										</select>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">Status</Label>
										<div className="col-md-7 checkbox-space">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Enable the Coupon
											</Label>
										</div>
									</div>
								</Col>
							</Row>
						</Form>
					</div>
				</TabPanel>
				<TabPanel>
					<Form className="needs-validation" noValidate="">
						<h4>Restriction</h4>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Products</Label>
							<Input
								className="form-control col-md-7"
								id="validationCustom3"
								type="text"
								required=""
							/>
							<div className="valid-feedback">
								Please Provide a Product Name.
							</div>
						</div>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Category</Label>
							<select className="custom-select col-md-7" required="">
								<option value="">--Select--</option>
								<option value="1">Electronics</option>
								<option value="2">Clothes</option>
								<option value="2">Shoes</option>
								<option value="2">Digital</option>
							</select>
						</div>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Minimum Spend</Label>
							<Input
								className="form-control col-md-7"
								id="validationCustom4"
								type="number"
							/>
						</div>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Maximum Spend</Label>
							<Input
								className="form-control col-md-7"
								id="validationCustom5"
								type="number"
							/>
						</div>
					</Form>
				</TabPanel>
				<TabPanel>
					<Form className="needs-validation" noValidate="">
						<h4>Usage Limits</h4>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Per Limit</Label>
							<Input
								className="form-control col-md-7"
								id="validationCustom6"
								type="number"
							/>
						</div>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Per Customer</Label>
							<Input
								className="form-control col-md-7"
								id="validationCustom7"
								type="number"
							/>
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

export default Tabset;
