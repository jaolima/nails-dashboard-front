import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../common/breadcrumb";
import { Card, CardBody, CardHeader, Container } from "reactstrap";
import api from "../../../services/api";
import MUIDataTable from "mui-datatables";
import { Navigation, Box } from "react-feather";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const fixOptionsTable = {
    position: "sticky",
    right: 0,
    zIndex: 101,
    background: "white",
  };
  useEffect(() => {
    api
      .get("products")
      .then((res) => {
        const data = res.data;
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
      });
  }, []);

  const columns = [
    {
      name: "id",
      options: {
        filter: false,
        sort: false,
        display: false,
        viewColumns: false,
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "price",
      label: "Price",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "qtd",
      label: "Quantity",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "size",
      label: "Size",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "color",
      label: "Color",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "alias_color",
      label: "Alias color",
      options: {
        filter: true,
        sort: true,
        display: false,
      },
    },
    {
      name: "Opções",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (_, tableMeta) => {
          const id = tableMeta.rowData[0];
          const url = `http://65.108.217.99:3001/products/physical/edit-product/${id}`;

          return (
            <>
              <div>
                <span>
                  <a href={url}>
                    <i
                      className="fa fa-pencil"
                      style={{
                        width: 35,
                        fontSize: 20,
                        padding: 11,
                        color: "rgb(40, 167, 69)",
                        zIndex: -1,
                      }}
                    ></i>
                  </a>
                </span>
                <span>
                  <i
                    className="fa fa-trash"
                    style={{
                      width: 35,
                      fontSize: 20,
                      padding: 11,
                      color: "#e4566e",
                    }}
                  ></i>
                </span>
              </div>
            </>
          );
        },

        setCellProps: () => ({ style: fixOptionsTable }),
      },
    },
  ];

  const options = {
    filterType: "dropdown",
    responsive: "scroll",
    filter: true,
    print: false,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 50, 100, 200, 300],
    selectableRows: false,
    downloadOptions: {
      filename: "usuarios_geral",
      separator: ";",
      filterOptions: {
        useDisplayedColumnsOnly: true,
        useDisplayedRowsOnly: true,
      },
    },

    customSearch: (searchQuery, currentRow) => {
      const newSearchQuery = searchQuery
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      let isFound = false;
      currentRow.forEach((col) => {
        if (
          col &&
          col
            .toString()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .indexOf(newSearchQuery) >= 0
        ) {
          isFound = true;
        }
      });
      return isFound;
    },
    customToolbarSelect: () => {},
    textLabels: {
      body: {
        noMatch: "Nenhum registro correspondente encontrado ",
        toolTip: "Ordenar",
        columnHeaderTooltip: (column) => `Ordenar Por ${column.label}`,
      },
      pagination: {
        next: "Próxima",
        previous: "Voltar",
        rowsPerPage: "Linhas por página:",
        displayRows: "de",
      },
      toolbar: {
        search: "Pesquisar",
        print: "Imprimir",
        viewColumns: "Selecionar colunas",
        filterTable: "Filtrar",
      },
      filter: {
        all: "Todos",
        title: "Filtros",
        reset: "Limpar",
      },
      viewColumns: {
        title: "Mostrar colunas",
        titleAria: "Mostrar/Ocultar colunas",
      },
    },
  };

  return (
    <Fragment>
      <Breadcrumb title="Product list" parent="Users" />
      <Container fluid={true}>
        <Card>
          <CardHeader>
            <h5>Product list</h5>
          </CardHeader>
          <CardBody>
            {/* <div className="btn-popup pull-right">
              <Link to="/users/create-user" className="btn btn-secondary">
                Create User
              </Link>
            </div> */}
            <div className="clearfix"></div>

            <MUIDataTable data={products} columns={columns} options={options} />
            <div className="icons-widgets col-4">
              <div className="align-self-center text-center">
                <Navigation className="font-warning" />
              </div>
            </div>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default ProductList;
