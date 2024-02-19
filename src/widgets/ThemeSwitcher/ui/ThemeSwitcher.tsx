import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProviders'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { memo } from 'react'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button theme={ButtonTheme.CLEAR}
            className={classNames(
              cls.ThemeSwitcher,
              {},
              [props.className ?? ''])}
              onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>
  )
})
