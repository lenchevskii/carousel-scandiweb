import { Header, Footer, Carousel }     from 'components'
import styles                           from './app.scss'
import React                            from 'react'

const App = () => (
  <div className={styles.container}>
    <Header />
    <Carousel />
    <Footer />
  </div>
)

export default App