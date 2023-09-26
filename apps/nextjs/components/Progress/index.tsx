import { motion, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Progressbar({ value }: any) {
  const progressTextRef = useRef(null);
  useEffect(() => {
    const progressText = progressTextRef.current?.textContent;
    if (progressText != null) {
      animate(parseInt(progressText), value, {
        duration: 2,
        onUpdate: (cv) => {
          if (progressTextRef.current) {
            progressTextRef.current.textContent = cv.toFixed(0);
          }
        },
      });
    }
  }, [value]);
  return (
    <div className="progressbar-container">
      <div className="progressbar">
        <motion.div
          className="bar"
          animate={{
            width: `${value}%`,
          }}
          transition={{
            duration: 2,
          }}
        />
      </div>
      <div className="progressbar-text-container">
        <p ref={progressTextRef}>0</p>
        <p>%</p>
      </div>
      <style jsx>{`
        /* CSS-in-JS for styling */
        .progressbar {
          /* Size */
          width: 450px;
          height: 75px;

          /* Content alignment */
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: stretch;

          /* Style */
          border-radius: 60px;
          background-color: #494b52;
          box-shadow: 0px 0px 20px #111;

          overflow: hidden;
        }

        .bar {
          /* Size */
          width: 0%;

          /* Style */
          background: rgb(255, 174, 105);
          background: linear-gradient(
            180deg,
            rgba(255, 174, 105, 1) 0%,
            rgba(255, 173, 102, 1) 32%,
            rgba(255, 132, 25, 1) 100%
          );
        }

        .progressbar-container {
          /* Content alignment */
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .progressbar-text-container {
          /* Size */
          width: 30px;
          margin-left: 30px;

          /* Content alignment */
          display: flex;
          flex-direction: row;

          /* Styling */
          color: white;
          font-family: montserrat;
          font-weight: bold;
          font-size: 30px;
        }
      `}</style>
    </div>
  );
}

export default Progressbar;
