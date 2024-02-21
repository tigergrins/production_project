import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import { BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		entry: '',
		html: '',
		src: path.resolve(__dirname, '..', '..', 'src')
	}

	// config.resolve?.modules?.push(paths.src)
	if (config.resolve) config.resolve.modules = [ paths.src, "node_modules" ]
	config.resolve?.extensions?.push('ts', 'tsx')

	config.module!.rules = config.module?.rules?.map((rule: any) => {
		if (/svg/.test(rule.test as string)) {
			return {...rule, exclude: /\.svg$/i}
		}

		return rule
	})

  config.module?.rules?.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  })

	config.module?.rules?.push(buildCssLoader(true))

	config.plugins?.push(new DefinePlugin({
		__IS_DEV__: true,
		__API__: '',
	}))

	return config
}
