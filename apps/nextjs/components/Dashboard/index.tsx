import React, { useEffect } from "react";
import Timer from "../Timer";
import { useWindowSize } from "../../src/hooks/useIsMobile";
import medi_girl_1 from "../../public/medi_girl_2.json";
import Lottie from "lottie-react";

const Dashboard = () => {
  const { width: windowWidth } = useWindowSize();
  const isBrowserMobile = !!windowWidth && windowWidth < 992;

  return (
    <div className="dash">
      {/* <Stopwatch /> */}
      <section className="dash-card bg-tahiti ">
        <div className="lottie">
          <Lottie className="anim" animationData={medi_girl_1} loop={true} />
        </div>
        <Timer />
        <div className="p-2 pt-5 text-start text-xl font-bold">
          <h1 className="place-self-center text-black">lvl 1</h1>
        </div>
        <section
          style={{
            display: "flex",
            alignItems: "center",
            background: isBrowserMobile
              ? `linear-gradient(to right, #b76af9 50%, slate 50%) left`
              : `linear-gradient(to right, #82F96A 50%, grey 50%) left`,
          }}
          className="progress-card  progress"
        ></section>
      </section>

      {/* <section className="dash- hidden bg-white lg:block"></section> */}
    </div>
  );
};

export default Dashboard;
