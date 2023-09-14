import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from '../Portal/Portal'

const ANIMATION_DELAY = 300

interface ModalProps {
	className?: string
	children?: ReactNode
	isOpened?: boolean
	onClose?: () => void
}

export const Modal = (props: ModalProps) => {
	const {
		children,
		isOpened = false,
		onClose
	} = props

	const [isClosing, setIsClosing] = useState(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		switch (e.key) {
			case 'Escape':
				closeHandler()
		}
	}, [closeHandler])

	useEffect(() => {
		if (isOpened) {
			window.addEventListener('keydown', onKeyDown)
		}

		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown', onKeyDown)
		}
	}, [isOpened, onKeyDown])

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpened,
		[cls.isClosing]: isClosing,
	}

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [props.className ?? ''])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div className={cls.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}
