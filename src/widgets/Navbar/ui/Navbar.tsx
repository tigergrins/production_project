import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './Navbar.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
	const [isOpened, setIsOpened] = useState(false)
  const { t } = useTranslation()
	const Logo = 'Logo'

	const onToggleModal = useCallback(() => {
		setIsOpened(prev => !prev)
	}, [])

  return (
    <div className={classNames(cls.Navbar, {}, [props.className ?? ''])}>
      <div className='logo'>{Logo}</div>

      <Button theme={ButtonTheme.CLEAR_INVERTED}
							onClick={onToggleModal}
			>
        {t('logIn')}
      </Button>

			<Modal isOpened={isOpened}
						 onClose={onToggleModal}
		  >
				{/* eslint-disable */}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore error voluptatem dolorum,
				expedita deleniti aliquam magnam. Dolor recusandae aliquid, asperiores voluptas atque, obcaecati
				 dicta ipsam molestiae minima, praesentium dolorum ratione!
			</Modal>
    </div>
  )
}
