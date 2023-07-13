
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFound.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundProps {
  className?: string
}

export const NotFound = (props: NotFoundProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.NotFound, {}, [props.className ?? ''])}>
      {t('pageNotFound')}
    </div>
  )
}
