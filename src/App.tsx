import React, { useRef, useState } from 'react'

interface User {
  id: number
  name: string
}

const App: React.FC = () => {
  // string | number | object | boolean | null | undefined
  const [user, setUser] = useState<User>({
    id: 1,
    name: 'haecal',
  })
  const inputRef = useRef<HTMLInputElement>(null)
  const divRef = useRef<HTMLInputElement>(null)

  function handleInput() {
    console.log(inputRef.current)
  }

  return (
    <div ref={divRef}>
      <h1>
        {user.id} - {user.name}
      </h1>
      <input type="text" ref={inputRef} onChange={handleInput} />
    </div>
  )
}

export default App
