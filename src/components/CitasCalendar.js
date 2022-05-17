import React, { useContext, useState } from "react";
import dayjs from "dayjs";
import Calendar from "./Calendar";
import es from "dayjs/locale/es";
import { DaySelectedContext } from "./Contexts/DaySelectedContext";

const CitasCalendar = () => {
  dayjs.locale("es");
  //const today = dayjs(new Date()).format("YYYY-MM-DD");
  //console.log("today: " + today);

  const { day, setDay } = useContext(DaySelectedContext);
  console.log("context calendar: " + day);

  const [calendar, setCalendar] = useState({
    value: day, //today,
    selectedValue: day, //today,
  });

  const onSelect = (value) => {
    const now = value.format("YYYY-MM-DD");
    console.log("On select: " + now);
    setCalendar({
      now,
      selectedValue: now,
    });

    setDay(now);
  };

  const onPanelChange = (value) => {
    const now = value.format("YYYY-MM-DD");
    console.log("change: " + now);
    setCalendar({
      ...calendar,
      now,
    });
  };

  return (
    <div className="citas-calendar">
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        onSelect={onSelect}
        locale={es}
      />
    </div>
  );
};

export default CitasCalendar;
