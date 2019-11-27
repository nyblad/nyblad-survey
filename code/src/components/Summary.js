import React from 'react'

export const Summary = (props) => {

  // const [reload, setReload] = useState(false)

  // const refreshPage = () => {
  //   setReload(true)
  // }
  //Funtion to reload page ans start over - called in button onClick
  const refreshPage = () => {
    window.location.reload(false)
  }

  return (
    <div className="summary">
      <h2>Thank you for your answers, {props.name}:</h2>
      <p>#1: {props.place}</p>
      <p>#2: {props.fruit}</p>
      <p>#3: {props.range}%</p>
      <button onClick={refreshPage}>Restart</button>
    </div>
  )
}