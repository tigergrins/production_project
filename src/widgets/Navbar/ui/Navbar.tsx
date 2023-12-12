import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()
	const athData = useSelector(getUserAuthData)
	const dispatch = useDispatch()

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const onLogout = () => {
		dispatch(userActions.logout())
	}

	if (athData) {
		return (
			<div className={classNames(cls.Navbar, {}, [props.className ?? ''])}>
				<Button theme={ButtonTheme.CLEAR_INVERTED}
								onClick={onLogout}
				>
					{t('logout')}
				</Button>
			</div>
		)
	}

  return (
    <div className={classNames(cls.Navbar, {}, [props.className ?? ''])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED}
							onClick={onShowModal}
			>
        {t('login')}
      </Button>

			{isAuthModal && <LoginModal isOpen={isAuthModal}
																	onClose={onCloseModal}
			/>}
    </div>
  )
}
