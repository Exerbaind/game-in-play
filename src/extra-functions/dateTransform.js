export const dateTransform = (date) => {
  let transformedDate = date.split("-");
  return (transformedDate =
    transformDay(transformedDate[2]) +
    " " +
    transformMonth(transformedDate[1]) +
    " " +
    transformedDate[0]);
};

function transformMonth(month) {
  switch (month) {
    case "01":
      return "января";
    case "02":
      return "февраля";
    case "03":
      return "марта";
    case "04":
      return "апреля";
    case "05":
      return "мая";
    case "06":
      return "июня";
    case "07":
      return "июля";
    case "08":
      return "августа";
    case "09":
      return "сентября";
    case "10":
      return "октября";
    case "11":
      return "ноября";
    case "12":
      return "декабря";
    default:
      return month;
  }
}

function transformDay(day) {
  switch (day) {
    case "01":
      return "1";
    case "02":
      return "2";
    case "03":
      return "3";
    case "04":
      return "4";
    case "05":
      return "5";
    case "06":
      return "6";
    case "07":
      return "7";
    case "08":
      return "8";
    case "09":
      return "9";
    default:
      return day;
  }
}
