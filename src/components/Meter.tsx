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
    to: async (next) => {
      if (toggle) {
        await next({
          width: "100%",
        });
        await next({
          backgroundColor: "skyblue",
        });
      } else {
        await next({
          backgroundColor: "#aaa",
        });
        await next({
          width: "0%",
        });
      }
    },
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
