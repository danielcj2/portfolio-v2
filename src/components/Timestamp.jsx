import { useState, useEffect } from "react";
import moment from "moment-timezone";
import CNtower from "../assets/images/cn_tower.svg?react";

// Helper function to get current time
const getTime = () => {
  return moment().tz("America/Toronto").format("h:mm A");
};

const Timestamp = () => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 60000);

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <>
      <div className="font-medium">
        <p>Based in Canada</p>
        <p className="font-geist-mono text-text-muted text-xs text-opacity-80">
          {time}
          <span className="mx-1 text-opacity-50">&#8226;</span>
          EST
        </p>
      </div>
      <CNtower />
    </>
  );
};

export default Timestamp;
