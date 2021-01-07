import React                            from 'react'

const Button = ({ style, text, writing, click, badge }) => (
  <button className={style} onClick={click}>
    <p className={writing}>
      {text}
      <i className={`fa ${badge}`}></i>
    </p>
  </button>
)

export default Button