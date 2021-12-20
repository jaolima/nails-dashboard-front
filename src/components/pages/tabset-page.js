import React, { Fragment } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import CKEditors from "react-ckeditor-component";
import { Button, Form, Input, Label } from "reactstrap";

const TabsetPage = ({ onChange, onBlur, afterPaste }) => {
	return (
		<Fragment>
			<div>
				<Tabs>
					<TabList className="nav nav-tabs tab-coupon">
						<Tab className="nav-link">General</Tab>
						<Tab className="nav-link">SEO</Tab>
					</TabList>

					<TabPanel>
						<Form className="needs-validation">
							<h4>General</h4>
							<div className="form-group row">
								<Label className="col-xl-3 col-md-4">
									<span>*</span> Name
								</Label>
								<Input
									className="form-control col-xl-8 col-md-7"
									id="validationCustom0"
									type="text"
								/>
							</div>
							<div className="form-group row editor-label">
								<Label className="col-xl-3 col-md-4">
									<span>*</span> Description
								</Label>
								<div className="col-xl-8 col-md-7 editor-space">
									<CKEditors
										activeclassName="p10"
										events={{
											blur: onBlur,
											afterPaste: afterPaste,
											change: onChange,
										}}
									/>
								</div>
							</div>
							<div className="form-group row">
								<Label className="col-xl-3 col-md-4">Status</Label>
								<div className="col-xl-8 col-md-7 checkbox-space">
									<Label className="d-block">
										<Input
											className="checkbox_animated"
											id="chk-ani1"
											type="checkbox"
										/>
										Enable the Coupon
									</Label>
								</div>
							</div>
						</Form>
					</TabPanel>
					<TabPanel>
						<Form className="needs-validation">
							<h4>SEO</h4>
							<div className="form-group row">
								<Label className="col-xl-3 col-md-4">Meta Title</Label>
								<Input
									className="form-control col-xl-8 col-md-7"
									id="validationCustom2"
									type="text"
								/>
							</div>
							<div className="form-group row editor-label">
								<Label className="col-xl-3 col-md-4">Meta Description</Label>
								<textarea rows="4" className="col-xl-8 col-md-7"></textarea>
							</div>
						</Form>
					</TabPanel>
				</Tabs>
				<div className="pull-right">
					<Button type="button" color="primary">
						Save
					</Button>
				</div>
			</div>
		</Fragment>
	);
};

export default TabsetPage;
