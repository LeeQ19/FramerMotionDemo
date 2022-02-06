import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Wrapper, Title, Grid, Box, Overlay, Circle, Button } from "./components/customElements";

function App() {
  const [selectedId, setSelectedId] = useState<null | string>(null);
  const [circleId, setCircleId] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const numbers = [...Array(4)].map((v, i) => i.toString());

  const transformOrigin: { [key: string]: { [key: string]: number} } = {
    0: { originX: 1, originY: 1 },
    1: { originX: 0, originY: 1 },
    2: { originX: 1, originY: 0 },
    3: { originX: 0, originY: 0 },
  };

  const overlay = {
    hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
    visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  };

  const button = {
    whileHover: { scale: 1.1, border: "1.5px solid #eb4d4b" },
    whileTap: { color: "#eb4d4b"},
  };

  useEffect(() => {
    setIsHover(selectedId === null);
  }, [selectedId]);

  const handleButton = () => {
    setCircleId((v) => (v + 1) % 4);
  };

  return (
    <Wrapper>
      <Title>Framer Motion Demo</Title>
      <AnimatePresence>
        <Grid>
          {numbers.map((n) => {
            return (
              <Box
                key={n}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedId(n)}
                style={isHover ? transformOrigin[n] : undefined}
                layoutId={n}
              >
                {circleId.toString() === n && 
                  <Circle layoutId="c" />}
              </Box>
            )
          })}
        </Grid>
        {selectedId && (
          <Overlay
            variants={overlay}
            onClick={() => setSelectedId(null)}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <Box
              layoutId={selectedId}
              style={{ width: "60%", height: "90%" }}
            >
              {circleId.toString() === selectedId && 
                  <Circle layoutId="c" />}
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
