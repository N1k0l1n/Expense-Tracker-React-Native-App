export function getFormattedDate(date){
  console.log("Data" + date)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
  }