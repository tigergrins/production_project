import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  const toggleTitle = 'Toggle'

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
      <button
         data-testid='sidebar-toggle'
        onClick={onToggle}
      >
        {toggleTitle}
      </button>

      <div className={cls.switchers}>
        <LangSwitcher/>
        <ThemeSwitcher/>
      </div>
    </div>
  )
}
