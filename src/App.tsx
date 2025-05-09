import { useState } from 'react'
import boomLogo from './assets/BoomLogo2025.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={boomLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Learn languages for real.</h2>
      <div className="card">
        <p>
          <b>You're not supposed to learn a language by yourself, sitting in a dark room.</b>
        </p>
        <p>
          It's all about going out in the world 🌎 and using the language in real situations!
        </p>
        <p>
          Boom helps with that. Catalog your journeys ✍️, use our learning aids 🧠, and live your unique language learning journey.
        </p>
        <p>
          We're still working on the app - sign up below to get notified when the app is available!
        </p>
        <p>
          (We're looking for beta testers too!)
        </p>
        <button>
          I'm interested.
        </button>
      </div>
      <p className="read-the-docs">
        A <a href="https://pagekey.io/">PageKey</a> project.
      </p>
    </>
  )
}

export default App
