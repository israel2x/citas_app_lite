import React from "react";
import { Calendar } from "antd";

const CitasCalendar = () => {
  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  };
  return (
    <div className="citas-calendar">
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};

export default CitasCalendar;
