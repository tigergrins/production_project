import { lazy } from 'react';

export const MainAsync = lazy(() => new Promise((res) => {
  //FIXME: delete
  //@ts-ignore
  setTimeout(() => res(import('./Main')), 1500)
}));
