import { classNames } from 'shared/lib/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed ,setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [props.className])}>
      <button onClick={onToggle}>Toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        {/* LanguageSwitcher */}
      </div>
    </div>
  )
}
