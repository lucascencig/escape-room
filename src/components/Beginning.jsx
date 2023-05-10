import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import s from './styles/beggining.module.css'
import BoardNumbers from './BoardNumbers'





const Beginning = () => {
  const [board, setBoard] = useState()
  // const [Numbers, setTurn] = useState(TURNS.X)
  const [correct, setCorrect] = useState(null)


  return (
    <div>
      <h1>
        El Reino de Eldoria
      </h1>

      <section>
        <p>"En el antiguo reino de Eldoria, existía un enigma ancestral guardado por sabios y hechiceros. La clave para desentrañar este secreto se encontraba en un código numerico oculto en el libro. Era un número de cuatro cifras que desbloqueaba el conocimiento prohibido".</p>
      </section>

      <section>
        <div>
          <Link to={'/libro'}>
            <p>Leer Libro 📖</p>
          </Link>
        </div>
      </section>

      <div className={s.board}>
        <section className={s.game}>
          <BoardNumbers />
        </section>
      </div>
    </div>
  )
}

export default Beginning