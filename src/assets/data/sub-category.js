import React from 'react'
import pro23 from '../images/dashboard/product/20.jpg';
import pro1 from '../images/dashboard/product/19.jpg';
import pro18 from '../images/dashboard/product/18.jpg';
import pro21 from '../images/dashboard/product/17.jpg';
import pro3 from '../images/dashboard/product/16.jpg';
import tools20 from '../images/dashboard/product/15.jpg';
import pro14 from '../images/dashboard/product/14.jpg';
import pro20 from '../images/dashboard/product/13.jpg';
import pro19 from '../images/dashboard/product/12.jpg';
import jwel18 from '../images/dashboard/product/11.jpg';
import jwel12 from '../images/dashboard/product/10.jpg';
import jwel26 from '../images/dashboard/product/9.jpg';
import cat3 from '../images/dashboard/product/7.jpg';
import fashion12 from '../images/dashboard/product/6.jpg';
import shoes from '../images/dashboard/product/5.jpg';
import pro06 from '../images/dashboard/product/4.jpg';
import pro9 from '../images/dashboard/product/3.jpg';
import pro6 from '../images/dashboard/product/2.jpg';

const data = [
    {
        image: <img alt="" src={pro23} style={{width:50,height:50}} />,
        product_name: "Instrumente & Zubehör",
        price: "$46.00",
        status: <i className="fa fa-circle font-danger f-12" />,
        category: "Home - Nail Art - Instrumente &amp; Zubehör "
    },
      {
        image: <img alt="" src={pro1} style={{width:50,height:50}} />,
        product_name: "Nagel Cleaner",
        price: "$671.00",
        status: <i className="fa fa-circle font-success f-12" />,
        category: "Home - Flüssigkeiten - Nagel Cleaner"
    },
    {
        image: <img alt="" src={pro18} style={{width:50,height:50}} />,
        product_name: "Feilen gerade",
        price: "$368.00",
        status: <i className="fa fa-circle font-success f-12" />,
        category: "Home - Feilen - Feilen gerade "
    },
    {
        image:<img alt="" src={pro21} style={{width:50,height:50}} />,
        product_name: "Pinsel & Bürsten",
        price: "$725.00",
        status:<i className="fa fa-circle font-warning f-12" />,
        category: "Home - Zubehör - Pinsel &amp; Bürsten "
    },
    {
        image:<img alt="" src={pro3} style={{width:50,height:50}} />,
        product_name: "Boxen & Etuis",
        price: "$4825.00",
        status:<i className="fa fa-circle font-danger f-12" />,
        category: "Home - Zubehör - Aufbewahrung - Boxen &amp; Etuis "
    },
    {
        image:<img alt="" src={tools20} style={{width:50,height:50}} />,
        product_name: "Zelletten",
        price: "$25.00",
        status:<i className="fa fa-circle font-warning f-12" />,
        category: "Home - Zubehör - Zelletten "
    },
   
  
]

export default data;

