import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory, {
  PaginationProvider,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";

import { columns, tableData } from './constants'

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
          <SizePerPageDropdownStandalone {...paginationProps} />
          <ToolkitProvider
            keyField="id"
            data={tableData}
            columns={columns}
            search
          >
            {(props) => (
              <div>
                Search:
                <SearchBar {...props.searchProps} />
                <hr />
                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory(pageOptions)}
                />
              </div>
            )}
          </ToolkitProvider>
        </div>
      )}
    </PaginationProvider>
  );
};
