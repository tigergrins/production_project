import { useTheme } from 'app/providers/ThemeProviders'
import { Suspense, useEffect } from 'react'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { classNames } from '../shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

export default function App () {
  const {
    theme = ''
  } = useTheme()

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(userActions.initAuthData())
	}, [dispatch])

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
