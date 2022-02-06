import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
`;

export const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 2%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 50%;
  height: 75%;
  gap: 10px;
`;

export const Overlay = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Circle = styled(motion.div)`
  width: 20%;
  height: 0;
  padding-bottom: 20%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  cursor: pointer;
`;

export const Button = styled(motion.button)`
  height: 40px;
  width: 100px;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
