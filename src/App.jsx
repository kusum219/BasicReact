import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Projects/Todo-list/Todo'
import Accordian from './Projects/Accordians/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  {
 /* <Todo />*/
}
<Accordian />
</>
  )
}

export default App
