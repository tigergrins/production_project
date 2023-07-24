import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton'
import { useTranslation } from 'react-i18next'

export default function Main () {
  const { t } = useTranslation('main')

  return (
    <div>
      <BugButton/>
      {t('main')}
    </div>
  )
}
