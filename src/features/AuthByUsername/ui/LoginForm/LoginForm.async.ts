import { FC, lazy } from 'react'
import { LoginFormProps } from './LoginForm'

export const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => await new Promise((resolve) => {
  // FIXME: For the course
  // @ts-ignore
  setTimeout(() => { resolve(import('./LoginForm')) }, 1500)
}))
