import React                            from 'react'

const Popup = ({ name, style }) => (
  <form action='' method='POST' id={name} className={style}>
    Link: <input type='text'/>
  </form>
)

export default Popup