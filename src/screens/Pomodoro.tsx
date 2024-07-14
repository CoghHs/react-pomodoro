import { useRecoilState } from "recoil";
import {
  roundState,
  goalState,
  playState,
  minutesState,
  secondsState,
} from "../atom";

import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import PlayIcon from "../components/Icons/PlayIcon";
import PauseIcon from "../components/Icons/PauseIcon";
import {
  BtnVariants,
  BtnWrap,
  ConuterWrap,
  Round,
  TimerCard,
  TimerVariants,
  TimerWrap,
  Title,
  Wrapper,
} from "./PomodoroCss";

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
          <TimerCard
            key={minutes}
            variants={TimerVariants}
            initial="initial"
            animate="animate"
          >
            {minutes < 10 ? `0${minutes}` : minutes}
          </TimerCard>
          <p>:</p>
          <TimerCard
            key={seconds}
            variants={TimerVariants}
            initial="initial"
            animate="animate"
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
