import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory, {
  PaginationProvider,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";

import { Row, Col } from "react-bootstrap";

import { columns, tableData } from "./constants";
import "./style.scss";

const { SearchBar } = Search;

const options = {
  custom: true,
  totalSize: tableData.length,
};

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing {from} of {size} Results
  </span>
);

const pageOptions = {
  hideSizePerPage: true,
  paginationSize: 4,
  pageStartIndex: 0,
  firstPageText: "First",
  prePageText: "Previous",
  nextPageText: "Next",
  lastPageText: "Last",
  nextPageTitle: "First page",
  prePageTitle: "Pre page",
  firstPageTitle: "Next page",
  lastPageTitle: "Last page",
  showTotal: true,
  paginationTotalRenderer: customTotal,
  disablePageTitle: true,
};

export const CustomTable = () => {
  return (
    <PaginationProvider pagination={paginationFactory(options)}>
      {({ paginationProps, paginationTableProps }) => (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={tableData}
          columns={columns}
          search
        >
          {(props) => (
            <div style={{ display: "block", overflowX: "auto", width: "100%" }}>
              <Row className="table-header-container">
                <Col sm="12" md="6">
                  Show
                  <SizePerPageDropdownStandalone {...paginationProps} />
                  entries
                </Col>
                <Col sm="12" md="6">
                  Search:
                  <SearchBar {...props.searchProps} />
                </Col>
              </Row>
              <hr />
              <Col sm="12" >
                <BootstrapTable
                  wrapperClasses="table-responsive"
                  {...props.baseProps}
                  pagination={paginationFactory(pageOptions)}
                />
              </Col>
            </div>
          )}
        </ToolkitProvider>
      )}
    </PaginationProvider>
  );
};
