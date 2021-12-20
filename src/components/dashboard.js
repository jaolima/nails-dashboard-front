import React, { Fragment } from "react";
import Breadcrumb from "./common/breadcrumb";
import {
	Navigation,
	Box,
	MessageSquare,
	Users,
	Briefcase,
	CreditCard,
	ShoppingCart,
	Calendar,
} from "react-feather";
import CountUp from "react-countup";
import { Chart } from "react-google-charts";

import { Bar, Line } from "react-chartjs-2";
import {
	lineOptions,
	buyOption,
	employeeData,
	employeeOptions,
} from "../constants/chartData";
// image impoer
import user2 from "../assets/images/dashboard/user2.jpg";
import user1 from "../assets/images/dashboard/user1.jpg";
import man from "../assets/images/dashboard/man.png";
import user from "../assets/images/dashboard/user.png";
import designer from "../assets/images/dashboard/designer.jpg";
import {
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Media,
	Row,
	Table,
} from "reactstrap";

const Dashboard = () => {
	const lineData = {
		labels: ["100", "200", "300", "400", "500", "600", "700", "800"],
		datasets: [
			{
				lagend: "none",
				data: [2.5, 3, 3, 0.9, 1.3, 1.8, 3.8, 1.5],
				borderColor: "#ff8084",
				backgroundColor: "#ff8084",
				borderWidth: 2,
			},
			{
				lagend: "none",
				data: [3.8, 1.8, 4.3, 2.3, 3.6, 2.8, 2.8, 2.8],
				borderColor: "#a5a5a5",
				backgroundColor: "#a5a5a5",
				borderWidth: 2,
			},
		],
	};

	const buyData = {
		labels: ["", "10", "20", "30", "40", "50"],
		datasets: [
			{
				backgroundColor: "transparent",
				borderColor: "#13c9ca",
				data: [20, 5, 80, 10, 100, 15],
			},
			{
				backgroundColor: "transparent",
				borderColor: "#a5a5a5",
				data: [0, 50, 20, 70, 30, 27],
			},
			{
				backgroundColor: "transparent",
				borderColor: "#ff8084",
				data: [0, 30, 40, 10, 86, 40],
			},
		],
	};

	const doughnutOptions = {
		title: "",
		pieHole: 0.35,
		pieSliceBorderColor: "none",
		colors: ["#ff8084", "#13c9ca", "#a5a5a5"],
		legend: {
			position: "none",
		},
		pieSliceText: "none",
		tooltip: {
			trigger: "none",
		},
		animation: {
			startup: true,
			easing: "linear",
			duration: 1500,
		},
		chartArea: { left: 0, top: 10, width: "360px", height: "100%" },
		enableInteractivity: false,
	};
	const pieOptions = {
		title: "",
		pieHole: 1,
		slices: [
			{
				color: "#ff8084",
			},
			{
				color: "#13c9ca",
			},
			{
				color: "#f0b54d",
			},
		],
		tooltip: {
			showColorCode: false,
		},
		chartArea: { left: 0, top: 10, width: "360px", height: "100%" },
		legend: "none",
	};
	const LineOptions = {
		hAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		vAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		colors: ["#ff8084"],
		legend: "none",
	};
	const LineOptions1 = {
		hAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		vAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		colors: ["#13c9ca"],
		chartArea: { left: 0, top: 0, width: "100%", height: "100%" },
		legend: "none",
	};
	const LineOptions2 = {
		hAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		vAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		colors: ["#f5ce8a"],
		chartArea: { left: 0, top: 0, width: "100%", height: "100%" },
		legend: "none",
	};
	const LineOptions3 = {
		hAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		vAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		colors: ["#a5a5a5"],
		chartArea: { left: 0, top: 0, width: "100%", height: "100%" },
		legend: "none",
	};
	return (
		<Fragment>
			<Breadcrumb title="Dashboard" parent="Dashboard" />
			<Container fluid={true}>
				<Row>
					<Col xl="3 xl-50" md="6">
						<Card className=" o-hidden widget-cards">
							<CardBody className="bg-warning">
								<Media className="static-top-widget row">
									<div className="icons-widgets col-4">
										<div className="align-self-center text-center">
											<Navigation className="font-warning" />
										</div>
									</div>
									<Media body className="col-8">
										<span className="m-0">Earnings</span>
										<h3 className="mb-0">
											$ <CountUp className="counter" end={6659} />
											<small> This Month</small>
										</h3>
									</Media>
								</Media>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3 xl-50" md="6">
						<Card className=" o-hidden  widget-cards">
							<CardBody className="bg-secondary ">
								<Media className="static-top-widget row">
									<div className="icons-widgets col-4">
										<div className="align-self-center text-center">
											<Box className="font-secondary" />
										</div>
									</div>
									<Media body className="col-8">
										<span className="m-0">Products</span>
										<h3 className="mb-0">
											$ <CountUp className="counter" end={9856} />
											<small> This Month</small>
										</h3>
									</Media>
								</Media>
							</CardBody>
						</Card>
					</Col>

				</Row>
			</Container>
		</Fragment>
	);
};

// javascript:void(0)

export default Dashboard;
