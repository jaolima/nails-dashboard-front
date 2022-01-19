import React, { Fragment } from "react";
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
