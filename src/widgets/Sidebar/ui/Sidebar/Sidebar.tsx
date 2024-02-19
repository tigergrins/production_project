import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'


interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

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
					SidebarItemsList.map((item) => (
						<SidebarItem key={item.path}
								         item={item}
												 collapsed={collapsed}/>
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
