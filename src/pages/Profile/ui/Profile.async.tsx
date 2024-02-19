import { lazy } from 'react'

export const ProfileAsync = lazy(async () => await new Promise((resolve) => {
  // FIXME: delete
  // @ts-expect-error
  setTimeout(() => { resolve(import('./Profile')) }, 1500)
}))
