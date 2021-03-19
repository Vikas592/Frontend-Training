export const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));
export const getNextRoundRobin = (total, current) => (total === current ? 0 : current + 1);
