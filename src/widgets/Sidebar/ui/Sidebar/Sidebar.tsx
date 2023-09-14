import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

interface Pages {
	route: string
	icon: React.ReactElement
	text: string
}

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
	const { t } = useTranslation()

	const pages: Pages[] = [
		{
			route: RoutePath.main,
			icon: <MainIcon/>,
			text: t('main')
		},
		{
			route: RoutePath.about,
			icon: <AboutIcon/>,
			text: t('about')
		}
	]

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div
      data-testid='sidebar'
      className={
        classNames(
          cls.Sidebar,
          { [cls.collapsed]: collapsed },
          [props.className ?? ''])
      }
    >
			<div className={cls.items}>
				{
					pages.map((page, index) => (
						<AppLink
						key={`app-link-${index}`}
	          to={page.route}
	          theme={AppLinkTheme.INVERTED}
						className={cls.item}
	        >
						<div className={cls.icon}>{page.icon}</div>
	          <span className={cls.link}>{page.text}</span>
	        </AppLink>
					))
				}
			</div>


      <Button
        data-testid='sidebar-toggle'
        onClick={onToggle}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				square
				size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.switchers}>
        <LangSwitcher/>
        <ThemeSwitcher/>
      </div>
    </div>
  )
}
