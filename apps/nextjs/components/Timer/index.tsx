import React from "react";
import CountdownTimer from "../../src/utils/countdown";
import styled from "styled-components";
import TimerInputs from "./timerInput";
import {
  minutesToSeconds,
  secondsToMinutes,
} from "../../src/utils/timeConverter";

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledCountdownTimerWrappeer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
`;

const StyledTimeOutput = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 40px 0;
`;

function App() {
  const [minutes, setMinutes] = React.useState("00");
  const [seconds, setSeconds] = React.useState("00");
  const [timeAsSeconds, setTimeAsSeconds] = React.useState(0);
  const [timeOutput, setTimeOutput] = React.useState("00:00");

  const countdown = React.useMemo(
    () =>
      new CountdownTimer(
        minutesToSeconds(`${minutes}:${seconds}`),
        (time) => {
          setTimeOutput(secondsToMinutes(time));
          setTimeAsSeconds(time);
        },
        () => {
          const alarmAudio = new Audio(
            "https://res.cloudinary.com/allstar/video/upload/v1643729526/alarm_vbjr2d.mp3",
          );
          alarmAudio.autoplay = true;
          alarmAudio.play();
        },
      ),
    [minutes, seconds],
  );

  return (
    <StyledContentWrapper>
      <StyledCountdownTimerWrappeer>
        <StyledTimeOutput>{timeOutput}</StyledTimeOutput>
        <TimerInputs
          realTime={timeAsSeconds}
          countdown={countdown}
          seconds={seconds}
          setSeconds={setSeconds}
          minutes={minutes}
          setMinutes={setMinutes}
          setOutput={setTimeOutput}
        />
      </StyledCountdownTimerWrappeer>
    </StyledContentWrapper>
  );
}

export default App;
