import { animated, useSpring } from "@react-spring/web"

function App() {
  const styles = useSpring({
    from:{
      opacity:0,
      color: "pink",
      // translateY: 20,
      y:500,//上と同じ意味
      scale:0.5,
    },
    to:{
      opacity:1,
      color: "blue",
      y: 0,
      scale:1,
    }
  })
  return (
    <div className="App">
      <animated.h1 style={styles}>Hello Spring</animated.h1>
    </div>
  )
}

export default App
