import { useRecoilState } from "recoil";
import {
  roundState,
  goalState,
  playState,
  minutesState,
  secondsState,
} from "../atom";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlayIcon from "../components/Icons/PlayIcon";
import PauseIcon from "../components/Icons/PauseIcon";

const Wrapper = styled(motion.div)`
  background-color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 30px;
`;

const TimerWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  p {
    font-size: 48px;
  }
`;

const TimerCard = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  width: 200px;
  height: 200px;
  font-size: 36px;
`;

const BtnWrap = styled(motion.div)`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
`;

const ConuterWrap = styled(motion.div)`
  width: 400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Round = styled.div`
  text-align: center;
  margin: 0px auto;
  div:first-child {
    color: rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  div:last-child {
    font-size: 20px;
  }
`;

const TimerVariants = {
  end: {
    scale: 1,
  },
  initial: {
    scale: 0,
    transition: {
      duration: 8,
    },
  },
};

const BtnVariants = {
  hover: { scale: 1.3 },
  click: { scale: 1 },
};

export default function Pomodoro() {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  const [seconds, setSeconds] = useRecoilState(secondsState);
  const [round, setRound] = useRecoilState(roundState);
  const [goal, setGoal] = useRecoilState(goalState);
  const [play, setPlay] = useRecoilState(playState);
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  const togglePlay = () => {
    setPlay((prev) => !prev);
  };

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
  };

  useEffect(() => {
    const roundCounting = () => {
      if (minutes === 0 && seconds === 0) {
        resetTimer();
        setRound((prev) => prev + 1);
        setPlay(false);
      }
      if (round === 4) {
        setRound(0);
        setGoal((prev) => prev + 1);
        setPlay(false);
      }
      if (goal === 12) {
        setRound(0);
        setGoal(0);
      }
    };

    if (play) {
      timerIdRef.current = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(timerIdRef.current!);
          roundCounting();
        } else {
          if (seconds === 0) {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          } else {
            setSeconds((prev) => prev - 1);
          }
        }
      }, 1000);
    }

    return () => {
      if (timerIdRef.current) {
        clearInterval(timerIdRef.current);
      }
    };
  }, [play, minutes, seconds, round, goal]);

  return (
    <AnimatePresence>
      <Wrapper>
        <Title>Pomodoro</Title>
        <TimerWrap>
          <TimerCard>{minutes < 10 ? `0${minutes}` : minutes}</TimerCard>
          <p>:</p>
          <TimerCard
            key={seconds}
            variants={TimerVariants}
            initial="initial"
            animate="end"
          >
            {seconds < 10 ? `0${seconds}` : seconds}
          </TimerCard>
        </TimerWrap>
        <BtnWrap
          variants={BtnVariants}
          whileHover="hover"
          whileTap="click"
          onClick={togglePlay}
        >
          {play ? <PlayIcon /> : <PauseIcon />}
        </BtnWrap>
        <ConuterWrap>
          <Round>
            <div>{round}/4</div>
            <div>ROUND</div>
          </Round>
          <Round>
            <div>{goal}/12</div>
            <div>GOAL</div>
          </Round>
        </ConuterWrap>
      </Wrapper>
    </AnimatePresence>
  );
}
