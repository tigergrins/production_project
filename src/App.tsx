import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './index.scss'
import { AboutAsync } from './pages/About/About.async'
import { MainAsync } from './pages/Main/Main.async'

export default function App() {
  return (
    <div className="app">
      <Link to='/'>Главная</Link>
      <Link to='/about'>О компании</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainAsync/>}/>
          <Route path={'/about'} element={<AboutAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}
