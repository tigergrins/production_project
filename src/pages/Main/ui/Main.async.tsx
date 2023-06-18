import { lazy } from 'react'

export const MainAsync = lazy(async () => await new Promise((resolve) => {
  // FIXME: delete
  // @ts-expect-error
  setTimeout(() => { resolve(import('./Main')) }, 1500)
}))
