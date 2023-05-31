import { useTheme } from 'app/providers/ThemeProviders'
import 'app/styles/index.scss'
import { Link } from 'react-router-dom'
import { classNames } from '../shared/lib/classNames'
import { AppRouter } from './providers/router'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О компании</Link>

      <AppRouter/>
    </div>
  )
}
