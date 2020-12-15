import { Header, Footer, Carousel } from 'components'
import styles from './app.css'
import React from 'react'

const App = () => (
  <div className={styles.container}>
    <Header/>
    {/* <hr/>
    <Switch>
      <Route path="/contact" component={Contact} />
      <Route component={Notfound} />
    </Switch> */}
    <Carousel />
    <Footer />
  </div>
)

export default App