import ReactDOM                         from 'react-dom'
import { App, Splash }                  from 'components'
import React                            from 'react'

ReactDOM.render(
  <React.StrictMode>
    <Splash Application={App} />
  </React.StrictMode>,
  document.getElementById('root')
)