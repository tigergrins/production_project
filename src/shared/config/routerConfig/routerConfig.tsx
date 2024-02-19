import { About } from 'pages/About'
import { Main } from 'pages/Main'
import { NotFound } from 'pages/NotFound'
import { Profile } from 'pages/Profile'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
	// last
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <Main/>
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <About/>
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <Profile/>
  },
	// last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound/>
  }
}
