import React from 'react'
import { useState } from 'react'

export const QuestionTwo = () => {
  const [place, setPlace] = useState("")
  return (
    <div className="question">
      <label>
        <h2>Question Two...</h2>
        <div className="select">
          <select
            onChange={event => setPlace(event.target.value)}
            value={place}
          >
            <option value="" selected disabled>Choose your place</option>
            <option value="place1">Place1</option>
            <option value="place2">Place2</option>
            <option value="place3">Place3</option>
          </select>
        </div>
      </label>
    </div>
  )

}