import { classNames } from 'shared/lib/classNames/classNames'
// import cls from './Profile.module.scss'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useEffect } from 'react'

interface ProfileProps {
	className?: string
}

const initialReducers: ReducersList = {
	profile: profileReducer
}

const Profile = (props: ProfileProps) => {
	const { t } = useTranslation('profile')
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
			<div className={classNames('', {}, [props.className ?? ''])}>
				{t('profile')}
				<ProfileCard />
			</div>
		</DynamicModuleLoader>
	)
}

export default Profile
