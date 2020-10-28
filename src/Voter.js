/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import s from 'styled-components'

const Button = s.button`
  background-color: lime;
  color: black;
  font-size: 14px;
  padding: 3px 3px;
  border-radius: 5px;
  margin: 4px 4px;
  cursor: pointer;
`

const Voter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      {count}
      <Button onClick={() => setCount(count - 1)}>-</Button>
    </div>
  )
}
export default Voter
