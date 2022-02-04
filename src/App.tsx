import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Wrapper, Title, Grid, Box, Overlay, Circle, Button } from "./components/customElements";

function App() {
  const [selectedId, setSelectedId] = useState<null | string>(null);
  const [circleId, setCircleId] = useState(0);
  const numbers = [...Array(4)].map((v, i) => i.toString());
  console.log(numbers);

  const box = {
    whileHover0: { scale: 1.1, originX: 1, originY: 1, transition: { bounce: 0 }},
    whileHover1: { scale: 1.1, originX: 0, originY: 1, transition: { bounce: 0 }},
    whileHover2: { scale: 1.1, originX: 1, originY: 0, transition: { bounce: 0 }},
    whileHover3: { scale: 1.1, originX: 0, originY: 0, transition: { bounce: 0 }},
  };

  const overlay = {
    hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
    visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  };

  const button = {
    whileHover: { scale: 1.1, border: "1.5px solid #eb4d4b" },
    whileTap: { color: "#eb4d4b"},
  };

  const handleButton = () => {
    setCircleId((v) => (v + 1) % 4);
  };

  return (
    <Wrapper>
      <Title>Framer Motion Demo</Title>
      <Grid>
        {numbers.map((n) => (
          <Box
            variants={box}
            whileHover={`whileHover${n}`}
            onClick={() => setSelectedId(n)}
            key={n}
            layoutId={n}
          >
            {circleId.toString() === n && <Circle layoutId="c" />}
          </Box>
        ))}
      </Grid>
      <AnimatePresence>
        {selectedId && (
          <Overlay
            variants={overlay}
            onClick={() => setSelectedId(null)}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Box layoutId={selectedId} style={{ width: "60%", height: "90%" }}>
              {circleId.toString() === selectedId &&
                <Circle style={{ height: "15vmin", width: "15vmin" }} layoutId="c" />
              }
            </Box>
          </Overlay>
        )}
      </AnimatePresence>
      <Button
        variants={button}
        whileHover="whileHover"
        whileTap="whileTap"
        onClick={handleButton}
      >
        Switch
      </Button>
    </Wrapper>
  );
}

export default App;
