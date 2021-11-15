class CustomUtil {
  static colorReactCal(dates_arr, EVENTS) {
    dates_arr.forEach((date) => {
      EVENTS.forEach((event) => {
        let date_obj = this.formatTimelessDate(
          new Date(date.getAttribute("aria-label")).toDateString()
        );

        const firstDate = new Date(event.startAt);
        const secondDate = new Date(event.endAt);

        if (
          firstDate.getTime() <= date_obj.getTime() &&
          date_obj.getTime() <= secondDate.getTime()
        ) {
          // date.style.color = "blue";
          // date.style.fontWeight = "bold";
          date.parentNode.style.backgroundColor = "rgba(240,199,137,30%)";
        }
      });
    });
  }

  static getMonthLastDate(calDate) {
    const month = calDate.getMonth();
    let calDate_str = calDate.toDateString();
    let dayPDT = new Date(
      calDate_str + " 01:00:00 GMT-0700 (Pacific Daylight Time)"
    );
    const lastDay = new Date(2008, month + 1, 0).getDate();
    return lastDay;
  }

  static isDigitConvertible(value) {
    return /^\d+$/.test(value);
  }

  static formatTimelessDate(
    day, //calDate.toDateString()
    typeString = false,
    offset = {
      offsetType: null,
      amount: 0,
    }
  ) {
    let dayPDT = new Date(day + " 01:00:00 GMT-0700 (Pacific Daylight Time)");
    let year = dayPDT.getFullYear();
    let month = dayPDT.getMonth();
    let date = dayPDT.getDate();

    if (offset.offsetType) {
      switch (offset.offsetType) {
        case "year":
          year = year + offset.amount;
          break;
        case "month":
          month = month + offset.amount;
          break;
        case "day":
          date = date + offset.amount;
          break;
        default:
          break;
      }
    }

    // let formatDay: any =
    //   new Date(year, month, date, 0, 0, 0).toISOString().replace(/T.*$/, "") +
    //   " 00:00:00 GMT-0700 (Pacific Daylight Time)";

    let formatDay = new Date(year, month, date, 0, 0, 0);

    if (typeString) {
      formatDay = formatDay.toDateString();
    }

    return formatDay;
  }
}

export default CustomUtil;
