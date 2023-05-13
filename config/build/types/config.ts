export type BuildMoMode = 'production' | 'development'

export interface BuildPaths {
  entry: string
  build: string
  html: string
}

export interface BuildOptions {
  mode: BuildMoMode
  paths: BuildPaths
  isDev: boolean
}
