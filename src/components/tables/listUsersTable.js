import MUIDataTable from "mui-datatables";
import React, { Fragment } from "react";

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

const listUsersTable = (props) => {
  //   const { data, title } = props;

  //   const columns = [
  //     {
  //         name: "name",
  //         label: "Name",
  //         options: {
  //          filter: true,
  //          sort: true,
  //         }
  //     }
  //   ];

  //   return (
  //     <Fragment>
  //       <MUIDataTable
  //         title={title}
  //         data={data}
  //         columns={columns}
  //         options={options}
  //       />
  //     </Fragment>
  //   );
  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
    },
  ];

  const options = {
    filterType: "checkbox",
  };
  return (
    <div><h1>procedÊ</h1></div>
  );
};

export default listUsersTable;
