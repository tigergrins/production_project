import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
	className?: string
}

export const LoginForm = (props: LoginFormProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames(cls.LoginForm, {}, [props.className ?? ''])}>
			<Input label={t('username')}
						 placeholder={t('enterUsername')}/>
			<Input type="password"
						 label={t('password')}
						 placeholder={t('enterPassword')}/>
			<Button className={cls.loginBtn}>
				{t('logIn')}
			</Button>
		</div>
	)
}
