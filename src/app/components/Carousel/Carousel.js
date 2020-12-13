import React from 'react'
import styles from './carousel.css'

const Carousel = () => {
  const sliderArray = [1, 2, 3, 4, 5]

  return (
    <div className={styles.slider}>
      {
        sliderArray.map((x, index) => {
          return(
            <div key={index} className={styles.slide}>{x}</div>
          )
        })
      }
      <button className={styles.btn-styles, styles.goLeft}>Left</button>
      <button className={styles.btn-styles, styles.goRight}>Right</button>
    </div>
  )
}

export default Carousel