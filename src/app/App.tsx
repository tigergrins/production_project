import { useTheme } from 'app/providers/ThemeProviders'
import { Suspense } from 'react'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { classNames } from '../shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'

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
