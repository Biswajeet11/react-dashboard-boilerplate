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
      <CustomBreadCrum content="Table" />
      <CardWrapper>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </CardWrapper>
      <CardWrapper content="Area Chart Example" icon={areaChartIcon}>
        <CustomTable />
      </CardWrapper>
    </div>
  );
};
