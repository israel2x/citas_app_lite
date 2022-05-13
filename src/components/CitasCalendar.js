import React from "react";
import { Calendar } from "antd";
import "moment/locale/es";
import locale from "antd/lib/date-picker/locale/es_ES";

const CitasCalendar = () => {
  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  };
  return (
    <div className="citas-calendar">
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        locale={locale}
      />
    </div>
  );
};

export default CitasCalendar;
