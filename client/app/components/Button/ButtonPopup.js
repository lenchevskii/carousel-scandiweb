import React, { useEffect, useState } from 'react'
import { Button, Popup }              from 'components'
import styles                         from '../Popup/popup.scss'

const ButtonPopup = ({ writing, badge, style, text }) => {
  const [visible, setVisibility] = useState(false)

  // useEffect(() => hidden ? null : (document.addEventListener('mousedown' || 'keydown', )))

  return  <div>
            <Button writing = {writing} 
                    badge   = {badge}
                    style   = {style}
                    click   = {() => setVisibility(!visible)}
                    text    = {text}
            />
            {/* {<Popup style={styles.popup}/>} */}
          </div>
}

export default ButtonPopup