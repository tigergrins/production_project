import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutAsync } from './pages/About/About.async'
import { MainAsync } from './pages/Main/Main.async'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Change theme</button>
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
