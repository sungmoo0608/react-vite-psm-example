import React, { useState } from 'react'

const Counter = () => {
  // 화면 갱신을 위하여 리액트가 관리하는 변수
  const [number, setNumber] = useState(0)

  // let number = 0;

  // function setNumber(num){
  //   number = num
  // }

  const onIncrease = () => {
    setNumber(number + 1)
  }

  const onDecrease = () => {
    setNumber(number - 1)
  }

  //prettier-ignore
  return (
    <div>
      <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter
