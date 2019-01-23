var hourHand = document.getElementById('hHand');
var minuteHand = document.getElementById('mHand');
var secondHand = document.getElementById('sHand');

function inClock() {
  var date = new Date;

  // For clock hands & rotation
  var hour = date.getHours() % 12;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var day = date.getDate();

  // For date & day on clock
  var month = date.getMonth() + 1;
  var year = date.getYear() + 1900;
  var getDay = date.getDay();

  // Degree of rotation for each hand
  var hourDeg = (hour * 30) + (0.5 * minute);
  var minuteDeg = (minute * 6) + (0.1 * second);
  var secondDeg = second * 6;

  // Each hand rotation
  hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
  minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
  secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';

  // statements to add 0 to each single displayed date value < 10
  if (day < 10) {
    day = "0" + day;
  };
  if (month < 10) {
    month = "0" + month;
  };

  // Switch stament for day of the week display
  switch (getDay) {
    case 0:
      getDay = "Sunday";
      break;
    case 1:
      getDay = "Monday";
      break;
    case 2:
      getDay = "Tuesday";
      break;
    case 3:
      getDay = "Wednesday";
      break;
    case 4:
      getDay = "Thursday";
      break;
    case 5:
      getDay = "Friday";
      break;
    case 6:
      getDay = "Saturday";
  };

  // draw date and day to clock
  document.getElementById('date').innerHTML = (`${day} / ${month} / ${year}`);
  document.getElementById('day').innerHTML = getDay;

  setTimeout(inClock, 1000);
}

inClock();
