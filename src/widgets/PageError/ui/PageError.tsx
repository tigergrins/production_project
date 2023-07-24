import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

export const PageError = (props: PageErrorProps) => {
  const { t } = useTranslation()

  const reload = () => {
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [props.className ?? ''])}>
      <div>{t('errorWasHappened')}</div>
      <Button onClick={reload}>{t('reloadPage')}</Button>
    </div>
  )
}
