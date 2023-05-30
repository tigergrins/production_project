import { lazy } from 'react';

export const AboutAsync = lazy(() => new Promise((res) => {
  //FIXME: delete
  //@ts-ignore
  setTimeout(() => res(import('./About')), 1500)
}));
