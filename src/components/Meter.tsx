import { a, useSpring } from "@react-spring/web";
import { useState } from "react";
import styled from "styled-components";

export const MeterComponent = () => {
  const [toggle, setToggle] = useState(false);
  const styles = useSpring({
    from: {
      width: "0%",
      backgroundColor: "#aaa",
    },
    to: toggle
      ? [{ width: "100%" }, { backgroundColor: "skyblue" }]
      : [{ backgroundColor: "#aaa" }, { width: "0%" }],
  });
  return (
    <>
      <Container onClick={() => setToggle(!toggle)}>
        <Meter style={styles} />
      </Container>
    </>
  );
};

const Container = styled("div")({
  width: 400,
  height: 70,
  backgroundColor: "#ccc",
});

const Meter = styled(a.div)({
  width: 400,
  height: 70,
  backgroundColor: "skyblue",
});
