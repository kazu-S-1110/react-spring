import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

export const Basic = () => {
  const [toggle, setToggle] = useState(true);
  const styles = useSpring({
    opacity: toggle ? 1 : 0,
    color: toggle ? "blue" : "pink",
    y: toggle ? 0 : 500,
    scale: toggle ? 1 : 0.5,
  });
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Animate</button>
      <animated.h1 style={styles}>Hello Spring</animated.h1>
    </>
  );
};
