import { a, useSpring } from "@react-spring/web";
import styled from "styled-components";

export const LoaderComponent = () => {
  const styles = useSpring({
    from: {
      rotate: "0deg",
    },
    to: {
      rotate: "360deg",
    },
    loop: true,
    config: {
      duration: 400,
    },
  });
  return (
    <div>
      <Loader style={styles} />
    </div>
  );
};

const Loader = styled(a.div)({
  width: 50,
  height: 50,
  borderRadius: "50px",
  border: "5px solid #aaa",
  borderTopColor: "transparent",
});
