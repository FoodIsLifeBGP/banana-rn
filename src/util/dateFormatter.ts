export const formatDate = (date: string|Date) => {
  const parsedDate = date instanceof Date ? date : new Date(date);
  const actualMonth = parsedDate.getMonth() + 1;
  const mm = actualMonth < 10 ? `0${actualMonth}` : actualMonth;
  const dd = parsedDate.getDay() < 10 ? `0${parsedDate.getDay()}` : parsedDate.getDay();
  const yyyy = parsedDate.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
};

export const formatTime = (date: string|Date) => {
  const parsedDate = date instanceof Date ? date : new Date(date);
  const hh = parsedDate.getHours();
  const mm = parsedDate.getMinutes();
  const AM_PM = hh > 12 ? 'PM' : 'AM';
  return `${hh > 12 ? hh % 12 : hh}: ${
    mm < 10 ? '0'.concat(mm.toString()) : mm
  } ${AM_PM} `;
};
