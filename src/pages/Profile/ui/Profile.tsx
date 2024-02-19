import { classNames } from 'shared/lib/classNames/classNames'
// import cls from './Profile.module.scss'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

interface ProfileProps {
	className?: string
}

const initialReducers: ReducersList = {
	profile: profileReducer
}

const Profile = (props: ProfileProps) => {
	const { t } = useTranslation('profile')

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
			<div className={classNames('', {}, [props.className ?? ''])}>
				{t('profile')}
			</div>
		</DynamicModuleLoader>
	)
}

export default Profile
