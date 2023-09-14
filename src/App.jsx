import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './assets/components/blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Blogs></Blogs>
    </>
  )
}

export default App
