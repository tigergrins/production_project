import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routerConfig/routerConfig'

export default function AppRouter () {
  const { t } = useTranslation('translation')
  return (
    <Suspense fallback={<div>{t('loading')}</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={(
              <div className='page-wrapper'>
                {element}
              </div>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  )
}
