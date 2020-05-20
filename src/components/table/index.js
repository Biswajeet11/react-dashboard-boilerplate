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

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing { from } of { size } Results
  </span>
);

const pageOptions = {
  hideSizePerPage: true,
  paginationSize: 4,
  pageStartIndex: 0,
  // alwaysShowAllBtns: true, // Always show next and previous button
  // withFirstAndLast: false, // Hide the going to First and Last page button
  // hideSizePerPage: true, // Hide the sizePerPage dropdown always
  // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
  firstPageText: 'First',
  prePageText: 'Previous',
  nextPageText: 'Next',
  lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  paginationTotalRenderer: customTotal,
  disablePageTitle: true,
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
                />
              </div>
            )}
          </ToolkitProvider>
        </div>
      )}
    </PaginationProvider>
  );
};
