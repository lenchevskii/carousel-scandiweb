import React                            from 'react'
import styles                           from './image.scss'

const Image = ({src}) => (
  <img src={src} alt="slide-img" className={styles.image}></img>
)

export default Image