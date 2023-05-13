import webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolves'
import { buildPlugins } from './buildPlugins'
import { BuildOptions } from './types/config'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths} = options
  return {
    mode: mode,
    module: {
      rules: buildLoaders()
    },
    resolve: buildResolvers(),
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].bundle.js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options)
  }
}
