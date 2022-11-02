export function Datum() {
  var dateDay = new Date().getDate();
  var dateMonth = new Date().getMonth();
  var dateYear = new Date().getFullYear();

  const monthNames = [
    "Januari",
    "Februari",
    "Maart",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "October",
    "November",
    "December",
  ];

  return dateDay + " " + monthNames[dateMonth] + " " + dateYear;
}

export default Datum;
