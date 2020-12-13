import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { Header, Footer, Carousel } from 'components'
import styles from './App.css'
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