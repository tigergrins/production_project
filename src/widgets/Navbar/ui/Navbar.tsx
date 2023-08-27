import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { t } = useTranslation()
	const Logo = 'Logo'
  return (
    <div className={classNames(cls.Navbar, {}, [props.className ?? ''])}>
      <div className='logo'>{Logo}</div>
      <div className={cls.links}>
        /
      </div>
    </div>
  )
}
