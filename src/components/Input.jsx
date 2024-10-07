import React, { useState } from 'react'

const Input = () => {
  //let text = ''
  const [text, setText] = useState('')

  //prettier-ignore
  const onChange = (event) => {
    setText(event.target.value)
  }

  const onReset = () => {
    setText('')
  }

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : {text}</b>
      </div>
    </div>
  )
}

export default Input
