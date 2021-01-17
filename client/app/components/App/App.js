import { Header, Footer, Carousel, Popup }     from 'components'
import styles                           from './app.scss'
import React                            from 'react'

const App = () => (
  <div className={styles.container}>
    <Header />
    <Carousel />
    <Footer />

    <Popup id={'jump'} style={styles.jump} close={true}/>
  </div>
)

export default App