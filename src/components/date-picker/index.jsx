import React from "react";
import FlatPickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

const DatePicker = ({
  date,
  onSelectDate,
  minDate,
  maxDate,
  dateRenderProps,
}) => {
  return (
    <div>
      <FlatPickr
        value={date}
        onChange={([value]) => {
          onSelectDate(value);
        }}
        options={{
          minDate,
          maxDate,
          nextArrow: "&#667085",
          prevArrow: "&#667085",
        }}
        render={dateRenderProps}
      />
    </div>
  );
};

export default DatePicker;
