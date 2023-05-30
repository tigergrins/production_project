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
}

export interface BuildOptions {
  mode: BuildMoMode
  paths: BuildPaths
  isDev: boolean
  port: number
}
