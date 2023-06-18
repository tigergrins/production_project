import { lazy } from 'react'

export const AboutAsync = lazy(async () => await new Promise((resolve) => {
  // FIXME: delete
  // @ts-expect-error
  setTimeout(() => { resolve(import('./About')) }, 1500)
}))
