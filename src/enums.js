const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

Object.freeze(months);

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

Object.freeze(days);

const imgPositionIndex = {
  AI: '-15px -358px',
  SJ: '-15px -306px',
  TW: '-15px -409px',
};

Object.freeze(imgPositionIndex);

export { months, days, imgPositionIndex };
