import React, { useReducer } from 'react'
import styles from './carousel.scss'
import i1 from '../../static/pictures/external-content_440x440.png'
import i2 from '../../static/pictures/external-content_1920x1080.png'
import v1 from '../../static/videos/1.mp4'
import { Image, Video } from 'components'

const reducer = (state, action) => {
  switch (action.type) {
    case 'leftAction':
      return state === 0 ? (-100 * (action.collection.length - 1)) : (state + 100)
    case 'rightAction':
      return state === -100 * (action.collection.length - 1) ? (0) : (state - 100)
  }
}

export default function Carousel() {

  const sliderArray = [
    <Image src={i1} />,
    <Image src={i2} />,
    <Image src='https://scandiweb.com/assets/images/scandiweb_logo.png' />,
    <Video src={v1} />
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
        <button id={styles.goLeft}
          onClick={() => dispatch({
            type: 'leftAction',
            collection: sliderArray
          })}
          tabIndex='-1'
        >
          <i className="fa fa-space-shuttle fa-rotate-180" aria-hidden="true"></i>
        </button>
        <button id={styles.goRight}
          onClick={() => dispatch({
            type: 'rightAction',
            collection: sliderArray
          })}
          tabIndex='-1'
        >
          <i className="fa fa-space-shuttle" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  )
}