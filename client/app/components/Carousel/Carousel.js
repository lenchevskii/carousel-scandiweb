import React, { useEffect, useReducer } from 'react'
import { Image, Video, Text }           from 'components'
import styles                           from './carousel.scss'
import i1                               from '../../static/pictures/external-content_440x440.png'
import i2                               from '../../static/pictures/external-content_1920x1080.png'
import v1                               from '../../static/videos/external-content.mp4'

const reducer = (state, action) => {
  switch (action.type) {
    case 'leftAction':
      return state === 0 ? (-100 * (action.collection.length - 1)) : (state + 100)
    case 'rightAction':
      return state === -100 * (action.collection.length - 1) ? (0) : (state - 100)
  }
}

export default function Carousel() {

  const sliderArray   = [ <Image src={i1} />
                        , <Text />
                        , <Image src={i2} />
                        , <Image src='https://scandiweb.com/assets/images/scandiweb_logo.png' />
                        , <Video src={v1} />
                        ]

  const [x, dispatch] = useReducer(reducer, 0)

  const left          = { type: 'leftAction', collection: sliderArray }
  
  const rigth         = { type: 'rightAction', collection: sliderArray }

  const onKeyUp       = (e) => (e.key === 'ArrowRight')
                              ? dispatch(rigth) : (e.key === 'ArrowLeft')
                                ? dispatch(left) : undefined

  useEffect(() => (addEventListener('keyup', onKeyUp)), [])

  useEffect(() => (addEventListener('touchmove', (e) => console.log(e))))

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {
          sliderArray.map((item, index) => (
            <div key={index}
              className={styles.slide}
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          ))
        }
        <button id={styles.goLeft} onClick={() => dispatch(left)}>
          <i className="fa fa-space-shuttle fa-rotate-180"></i>
        </button>
        <button id={styles.goRight} onClick={() => dispatch(rigth)}>
          <i className="fa fa-space-shuttle"></i>
        </button>
      </div>
    </div>
  )
}