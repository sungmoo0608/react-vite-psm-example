import React, { useState } from 'react'

const InputGrade = () => {
  //let text = ''
  const [name, setName] = useState('')
  const [kor, setKor] = useState(0)
  const [eng, setEng] = useState(0)
  const [math, setMath] = useState(0)

  //prettier-ignore
  const onNameChange = (event) => {
    setName(event.target.value);
  }
  const onKorChange = (event) => {
    setKor(event.target.value)
  }
  const onEngChange = (event) => {
    setEng(event.target.value)
  }
  const onMathChange = (event) => {
    setMath(event.target.value)
  }

  //prettier-ignore
  return (
    <div>
      이름 : <input name="name" onChange={onNameChange} value={name} /> <br />
      국어 : <input name="kor" onChange={onKorChange} value={kor} /><br />
      영어 : <input name="eng" onChange={onEngChange} value={eng} /><br />
      수학 : <input name="math" onChange={onMathChange} value={math} /><br />
      <div>
        <div>총점 : {Number(kor)+Number(eng)+Number(math)}</div>
        <div>평균 : {(Number(kor)+Number(eng)+Number(math))/3.0}</div>
      </div>
    </div>
  )
}

export default InputGrade
