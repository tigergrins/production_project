import { classNames } from 'shared/lib/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Navbar, {}, [props.className ?? ''])}>
      <div className='logo'>Logo</div>
      <div className={cls.links}>
        <AppLink
          to='/'
          theme={AppLinkTheme.INVERTED}
        >
          {t('main')}
        </AppLink>
        <AppLink
          to='/about'
          theme={AppLinkTheme.INVERTED}
        >
          {t('about')}
        </AppLink>
      </div>
    </div>
  )
}
