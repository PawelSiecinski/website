// src/components/filter.table.js
import React from "react";
import {Row, Col} from 'react-bootstrap';
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Wyszukaj:{" "}
      <input
        className="form-control"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} rekordów...`}
      />
    </span>
  );
}

function DefaultColumnFilter(column) {
  const { filterValue, preFilteredRows, setFilter } = column;
  const count = preFilteredRows.length;
  if (column.column.id !== "edit") {
    return (
      <input
        className="form-control"
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
        placeholder={`Znajdź ${count} rekordów...`}
      />
    );
  }
}

function Table({ columns, data }) {
  const defaultColumn = React.useMemo(
    () => ({
      // Default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter
  );

  return (
    <div>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <table className="table text-center mt-3" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.id !== "edit" && column.render("Header")}
                  {/* Render the columns filter UI */}
                  <div className="mt-2 mb-2">
                    {column.canFilter ? column.render("Filter") : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                console.log(cell.row.original)
                  if (cell.row.original.status!="zakończone" && cell.column.id === "edit") {
                    return (
                      <td {...cell.getCellProps()}>
                        {
                          <>
                            <Row>
                              <Col>
                                <Button
                                  variant="secondary"
                                  href={
                                    "/badanie/" + cell.row.original.idBadania
                                  }
                                >
                                  Dodaj opis
                                </Button>
                              </Col>
                            </Row>
                          </>
                        }
                      </td>
                    );
                  } 
                  else {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <br /> */}
      {/* <div>Showing the first 20 results of {rows.length} rows</div>
            <div>
                <pre>
                    <code>{JSON.stringify(state.filters, null, 2)}</code>
                </pre>
            </div> */}
    </div>
  );
}

function ArchiveTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Badania",
        columns: [
          {
            Header: "ID Badania",
            accessor: "idBadania",
          },
          {
            Header: "Nazwa Badania",
            accessor: "nazwaBadania",
          },
          {
            Header: "ID placówki",
            accessor: "idPlacowki",
          },
          {
            Header: "PESEL",
            accessor: "pesel",
          },
          {
            Header: "Symbol",
            accessor: "symbol",
          },
          {
            Header: "Data Badania",
            accessor: "date",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Opcje",
            accessor: "edit",
          },
        ],
      },
    ],
    []
  );

  const data = [
    {
      idBadania: 1,
      nazwaBadania: "Badanie 1",
      idPlacowki: "Placowka 1",
      pesel: "88762344533",
      symbol: "BT CL-1222",
      date: "2020-01-20",
      status: "zakończone",
      edit: true,
    },
    {
      idBadania: 2,
      nazwaBadania: "Badanie 2",
      idPlacowki: "Placowka 2",
      pesel: "1876244533",
      symbol: "xp CL-3222",
      date: "2021-01-20",
      status: "zakończone",
      edit: false,
    },
    {
      idBadania: 3,
      nazwaBadania: "Badanie 3",
      idPlacowki: "Placowka 3",
      pesel: "88762323533",
      symbol: "XX LP-1142",
      date: "2022-01-20",
      status: "oczekuje",
      edit: true,
    },
    {
      idBadania: 4,
      nazwaBadania: "Badanie 4",
      idPlacowki: "Placowka 4",
      pesel: "1234344533",
      symbol: "OL UU-6221",
      date: "2019-01-20",
      status: "oczekuje",
      edit: true,
    },
    {
      idBadania: 5,
      nazwaBadania: "Badanie 5",
      idPlacowki: "Placowka 5",
      pesel: "5642362344533",
      symbol: "OL UU-6221",
      date: "2018-01-20",
      status: "oczekuje",
      edit: true,
    },
  ];

  return <Table columns={columns} data={data} />;
}

export default ArchiveTable;
