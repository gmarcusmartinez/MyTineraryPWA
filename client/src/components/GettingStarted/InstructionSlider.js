import React, { useState } from 'react'
import HowTo from '../Common/HowTo'
import instructions from './Instructions'

const InstructionSlider = () => {
  const [current, setCurrent] = useState(0)

  const next = () => {
    const newIndex = current + 1
    if (newIndex === instructions.length) {
      setCurrent(0)
    } else {
      setCurrent(newIndex)
    }
  }
  const previous = () => {
    const newIndex = current - 1
    if (newIndex === -1) {
      setCurrent(instructions.length - 1)
    } else {
      setCurrent(newIndex)
    }
  }
  let instruction = (
    <HowTo
      instruction={instructions[current]}
      next={next}
      previous={previous}
    />
  )
  return <div>{instruction}</div>
}

export default InstructionSlider
