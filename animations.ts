export const slideIn = ({ delay = 0, initialX = 0, initialY = 0 }) => ({
  initial: { x: initialX, y: initialY, opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1 },
  transition: { duration: 0.4, delay },
});
