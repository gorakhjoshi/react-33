import { useState, useTransition } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [inputCharacter, setInputCharacter] = useState([])

  const [isLoading, startTransition] = useTransition()

  console.log(isLoading)

  // let inputString = ''
  // console.log(inputString)

  function handleInput(e) {
    const inputString = e.target.value
    setInput(inputString)

    startTransition(() => {
      const characters = []
      for (let i = 0; i < 50000; i++) {
        characters.push(inputString)
      }
      setInputCharacter(characters)
    })
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      {isLoading ? <div>Loading...</div> : inputCharacter.map((character, index) => <div key={index}>{character}</div>)}
    </div>
  )
}

export default App
