import React, { useReducer } from 'react'
import styles from './carousel.scss'

const sliderArray = [1, 2, 3, 4, 5]

const reducer = (state, action) => {
  switch (action.type) {
    case 'leftAction':
      return state === 0 ? (-100 * (sliderArray.length - 1)) : (state + 100)
    case 'rightAction':
      return state === -100 * (sliderArray.length - 1) ? (0) : (state - 100)
    default:
      throw new Error()
  }
}

const Carousel = () => {
  const [x, dispatch] = useReducer(reducer, 0)

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {
          sliderArray.map((item, index) => {
            return (
              <div key={index}
                className={styles.slide}
                style={{ transform: `translateX(${x}%)` }}
              >
                {item}
              </div>
            )
          })
        }
        <button id={styles.goLeft} onClick={() => dispatch({type: 'leftAction'})}>Left</button>
        <button id={styles.goRight} onClick={() => dispatch({type: 'rightAction'})}>Right</button>
      </div>
    </div>
  )
}

export default Carousel