import { classNames } from 'shared/lib/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

export enum Lang {
  RU = 'ru',
  EN = 'en',
}

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { i18n } = useTranslation()

  const toggle = (lang: Lang) => {
    void i18n.changeLanguage(lang)
  }

  return (
    <div className={classNames(cls.LangSwitcher, {}, [props.className ?? ''])}>
      <Button
        theme={ThemeButton.CLEAR}
        onClick={() => { toggle(Lang.RU) }}
      >
          RU
      </Button>

      <span> | </span>

      <Button
        theme={ThemeButton.CLEAR}
        onClick={() => { toggle(Lang.EN) }}
      >
        EN
      </Button>
    </div>
  )
}
