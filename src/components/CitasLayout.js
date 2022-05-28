import React, { useState } from "react";
import { Row, Col, Divider } from "antd";
import CitasCalendar from "./CitasCalendar";
import CitasList from "./CitasList";
import CitaFormSide from "./CitaFormSide";
import dayjs from "dayjs";
import { DaySelectedContext } from "./Contexts/DaySelectedContext";

const CitasLayout = () => {
  const today = dayjs(new Date()).format("YYYY-MM-DD");
  const [day, setDay] = useState(today);
  //console.log("Day context: " + today);

  return (
    <DaySelectedContext.Provider value={{ day, setDay }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={17}>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            justify="space-between"
            align="middle"
          >
            <Col className="gutter-row">
              <Divider orientation="left" orientationMargin="0">
                Mis Citas:
              </Divider>
            </Col>
            <Col className="gutter-row">
              <CitaFormSide></CitaFormSide>
            </Col>
          </Row>
          <CitasList></CitasList>
        </Col>
        <Col className="gutter-row" span={7}>
          <Row align="middle">
            <Divider orientation="left" orientationMargin="0">
              Citas por Día:
            </Divider>
          </Row>
          <CitasCalendar></CitasCalendar>
        </Col>
      </Row>
    </DaySelectedContext.Provider>
  );
};

export default CitasLayout;
