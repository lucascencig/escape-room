import React from 'react'
import { useState, useEffect } from 'react'
import s from './styles/beggining.module.css'

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const empty = []
const BoardNumbers = () => {
  const [selectedNumber, setSelectedNumber] = useState(null)

  const handleClick = (number) => {
    setSelectedNumber(number)
  }

  useEffect(() => {
    setSelectedNumber(null)
  }, [])

  return (
    <div className={s.board}>
      <section>
        <div>
          <input type="text" value={selectedNumber} disabled />
        </div>
      </section>
      <div className={s.game}>

        {
          numbers.map((e, index) => {
            return (
              <button onClick={() => handleClick(index)} key={e} className=''>
                {index}
              </button>
            )
          }
          )}
      </div>

    </div>
  )
}

export default BoardNumbers