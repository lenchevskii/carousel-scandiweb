import React, { useReducer } from 'react'
import styles from './carousel.scss'
import i1 from '../../static/pictures/1.png'
import i2 from '../../static/pictures/2.jpg'
import v1 from '../../static/videos/1.mp4'
import { Image, Video } from 'components'

const reducer = (state, action) => {
  switch (action.type) {
    case 'leftAction':
      console.log(state)
      return state === 0 ? (-100 * (action.collection.length - 1)) : (state + 100)
    case 'rightAction':
      return state === -100 * (action.collection.length - 1) ? (0) : (state - 100)
  }
}

export default function Carousel() {

  const sliderArray = [
    <Image src={i1} />,
    <Image src={i2} />,
    <Image src='https://scandiweb.com/assets/images/scandiweb_logo.png' />
  ]

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
        <button id={styles.goLeft} onClick={() => dispatch({
          type: 'leftAction',
          collection: sliderArray
        })}>Previous</button>
        <button id={styles.goRight} onClick={() => dispatch({
          type: 'rightAction',
          collection: sliderArray
        })}>Nexta</button>
      </div>
    </div>
  )
}