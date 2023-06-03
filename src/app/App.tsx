import { useTheme } from 'app/providers/ThemeProviders'
import 'app/styles/index.scss'
import { Navbar } from 'widgets/Navbar'
import { classNames } from '../shared/lib/classNames'
import { AppRouter } from './providers/router'

export default function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}
