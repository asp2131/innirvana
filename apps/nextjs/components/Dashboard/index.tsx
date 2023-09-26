import React, { useEffect } from "react";
import Progressbar from "../Progress";
import Stopwatch from "../StopWatch";
import { useWindowSize } from "../../src/hooks/useIsMobile";

const Dashboard = () => {
  const { width: windowWidth } = useWindowSize();
  const isBrowserMobile = !!windowWidth && windowWidth < 992;

  return (
    <div className="dash">
      {/* <Stopwatch /> */}
      <section className="dash-card bg-white"></section>
      <section className="dash-card bg-white"></section>
      <section
        style={{
          background: isBrowserMobile
            ? `linear-gradient(to right, #b76af9 50%, blue 50%) left`
            : `linear-gradient(to top, #82F96A 50%, grey 50%) bottom`,
        }}
        className="dash-card progress"
      ></section>
      <section className="dash-card hidden bg-white lg:block"></section>
      <section className="dash-card hidden bg-white lg:block"></section>
    </div>
  );
};

export default Dashboard;
