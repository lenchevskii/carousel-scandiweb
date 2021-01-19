import { Header
       , Footer
       , Carousel
       , Popup 
       }                                from 'components'
import styles                           from './app.scss'
import React                            from 'react'

const App = () => (
  <div className  = { styles.container }>
    <Header />
    <Carousel />
    <Footer />

    {/* <Popup placeholder  = { 'Jump to ..' }
           style        = { styles.jump }
           close        = { true }
           id           = { 'jump' }
    />
    <Popup placeholder  = { 'Link to add ..' }
           style        = { styles.add }
           close        = { true }
           id           = { 'add' }
    /> */}
  </div>
)

export default App