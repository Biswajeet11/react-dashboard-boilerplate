import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faChartArea } from "@fortawesome/free-solid-svg-icons";

import { CustomBreadCrum } from "../../../components/breadcrum";
import { Row, Col } from "react-bootstrap";
import { CustomCard } from "../../../components/card";
import { AreaChart } from "../../../components/charts/areachart";
import { BarChart } from "../../../components/charts/barchart";
import { CustomTable } from "../../../components/table";

import { cardData } from "./data";
import { CardWrapper } from "../../../components/wrapper";
import { TableSvg } from "../../../assets/icon/table";

const barChartIcon = <FontAwesomeIcon icon={faChartBar} />;
const areaChartIcon = <FontAwesomeIcon icon={faChartArea} />;

export const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <CustomBreadCrum content=""/>
      <Row>
        {cardData.map((data) => {
          return (
            <Col xl="3" md="6">
              <CustomCard
                variant={data.type}
                id={data.id}
                content={data.text}
              />
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col xl="6">
          <CardWrapper content="Area Chart Example" icon={areaChartIcon}>
            <AreaChart />
          </CardWrapper>
        </Col>
        <Col xl="6">
          <CardWrapper content="Bar Chart Example" icon={barChartIcon}>
            <BarChart />
          </CardWrapper>
        </Col>
      </Row>
      <div className="custom-table">
        <CardWrapper content="DataTable Example" icon={TableSvg} >
            <CustomTable />
        </CardWrapper>
      </div>
    </div>
  );
};
