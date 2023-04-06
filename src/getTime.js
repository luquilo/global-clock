import { format } from 'date-fns-tz';

const timezones = [
  'Asia/Shanghai',
  'Europe/London',
  'Europe/Berlin',
  'Asia/Kolkata',
  'Asia/Jakarta',
  'Asia/Tokyo',
  'Europe/Moscow',
  'America/New_York',
  'Europe/Paris',
  'Asia/Dubai',
];

const getTimes = async () => {
  for (const timezone of timezones) {
    const response = await fetch(`http://worldtimeapi.org/api/timezone/${timezone}`);
    const responseJson = await response.json();
    const datetime = new Date(responseJson.datetime);
    const formattedTime = format(datetime, "EEEE hhaaa", { timeZone: timezone });
    console.log(`${timezone}: ${formattedTime}`);
  }
};

getTimes();
