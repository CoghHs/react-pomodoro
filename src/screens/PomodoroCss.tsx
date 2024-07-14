import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  background-color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bolder;
  margin-bottom: 40px;
`;

export const TimerWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  p {
    font-size: 48px;
    opacity: 0.6;
  }
`;

export const TimerCard = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.01);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  width: 150px;
  height: 200px;
  font-size: 36px;
`;

export const BtnWrap = styled(motion.div)`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.01);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
`;

export const ConuterWrap = styled(motion.div)`
  width: 400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Round = styled.div`
  text-align: center;
  div:first-child {
    color: rgba(0, 0, 0, 0.7);
    font-size: 30px;
    margin-bottom: 10px;
  }
  div:last-child {
    font-size: 20px;
  }
`;

export const TimerVariants = {
  initial: {
    opacity: 0,
    scale: 0.7,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const BtnVariants = {
  hover: { scale: 1.2 },
  click: { scale: 1 },
};
