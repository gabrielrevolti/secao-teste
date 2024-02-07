import { useState } from 'react'
import "./App.css"

function App() {
  const [coments, setComents] = useState([])
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newComent = {
      id: Math.floor(Math.random() * 10000),
      email: email,
      text: text,
      createdAt: new Date()
    }
      
    setComents(state => [newComent, ...state])
    setEmail("")
    setText("")

    console.log('Enviado')
  }

  return (
    <>
    <div className='container'>
      <h1>Seção de comentários</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id='email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
       
        <div>
          <label htmlFor="comentario">Comentários: </label>
            <textarea 
              id="comentario" cols="60" rows="10" value={text} onChange={(e) => setText(e.target.value)}>
            </textarea>
        </div>
      
        <button type='submit'>Enviar Comentário</button>
      </form>

      <div className='comentarios'>
        {
        coments.length === 0 ? <p>Seja o primeiro a comentar</p> : coments.map((coment) => {
          return (
            <div className='bloco' key={coment.id}>
              <h2>{coment.email}</h2>
              <p>Em {coment.createdAt.toLocaleString()}</p>
              <p>{coment.text}</p>
            </div>
          )})
        }
      </div>
    </div>
    </>
  )
}

export default App
