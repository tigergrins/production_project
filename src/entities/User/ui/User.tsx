import { classNames } from 'shared/lib/classNames/classNames'
import cls from './User.module.scss'

interface UserProps {
	className?: string
}

export const User = (props: UserProps) => {
	
	return (
		<div className={classNames(cls.User, {}, [props.className ?? ''])}>
		</div>
	)
}
