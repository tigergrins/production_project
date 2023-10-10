import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()
	const Logo = 'Logo'

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

  return (
    <div className={classNames(cls.Navbar, {}, [props.className ?? ''])}>
      <div className='logo'>{Logo}</div>

      <Button theme={ButtonTheme.CLEAR_INVERTED}
							onClick={onShowModal}
			>
        {t('logIn')}
      </Button>

			<LoginModal isOpen={isAuthModal}
									onClose={onCloseModal}
			/>
    </div>
  )
}
