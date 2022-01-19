import React from "react";
import pro16 from "../images/dashboard/product/1.jpg";
import pro13 from "../images/dashboard/product/2.jpg";
import pro12 from "../images/dashboard/product/3.jpg";
import pro25 from "../images/dashboard/product/4.jpg";
import pro21 from "../images/dashboard/product/5.jpg";
import pro3 from "../images/dashboard/product/6.jpg";
import pro14 from "../images/dashboard/product/7.jpg";
import pro20 from "../images/dashboard/product/8.jpg";

const data = [
	{
		image: <img alt="" src={pro16} style={{ width: 50, height: 50 }} />,
		product_name: "Gel Arten",
		price: "$20.00",
		status: <i className="fa fa-circle font-warning f-12" />,
		category: "Gele &amp; Acryl - Gel Arten",
	},
	{
		image: <img alt="" src={pro13} style={{ width: 50, height: 50 }} />,
		product_name: "Shellac",
		price: "$462.00",
		status: <i className="fa fa-circle font-danger f-12" />,
		category: "Home - UV- &amp; Nagellack - Shellac",
	},
	{
		image: <img alt="" src={pro12} style={{ width: 50, height: 50 }} />,
		product_name: "Lichthärtungsgeräte",
		price: "$652.00",
		status: <i className="fa fa-circle font-success f-12" />,
		category: "Home - Geräte - Lichthärtungsgeräte ",
	},
	{
		image: <img alt="" src={pro25} style={{ width: 50, height: 50 }} />,
		product_name: "Desinfektionsmittel",
		price: "$25.00",
		status: <i className="fa fa-circle font-success f-12" />,
		category: "Home - Flüssigkeiten - Desinfektionsmittel",
	},
	{
		image: <img alt="" src={pro21} style={{ width: 50, height: 50 }} />,
		product_name: "Tips",
		price: "$30.00",
		status: <i className="fa fa-circle font-danger f-12" />,
		category: "Home - Nagel Tips - Tips ",
	},
	{
		image: <img alt="" src={pro3} style={{ width: 50, height: 50 }} />,
		product_name: "Multifunktions Gel",
		price: "$40.00",
		status: <i className="fa fa-circle font-warning f-12" />,
		category: "Home - Gele &amp; Acryl - Gel Arten - Multifunktions Gel ",
	},
	{
		image: <img alt="" src={pro14} style={{ width: 50, height: 50 }} />,
		product_name: "Instrumente & Zubehör",
		price: "$44.00",
		status: <i className="fa fa-circle font-danger f-12" />,
		category: "Home - Nail Art - Instrumente &amp; Zubehör ",
	},
	{
		image: <img alt="" src={pro20} style={{ width: 50, height: 50 }} />,
		product_name: "One Stroke",
		price: "$47.00",
		status: <i className="fa fa-circle font-success f-12" />,
		category: "Home - Gele &amp; Acryl - Farbgele - One Stroke ",
	},
	
];

export { data };
