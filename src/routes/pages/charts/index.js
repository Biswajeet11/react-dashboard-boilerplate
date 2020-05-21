import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartArea,
  faChartPie,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { CustomBreadCrum } from "../../../components/breadcrum";
import { CardWrapper } from "../../../components/wrapper";
import { AreaChart } from "../../../components/charts/areachart/index";
import { BarChart } from "../../../components/charts/barchart";
import { PieChart } from "../../../components/charts/piechart";

const areaChartIcon = <FontAwesomeIcon icon={faChartArea} />;
const pieChartIcon = <FontAwesomeIcon icon={faChartPie} />;
const barChartIcon = <FontAwesomeIcon icon={faChartBar} />;

export const Charts = () => {
  return (
    <div>
      <h1>Charts</h1>
      <CustomBreadCrum />
      <CardWrapper>
        Chart.js is a third party plugin that is used to generate the charts in
        this template. The charts below have been customized - for further
        customization options, please visit the official &nbsp;
        <a target="_blank" href="https://www.chartjs.org/docs/latest/">
          Chart.js documentation
        </a>
      </CardWrapper>
      <CardWrapper content="Area Chart Example" icon={areaChartIcon}>
        <AreaChart />
      </CardWrapper>
      <Container>
        <Row>
          <Col lg="6">
            <CardWrapper content="Bar Chart Example" icon={barChartIcon}>
              <BarChart />
            </CardWrapper>
          </Col>
          <Col lg="6">
            <CardWrapper content="Pie Chart Example" icon={pieChartIcon}>
              <PieChart />
            </CardWrapper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
