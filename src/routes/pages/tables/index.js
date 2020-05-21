import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";

import { CustomBreadCrum } from "../../../components/breadcrum";
import { CardWrapper } from "../../../components/wrapper";
import { CustomTable } from "../../../components/table/index";

const areaChartIcon = <FontAwesomeIcon icon={faChartArea} />;

export const Table = () => {
  return (
    <div>
      <h1>Table</h1>
      <CustomBreadCrum />
      <CardWrapper>
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the
        official DataTables documentation.
      </CardWrapper>
      <CardWrapper content="Area Chart Example" icon={areaChartIcon}>
        <CustomTable />
      </CardWrapper>
    </div>
  );
};
