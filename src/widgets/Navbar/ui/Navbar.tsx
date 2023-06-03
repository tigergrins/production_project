import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {

  return (
    <div className={classNames(cls.Navbar, {}, [props.className])}>
      <ThemeSwitcher/>
      
      <div className={cls.links}>
        <AppLink
          to='/'
          theme={AppLinkTheme.INVERTED}
        >
            Главная
        </AppLink>
        <AppLink
          to='/about'
          theme={AppLinkTheme.INVERTED}
        >
          О компании
          </AppLink>
      </div>
    </div>
  )
}
