import moment from 'moment/moment';

const getTime = async () => {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Jakarta"
  );
  const responseJson = await response.json();
  const time = moment(responseJson.datetime).format("dddd hA");
  console.log(time)
  console.log(typeof time)
  return time;
};

getTime();
