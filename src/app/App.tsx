import { useTheme } from 'app/providers/ThemeProviders'
import 'app/styles/index.scss'
import { About } from 'pages/About'
import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { classNames } from '../shared/lib/classNames'
import { Main } from 'pages/Main'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О компании</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/about'} element={<About/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}
