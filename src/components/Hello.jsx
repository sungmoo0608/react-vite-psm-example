import React from 'react'

const Hello = (props) => {
  return (
    //prettier-ignore
    <div style={{color:props.color}}>
      안뇽안뇽안뇽{props.name}<br/>
      나이:{props.age}<br/>
      색상:{props.color}<br/>
    </div>
  )
}

export default Hello
