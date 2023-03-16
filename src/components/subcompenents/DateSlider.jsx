import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import moment from "moment";

const DateSlider = () => {
  const LeftArrow = ({ className, onClick }) => {
    return (
      <div
        className={`${className} data-slide-arrow sl-left`}
        onClick={onClick}
      >
        <FaChevronLeft />
      </div>
    );
  };
  const RightArrow = ({ className, onClick }) => {
    return (
      <div
        className={`${className} data-slide-arrow sl-right`}
        onClick={onClick}
      >
        <FaChevronRight />
      </div>
    );
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };
  const currentDate = moment();
  const futureMonth = moment(currentDate).add(1, "M");
  let dates = [];
  let time = [];
  let times = [];

  const timedaysfunction = (start, end) => {
    while (!start.isSame(end)) {
      time.push({ t: moment(start), v: start });
      start.add(30, "m");
    }
    times.push({
      key: start.format("DD"),
      data: time,
    });
    time = [];
  };

  while (!currentDate.isSame(futureMonth)) {
    let start = moment(currentDate).hour(9).minute(0).second(0);
    let end = moment(currentDate).hour(17).minute(0).second(0);
    if (moment(currentDate).day() == 0 || moment(currentDate).day() == 6) {
    } else {
      timedaysfunction(start, end);
      dates.push(
        <div className="px-1" key={currentDate}>
          <div className="date-head">
            <div>
              <div className="day">
                {moment().format("Do MMM") == currentDate.format("Do MMM")
                  ? "Bugun"
                  : currentDate.format("ddd")}
              </div>
              <div className="month text-muted">
                {currentDate.format("Do MMM")}
              </div>
            </div>
          </div>
          {times.map((t) => {
            return (
              t.key == currentDate.format("DD") &&
              t.data.map((time) => {
                return moment().format("Do MMM") ==
                  currentDate.format("Do MMM") ? (
                  moment(time.t, "HH:mm").hour() > moment().hour() ? (
                    <p className="available" key={time.t}>
                      {moment(time.t).format("HH:mm")}
                    </p>
                  ) : (
                    <p className="not-available text-muted" key={time.t}>
                      {moment(time.t).format("HH:mm")}
                    </p>
                  )
                ) : (
                  <p className="available" key={time.t}>
                    {moment(time.t).format("HH:mm")}
                  </p>
                );
              })
            );
          })}
        </div>
      );
    }
    currentDate.add(1, "day");
  }
  return (
    <div className="date-slider">
      <Slider className="px-4 text-center" {...settings}>
        {dates}
      </Slider>
    </div>
  );
};

export default DateSlider;
