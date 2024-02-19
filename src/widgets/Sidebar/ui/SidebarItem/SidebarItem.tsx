import { SidebarItemType } from 'widgets/Sidebar/model/items'
import cls from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface SidebarItemProps {
	item: SidebarItemType
	collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
	const {
		item,
		collapsed,
	} = props

	const { t } = useTranslation()

	const mods: Record<string, boolean> = {
		[cls.collapsed]: collapsed,
	}

	return (
		<AppLink to={item.path}
						 theme={AppLinkTheme.INVERTED}
						 className={classNames(cls.item, mods)}>
			<item.Icon className={cls.icon}/>
			<span className={cls.link}>{t(item.text)}</span>
		</AppLink>
	)
})
