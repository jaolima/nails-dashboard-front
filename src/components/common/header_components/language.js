import React, { Fragment } from "react";

const Language = () => {
	return (
		<Fragment>
			<ul className="language-dropdown onhover-show-div p-20">
				<li>
					<a href="#javaScript" data-lng="en">
						<i className="flag-icon flag-icon-is"></i> English
					</a>
				</li>
			</ul>
		</Fragment>
	);
};

export default Language;
