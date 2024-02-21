export type BuildMoMode = 'production' | 'development'

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildEnv {
  mode: BuildMoMode
  port: number
	apiUrl: string
}

export interface BuildOptions {
  mode: BuildMoMode
  paths: BuildPaths
  isDev: boolean
  port: number
	apiUrl: string
}
