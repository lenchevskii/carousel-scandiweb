import React, { useState } from 'react'
import styles from './carousel.scss'

const Carousel = () => {
  const sliderArray = [1, 2, 3, 4, 5]
  const [x, setX] = useState(0)
  const goLeft = () => {
    console.log(x)
    x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100)
  }

  const goRight = () => {
    console.log(x)
    x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100)
  }

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {
          sliderArray.map((x, index) => {
            return (
              <div key={index}
                className={styles.slide}
                style={{ transform: `translateX(${x}%)` }}
              >
                {x}
              </div>
            )
          })
        }
        <button id={styles.goLeft} onClick={goLeft}>Left</button>
        <button id={styles.goRight} onClick={goRight}>Right</button>
      </div>
    </div>
  )
}

export default Carousel