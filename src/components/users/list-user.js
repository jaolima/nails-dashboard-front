import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/listUser";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Container } from "reactstrap";

const List_user = () => {
	return (
		<Fragment>
			<Breadcrumb title="User List" parent="Users" />
			<Container fluid={true}>
				<Card>
					<CardHeader>
						<h5>User Details</h5>
					</CardHeader>
					<CardBody>
						<div className="btn-popup pull-right">
							<Link to="/users/create-user" className="btn btn-secondary">
								Create User
							</Link>
						</div>
						<div className="clearfix"></div>
						<div
							id="batchDelete"
							className="category-table user-list order-table coupon-list-delete"
						>
							<Datatable
								multiSelectOption={true}
								myData={data}
								pageSize={10}
								pagination={true}
								class="-striped -highlight"
							/>
						</div>
					</CardBody>
				</Card>
			</Container>
		</Fragment>
	);
};

export default List_user;
