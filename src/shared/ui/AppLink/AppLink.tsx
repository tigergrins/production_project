import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { memo, type FC, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
	children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className = '',
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
})
