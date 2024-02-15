import { atom } from "nanostores";

export const $nameActive = atom<boolean>(false);
export const $nameActiveMobile = atom<boolean>(false);
export const $firstActivate = atom<boolean>(false);
export const $scrolled = atom<boolean>(false);