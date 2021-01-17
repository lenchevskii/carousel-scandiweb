import React                            from 'react'

const Button = ({ style, text, writing, click, badge, href }) => (
  <a href={href}>
    <button className={style} onClick={click}>
      <p className={writing}>
        {text}
        <i className={`fa ${badge}`}></i>
      </p>
    </button>
  </a>
)

export default Button