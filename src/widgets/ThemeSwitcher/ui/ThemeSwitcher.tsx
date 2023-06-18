import { classNames } from 'shared/lib/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProviders'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [props.className ?? ''])} onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>
  )
}
