import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { memo } from 'react'

export enum Lang {
  RU = 'ru',
  EN = 'en',
}

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { i18n } = useTranslation()

  const toggle = (lang: Lang) => {
    void i18n.changeLanguage(lang)
  }

  const langRu = 'RU'
  const langEn = 'EN'

  return (
    <div className={classNames(cls.LangSwitcher, {}, [props.className ?? ''])}>
      <Button
        theme={ButtonTheme.CLEAR}
        onClick={() => { toggle(Lang.RU) }}
				style={{ color: 'var(--inverted-primary-color)' }}
      >
          {langRu}
      </Button>

      <span> | </span>

      <Button
        theme={ButtonTheme.CLEAR}
        onClick={() => { toggle(Lang.EN) }}
				style={{ color: 'var(--inverted-primary-color)' }}
      >
        {langEn}
      </Button>
    </div>
  )
})
