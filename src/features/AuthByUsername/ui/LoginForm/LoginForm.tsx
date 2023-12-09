import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { memo, useCallback } from 'react'
import { getLogin } from '../../model/selectors/getLogin/getLogin'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
	className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const {
		username,
		password,
		isLoading,
		error,
	} = useSelector(getLogin)

	const onChangeName = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value))
	}, [dispatch])

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value))
	}, [dispatch])

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }))
	}, [dispatch, username, password])

	return (
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
	)
})
