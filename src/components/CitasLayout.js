import React from "react";
import { Row, Col, Divider } from "antd";
import CitasCalendar from "./CitasCalendar";
import CitasList from "./CitasList";

const CitasLayout = () => {
  return (
    <>
      <Divider orientation="left">Citas</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={17}>
          <CitasList></CitasList>
        </Col>
        <Col className="gutter-row" span={7}>
          <CitasCalendar></CitasCalendar>
        </Col>
      </Row>
    </>
  );
};

export default CitasLayout;
