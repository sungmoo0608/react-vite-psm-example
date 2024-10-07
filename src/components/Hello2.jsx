import React from 'react'

const Hello2 = ({ color, name, age }) => {
  return (
    //prettier-ignore
    <div style={{color:color}}>
      안뇽안뇽안뇽{color}<br/>
      색상:{name}<br/>
      나이:{age}<br/>
    </div>
  )
}

export default Hello2
