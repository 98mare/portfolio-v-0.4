import React from 'react';
import { config, useSpring, animated } from 'react-spring';

function SpringMouseScrollingAnimation() {
  const mouseContainer = {
    width: '40px',
    height: '60px',
    borderRadius: '20px',
    border: '3px solid rgb(207, 83, 52)',
    marginLeft: '250px',
    marginTop: '50px',
  }
  const styles = useSpring({
    loop: true,
    from: { y: 0 },
    to: { y: 30 },
    config: {
      duration: 2000
    },
  })
  return (
    <div style={mouseContainer}>
      <animated.div style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'rgb(207, 83, 52)',
        marginLeft: '15px',
        ...styles,
      }}>

      </animated.div>
    </div>
  )
}

export default SpringMouseScrollingAnimation;
