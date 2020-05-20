import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faChartArea,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

import { CustomBreadCrum } from "../../../components/breadcrum";
import { Container, Row, Col } from "react-bootstrap";
import { CustomCard } from "../../../components/card";
import { AreaChart } from "../../../components/charts/areachart";
import { BarChart } from "../../../components/charts/barchart";
import { CustomTable } from "../../../components/table";

import { cardData } from "./data";
import { CardWrapper } from "../../../components/wrapper";
import { TableSvg } from "./icon/table";
import "./style.scss";

const barChartIcon = <FontAwesomeIcon icon={faChartBar} />;
const areaChartIcon = <FontAwesomeIcon icon={faChartArea} />;
const pieChartIcon = <FontAwesomeIcon icon={faChartPie} />;

export const Dashboard = () => {
  return (
    <Container fluid className="container-wrapper">
      <h1>Dashboard</h1>
      <CustomBreadCrum />
      <Row>
        {cardData.map((data) => {
          return (
            <Col>
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
        <Col>
          <CardWrapper content="Area Chart Example" icon={areaChartIcon}>
            <AreaChart />
          </CardWrapper>
        </Col>
        <Col>
          <CardWrapper content="Bar Chart Example" icon={barChartIcon}>
            <BarChart />
          </CardWrapper>
        </Col>
      </Row>
        <CardWrapper content="DataTable Example" icon={TableSvg}>
          <CustomTable />
        </CardWrapper>
    </Container>
  );
};
