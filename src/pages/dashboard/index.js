import React from "react";
import { CustomBreadCrum } from "../../components/breadcrum";
import { Container, Row, Col } from "react-bootstrap";
import { CustomCard } from "../../components/card";
import { AreaChart } from "../../components/areachart";
import { BarChart } from "../../components/barchart";
import { CustomTable } from "../../components/table";

import "./style.scss";
import { cardData } from "./data";
import { CardWrapper } from "../../components/wrapper";

export const Dashboard = () => {
  return (
    <div className="container">
      <Container>
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
            <CardWrapper content="Area Chart Example">
              <AreaChart />
            </CardWrapper>
          </Col>
          <Col>
            <CardWrapper content="Bar Chart Example">
              <BarChart />
            </CardWrapper>
          </Col>
        </Row>
				<Row>
					<CardWrapper content="DataTable Example">
					<CustomTable />
					</CardWrapper>
        </Row>
      </Container>
    </div>
  );
};
