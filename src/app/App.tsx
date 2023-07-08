import { useTheme } from 'app/providers/ThemeProviders'
import 'app/styles/index.scss'
import { Navbar } from 'widgets/Navbar'
import { classNames } from '../shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'

export default function App () {
  const {
    theme = ''
  } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={''}>
        <Navbar/>
        <div className={'content'}>
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}
