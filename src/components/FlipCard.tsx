import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import styled from "styled-components";

export const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);
  const styles = useSpring({
    opacity: flipped ? 1 : 0,
    rotateY: flipped ? "180deg" : "0deg",
  });
  const antiStyles = useSpring({
    opacity: flipped ? 0 : 1,
    rotateY: !flipped ? "180deg" : "0deg",
  });

  return (
    <div style={{ perspective: "300px" }} onClick={() => setFlipped(!flipped)}>
      <Card style={styles} />
      <BlueCard style={antiStyles} />
    </div>
  );
};

const Card = styled(animated.div)({
  position: "absolute",
  width: 300,
  borderRadius: "20px",
  height: 100,
  backgroundColor: "#0093E9",
  backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
});

const BlueCard = styled(animated.div)({
  position: "absolute",
  width: 300,
  borderRadius: "20px",
  height: 100,
  backgroundColor: "#4158D0",
  backgroundImage:
    "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
});
