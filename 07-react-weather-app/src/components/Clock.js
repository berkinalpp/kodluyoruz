import React, {useState} from "react";

const Clock = () => {
  const [time, setTime] = useState();

  setTimeout(() => {
    setTime(new Date());
  }, 1000);

  let hour = time?.getHours() < 10 ? "0" + time?.getHours() : time?.getHours();
  let minute =
    time?.getMinutes() < 10 ? "0" + time?.getMinutes() : time?.getMinutes();
  let showTime = `${hour} : ${minute} `;

  return <>{time ? <h4>{showTime}</h4> : "Loading..."}</>;
};

export default Clock;
