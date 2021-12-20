import React, { Fragment } from "react";
import { ShoppingBag, Download, AlertCircle } from "react-feather";
import { Media } from "reactstrap";

const Notification = () => {
	return (
		<Fragment>
			<ul className="notification-dropdown onhover-show-div p-0">
				<li>
					Notification{" "}
					<span className="badge badge-pill badge-primary pull-right">1</span>
				</li>
	
				<li className="txt-dark">
					<a href="#javaScript">All</a> notification
				</li>
			</ul>
		</Fragment>
	);
};

export default Notification;
