import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
	className?: string
	onSuccess(): void
}

const initialReducers: ReducersList = {
	login: loginReducer
}

const LoginForm = memo((props: LoginFormProps) => {
	const {
		onSuccess
	} = props

	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const username = useSelector(getLoginUsername)
	const password = useSelector(getLoginPassword)
	const isLoading = useSelector(getLoginIsLoading)
	const error = useSelector(getLoginError)

	const onChangeName = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value))
	}, [dispatch])

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value))
	}, [dispatch])

	const onLoginClick = useCallback(async () => {
		const result = await dispatch(loginByUsername({ username, password }))

		if (result.meta.requestStatus === 'fulfilled') {
			onSuccess()
		}
	}, [dispatch, username, password, onSuccess])

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
			<div className={classNames(cls.LoginForm, {}, [props.className ?? ''])}>
				<Text title={t('loginForm')}/>

				{error && <Text text={t('wrongLoginOrPassword')} theme={TextTheme.ERROR}/>}

				<Input label={t('username')}
							 placeholder={t('enterUsername')}
							 value={username}
							 onChange={onChangeName}/>

				<Input type="password"
							 label={t('password')}
							 placeholder={t('enterPassword')}
							 value={password}
							 onChange={onChangePassword}/>

				<Button className={cls.loginBtn}
								theme={ButtonTheme.OUTLINE}
								onClick={onLoginClick}
								disabled={isLoading}>
					{t('login')}
				</Button>
			</div>
		</DynamicModuleLoader>
	)
})

export default LoginForm
