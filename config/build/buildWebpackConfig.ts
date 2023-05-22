import webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolves'
import { buildPlugins } from './buildPlugins'
import { BuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options

  return {
    mode: mode,
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(),
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].bundle.js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
