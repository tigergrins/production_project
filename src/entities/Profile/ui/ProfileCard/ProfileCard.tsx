import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/modal/selectos/getProfileData/getProfileData'
import { getProfileLoading } from 'entities/Profile/modal/selectos/getProfileLoading/getProfileLoading'
import { getProfileError } from 'entities/Profile/modal/selectos/getProfileError/getProfileError'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'


interface ProfileCardProps {
	className?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
	} = props

	const { t } = useTranslation()
	const data = useSelector(getProfileData)
	const isLoading = useSelector(getProfileLoading)
	const error = useSelector(getProfileError)

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.header}>
				<Text title={t('profile')}/>
				<Button
					theme={ButtonTheme.OUTLINE}
					className={cls.editBtn}>
					{t('editProfile')}
				</Button>
			</div>
			<div className={cls.data}>
				<Input
					value={data?.name}
					placeholder={t('yourName')}
					className={cls.input}
				/>

				<Input
					value={data?.lastname}
					placeholder={t('yourLastName')}
					className={cls.input}
				/>
			</div>
		</div>
	)
}
