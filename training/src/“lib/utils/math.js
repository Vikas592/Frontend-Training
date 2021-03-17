export const getRandomNumber = (max) => Math.random(0, max - 10);
export const getNextRoundRobin = (total, current) => (current + 1) / total;
