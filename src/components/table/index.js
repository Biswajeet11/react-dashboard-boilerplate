import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import cellEditFactory from "react-bootstrap-table2-editor";
import paginationFactory, {
  PaginationProvider,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";

import { columns, tableData } from "./constants";
import './style.scss'

const { SearchBar } = Search;

const options = {
  custom: true,
  totalSize: tableData.length,
};

const pageOptions = {
  hideSizePerPage: true,
  prePage: "Prev",
  nextPage: "Next",
};

export const CustomTable = () => {
  return (
    <PaginationProvider pagination={paginationFactory(options)}>
      {({ paginationProps, paginationTableProps }) => (
        <div>
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={tableData}
            columns={columns}
            search
          >
            {(props) => (
              <div>
                <div className="table-header-container">
                  <div>
                    Show
                    <SizePerPageDropdownStandalone {...paginationProps} />
                    entries
                  </div>
                  <div>
                    Search:
                    <SearchBar {...props.searchProps} />
                  </div>
                </div>
                <hr />
                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory(pageOptions)}
                  cellEdit={cellEditFactory({ mode: "click" })}
                />
              </div>
            )}
          </ToolkitProvider>
        </div>
      )}
    </PaginationProvider>
  );
};
