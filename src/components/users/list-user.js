import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/listUser";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Container } from "reactstrap";
import api from "../../services/api";
import MUIDataTable from "mui-datatables";

const List_user = () => {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    api
      .get("/users")
      .then(function (res) {
        const { data } = res;
        console.log(data);
        setUsers(data);
      })
      .catch(function (err) {
        console.log(err);
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
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: true,
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
      <Breadcrumb title="User List" parent="Users" />
      <Container fluid={true}>
        <Card>
          <CardHeader>
            <h5>Users list</h5>
          </CardHeader>
          <CardBody>
            <MUIDataTable data={users} columns={columns} options={options} />
            <listUsersTable />
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default List_user;
