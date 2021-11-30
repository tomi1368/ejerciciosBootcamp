import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import List from '../components/list/list'
import Users from '../components/users/users'
import {Foo,Foo2} from '../components/foo/foo'

let nums = {
  email:"tomi@gmail.com",
  name:"tomi",
  pass:"foo123"
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <ul className="list">
          <List></List>
        </ul>
        <Users></Users>
        <Foo peron="sad" data={{email:"falopa"}} hola="asda"></Foo>
        <Foo2 {...nums}></Foo2>
      </header>
    </div>
  )
}
/* en docs tengo diagramas, tengo que documentar usando JSDOC, presentacional tengo los subcomponenetes visuales */
export default App
