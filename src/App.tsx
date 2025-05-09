import Logo from './assets/BoomLogo2025.svg?react';
import './App.css'
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState<string>("");
  const [signupStatus, setSignupStatus] = useState<"ready" | "loading" | "done" | "error">("ready");

  const handleSignup = () => {
    setSignupStatus("loading");
    fetch(
      "https://zu0rim0p04.execute-api.us-east-1.amazonaws.com/default/email-signup-handler",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "email": email,
          "newsletter": "boom",
        }),
      },
    ).then((resp) => {
      if (resp.status == 200) {
        setSignupStatus("done");
      } else {
        setSignupStatus("error");
      }
    }).catch(() => {
      setSignupStatus("error");
    })
  };
  const emailValid = () => {
    return email.length > 0 && email.includes("@") && email.includes(".");
  }
  return (
    <>
      <div>
        <a>
          <Logo className="logo react" />
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
        {signupStatus == "ready" && (
          <>
            <p>
              <input className="email-input" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
            </p>
            <button disabled={!emailValid()} onClick={handleSignup}>
              I'm interested.
            </button>
          </>
        )}
        {signupStatus == "loading" && (
          <p style={{ fontSize: "80%" }}>Loading...</p>
        )}
        {signupStatus == "done" && (
          <p style={{ color: 'green' }}>Thank you for signing up! We'll be in touch. 🙂</p>
        )}
        {signupStatus == "error" && (
          <p style={{ color: 'red' }}>An error occurred. Please email <a href="mailto:newsletter@boomlanguages.com">newsletter@boomlanguages.com</a> to sign up manually.</p>
        )}
      </div>
      <p className="read-the-docs">
        A <a href="https://pagekey.io/">PageKey</a> project.
      </p>
    </>
  )
}

export default App
