import React from "react";
import styles from "./CountryInfoTable.module.scss";

import { createColumnHelper } from "@tanstack/react-table";
import GenericTable from "../common/GenericTable";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("name", {
    header: "Country Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("abbreviation", {
    header: "Code",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("capital", {
    header: "Capital",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("phone", {
    header: "Ph Code",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("population", {
    header: "Population",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("media.flag", {
    header: "Flag",
    cell: (info) => (
      <img
        src={info.getValue()}
        alt={`Flag of ${info.row.original.name}`}
        style={{ width: "50px" }}
      />
    ),
  }),
  columnHelper.accessor("media.emblem", {
    header: "Emblem",
    cell: (info) => (
      <img
        src={info.getValue()}
        alt={`Emblem of ${info.row.original.name}`}
        style={{ width: "50px" }}
      />
    ),
  }),
];

const Table = ({ tableData }) => {
  return (
    <div className={styles.tableWrapper}>
      <GenericTable columns={columns} data={tableData} />
    </div>
  );
};

export default Table;
