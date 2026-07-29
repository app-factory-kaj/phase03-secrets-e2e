import { useState, useEffect } from 'react'
import './App.css'

function formatDate(date: Date): string {
  return date.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

export default function App() {
  const [now, setNow] = useState<Date>(() => new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="app">
      <nav className="navbar">
        <span className="navbar-brand">phase03-secrets-e2e</span>
      </nav>

      <main className="main">
        <h1 className="heading">Hello, world</h1>
        <p className="subtext">The current date and time, updating every second</p>

        <div className="clock-card">
          <span className="clock-date">{formatDate(now)}</span>
          <span className="clock-separator"> | </span>
          <span className="clock-time">{formatTime(now)}</span>
          <span className="clock-separator"> | </span>
          <span className="clock-label">Local browser time</span>
        </div>

        <p className="footer-note">
          No sign-in, no backend, no external calls — just your browser's clock
        </p>
      </main>
    </div>
  )
}
