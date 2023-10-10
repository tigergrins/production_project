import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import React, { InputHTMLAttributes, memo } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
	className?: string
	value?: string
	label?: string
	onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
	const {
		value,
		onChange,
		type = 'text',
		label,
		...otherProps
	} = props

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	return (
		<div className={classNames(cls.Input, {}, [props.className ?? ''])}>
			{label && <div className={cls.label}>{label}</div>}
			<input type={type}
						 value={value}
						 onChange={onChangeHandler}
						 {...otherProps}>
			</input>
		</div>
	)
})
