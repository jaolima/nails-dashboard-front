import React, { Fragment } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User, Unlock } from "react-feather";
import { withRouter, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const LoginTabset = () => {
	const history = useHistory();

	const clickActive = (event) => {
		document.querySelector(".nav-link").classList.remove("show");
		event.target.classList.add("show");
	};

	const routeChange = () => {
		history.push(`${process.env.PUBLIC_URL}/dashboard`);
	};
	return (
		<div>
			<Fragment>
				<Tabs>
					<TabList className="nav nav-tabs tab-coupon">
						<Tab className="nav-link" onClick={(e) => clickActive(e)}>
							<User />
							Login
						</Tab>
						<Tab className="nav-link" onClick={(e) => clickActive(e)}>
							<Unlock />
							Register
						</Tab>
					</TabList>

					<TabPanel>
						<Form className="form-horizontal auth-form">
							<FormGroup>
								<Input
									required=""
									name="login[username]"
									type="email"
									className="form-control"
									placeholder="Username"
									id="exampleInputEmail1"
								/>
							</FormGroup>
							<FormGroup>
								<Input
									required=""
									name="login[password]"
									type="password"
									className="form-control"
									placeholder="Password"
								/>
							</FormGroup>
							<div className="form-terms">
								<div className="custom-control custom-checkbox mr-sm-2">
									<Input
										type="checkbox"
										className="custom-control-input"
										id="customControlAutosizing"
									/>
									<Label className="d-block">
										<Input
											className="checkbox_animated"
											id="chk-ani2"
											type="checkbox"
										/>
										Reminder Me{" "}
										<span className="pull-right">
											{" "}
											<a href="/#" className="btn btn-default forgot-pass p-0">
												lost your password
											</a>
										</span>
									</Label>
								</div>
							</div>
							<div className="form-button">
								<Button
									color="primary"
									type="submit"
									onClick={() => routeChange()}
								>
									Login
								</Button>
							</div>
							<div className="form-footer">
								<span>Or Login up with social platforms</span>
								<ul className="social">
									<li>
										<a href="/#">
											<i className="icon-facebook"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-twitter-alt"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-instagram"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-pinterest-alt"></i>
										</a>
									</li>
								</ul>
							</div>
						</Form>
					</TabPanel>
					<TabPanel>
						<Form className="form-horizontal auth-form">
							<FormGroup>
								<Input
									required=""
									name="login[username]"
									type="email"
									className="form-control"
									placeholder="Username"
									id="exampleInputEmail12"
								/>
							</FormGroup>
							<FormGroup>
								<Input
									required=""
									name="login[password]"
									type="password"
									className="form-control"
									placeholder="Password"
								/>
							</FormGroup>
							<FormGroup>
								<Input
									required=""
									name="login[password]"
									type="password"
									className="form-control"
									placeholder="Confirm Password"
								/>
							</FormGroup>
							<div className="form-terms">
								<div className="custom-control custom-checkbox mr-sm-2">
									<Input
										type="checkbox"
										className="custom-control-input"
										id="customControlAutosizing"
									/>
									<Label className="d-block">
										<Input
											className="checkbox_animated"
											id="chk-ani2"
											type="checkbox"
										/>
										I agree all statements in{" "}
										<span>
											<a href="/#">Terms &amp; Conditions</a>
										</span>
									</Label>
								</div>
							</div>
							<div className="form-button">
								<Button
									color="primary"
									type="submit"
									onClick={() => routeChange()}
								>
									Register
								</Button>
							</div>
							<div className="form-footer">
								<span>Or Sign up with social platforms</span>
								<ul className="social">
									<li>
										<a href="/#">
											<i className="icon-facebook"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-twitter-alt"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-instagram"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-pinterest-alt"></i>
										</a>
									</li>
								</ul>
							</div>
						</Form>
					</TabPanel>
				</Tabs>
			</Fragment>
		</div>
	);
};

export default withRouter(LoginTabset);
