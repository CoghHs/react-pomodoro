import { atom } from "recoil";

export const minutesState = atom<number>({
  key: "minutes",
  default: 25,
});

export const secondsState = atom<number>({
  key: "seconds",
  default: 0,
});

export const roundState = atom<number>({
  key: "round",
  default: 0,
});

export const goalState = atom<number>({
  key: "goal",
  default: 0,
});

export const playState = atom<boolean>({
  key: "play",
  default: false,
});
